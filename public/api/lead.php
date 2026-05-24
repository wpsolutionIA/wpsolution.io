<?php
// POST /api/lead.php — submit lead form to Resend
// Receives: name, email, phone, message, page (optional), service (optional), locale (optional)
// Sends to: benjamin@wpsolution.io, anthony@wpsolution.io, david@wpsolution.io, bbueno@hotmail.fr
// Returns: JSON { ok: bool, id?: string, error?: string }

declare(strict_types=1);

// --- Config
const RESEND_API_KEY = 're_VbEMvWL7_7B3CDGtCEJY7PcCxEv8X7UWk';
const FROM = 'WP Solution Leads <leads@wpsolution.group>';
const RECIPIENTS = [
    'benjamin@wpsolution.io',
    'anthony@wpsolution.io',
    'david@wpsolution.io',
    'bbueno@hotmail.fr',
];
const REPLY_TO_BASE = 'contact@wpsolution.io';

// --- CORS / Method check
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'error' => 'Method not allowed']);
    exit;
}

// --- Parse input (form-encoded OR JSON)
$ct = $_SERVER['CONTENT_TYPE'] ?? '';
if (stripos($ct, 'application/json') !== false) {
    $raw = file_get_contents('php://input');
    $data = json_decode($raw, true) ?: [];
} else {
    $data = $_POST;
}

// --- Honeypot anti-spam
if (!empty($data['website']) || !empty($data['_gotcha'])) {
    // pretend success — bots think they won
    echo json_encode(['ok' => true, 'id' => 'honeypot']);
    exit;
}

// --- Validate
$name    = trim((string)($data['name']    ?? ''));
$email   = trim((string)($data['email']   ?? ''));
$phone   = trim((string)($data['phone']   ?? ''));
$message = trim((string)($data['message'] ?? ''));
$page    = trim((string)($data['page']    ?? ''));
$service = trim((string)($data['service'] ?? ''));
$locale  = trim((string)($data['locale']  ?? 'fr'));

if ($name === '' || $email === '') {
    http_response_code(400);
    echo json_encode(['ok' => false, 'error' => 'Nom et email requis']);
    exit;
}
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['ok' => false, 'error' => 'Email invalide']);
    exit;
}

// --- Build HTML email
$esc = fn($s) => htmlspecialchars((string)$s, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
$ip = $_SERVER['HTTP_CF_CONNECTING_IP'] ?? $_SERVER['HTTP_X_FORWARDED_FOR'] ?? $_SERVER['REMOTE_ADDR'] ?? 'unknown';
$ua = $_SERVER['HTTP_USER_AGENT'] ?? 'unknown';
$now = date('Y-m-d H:i:s');

$subject = "🎯 Nouveau lead — " . ($service !== '' ? $service : 'WP Solution');

$body = '<!DOCTYPE html><html><head><meta charset="utf-8"><title>Nouveau lead</title></head>'
      . '<body style="font-family:-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif;background:#f8fafc;padding:24px;color:#0f172a;">'
      . '<div style="max-width:600px;margin:0 auto;background:#fff;border-radius:14px;overflow:hidden;box-shadow:0 4px 6px rgba(0,0,0,0.05);">'
      . '<div style="background:linear-gradient(135deg,#026abf,#0ea5e9);padding:24px;color:#fff;">'
      . '<h1 style="margin:0;font-size:22px;">🎯 Nouveau lead — wpsolution.io</h1>'
      . '<p style="margin:4px 0 0;opacity:0.9;font-size:13px;">'.$esc($now).'</p></div>'
      . '<div style="padding:24px;">'
      . '<table style="width:100%;border-collapse:collapse;font-size:14px;">'
      . '<tr><td style="padding:10px;background:#f8fafc;font-weight:600;width:130px;">Nom</td>'
      . '<td style="padding:10px;">'.$esc($name).'</td></tr>'
      . '<tr><td style="padding:10px;background:#f8fafc;font-weight:600;">Email</td>'
      . '<td style="padding:10px;"><a href="mailto:'.$esc($email).'" style="color:#026abf;">'.$esc($email).'</a></td></tr>';

if ($phone !== '') {
    $body .= '<tr><td style="padding:10px;background:#f8fafc;font-weight:600;">Téléphone</td>'
           . '<td style="padding:10px;"><a href="tel:'.$esc($phone).'" style="color:#026abf;">'.$esc($phone).'</a></td></tr>';
}
if ($service !== '') {
    $body .= '<tr><td style="padding:10px;background:#f8fafc;font-weight:600;">Service</td>'
           . '<td style="padding:10px;">'.$esc($service).'</td></tr>';
}
if ($page !== '') {
    $body .= '<tr><td style="padding:10px;background:#f8fafc;font-weight:600;">Page</td>'
           . '<td style="padding:10px;"><a href="https://wpsolution.io'.$esc($page).'" style="color:#026abf;">'.$esc($page).'</a></td></tr>';
}
$body .= '<tr><td style="padding:10px;background:#f8fafc;font-weight:600;">Langue</td>'
       . '<td style="padding:10px;">'.$esc($locale).'</td></tr></table>';

if ($message !== '') {
    $body .= '<div style="margin-top:20px;padding:16px;background:#f1f5f9;border-radius:10px;border-left:3px solid #026abf;">'
           . '<strong style="font-size:12px;text-transform:uppercase;letter-spacing:1px;color:#64748b;">Message</strong>'
           . '<p style="margin:8px 0 0;white-space:pre-wrap;line-height:1.6;">'.$esc($message).'</p></div>';
}

$body .= '<div style="margin-top:24px;padding-top:16px;border-top:1px solid #e2e8f0;font-size:11px;color:#94a3b8;">'
       . 'IP : '.$esc($ip).'<br/>'
       . 'UA : '.$esc(substr($ua, 0, 100)).'<br/>'
       . 'Pour répondre directement, cliquez "Répondre" : l\'email du prospect est en Reply-To.</div>'
       . '</div></div></body></html>';

$text = "Nouveau lead — wpsolution.io ($now)\n\n"
      . "Nom : $name\nEmail : $email\n"
      . ($phone   !== '' ? "Téléphone : $phone\n" : '')
      . ($service !== '' ? "Service : $service\n" : '')
      . ($page    !== '' ? "Page : https://wpsolution.io$page\n" : '')
      . "Langue : $locale\n"
      . ($message !== '' ? "\nMessage :\n$message\n" : '')
      . "\n---\nIP : $ip\nUA : $ua";

// --- Send via Resend
$payload = [
    'from'     => FROM,
    'to'       => RECIPIENTS,
    'reply_to' => $email,
    'subject'  => $subject,
    'html'     => $body,
    'text'     => $text,
];

$ch = curl_init('https://api.resend.com/emails');
curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_POST           => true,
    CURLOPT_POSTFIELDS     => json_encode($payload),
    CURLOPT_HTTPHEADER     => [
        'Authorization: Bearer ' . RESEND_API_KEY,
        'Content-Type: application/json',
    ],
    CURLOPT_TIMEOUT        => 15,
]);
$resp = curl_exec($ch);
$code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
$err  = curl_error($ch);
curl_close($ch);

// --- Log to disk (ledger jsonl, safe to re-run)
$logDir = '/var/log/wpsolution-io-leads';
if (!is_dir($logDir)) {
    @mkdir($logDir, 0775, true);
}
$logLine = json_encode([
    'ts'       => $now,
    'http'     => $code,
    'name'     => $name,
    'email'    => $email,
    'phone'    => $phone,
    'service'  => $service,
    'page'     => $page,
    'locale'   => $locale,
    'ip'       => $ip,
    'resp'     => $resp,
]) . "\n";
@file_put_contents($logDir . '/leads-' . date('Y-m') . '.jsonl', $logLine, FILE_APPEND | LOCK_EX);

if ($code >= 200 && $code < 300) {
    $parsed = json_decode($resp, true);
    echo json_encode(['ok' => true, 'id' => $parsed['id'] ?? null]);
} else {
    http_response_code(502);
    echo json_encode(['ok' => false, 'error' => 'Mail server error', 'http' => $code]);
}
