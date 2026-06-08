#!/bin/bash
# ─────────────────────────────────────────────────────────────────
# Ifrit Web — VPS Initial Setup Script
# Run once on a fresh Ubuntu 22.04 server as root
# Usage: bash setup-server.sh
# ─────────────────────────────────────────────────────────────────
set -e

DOMAIN="ifrit.co"
APP_DIR="/var/www/ifrit-web"
NODE_VERSION="20"

echo "── [1/8] System update ──"
apt-get update -y && apt-get upgrade -y
apt-get install -y git curl nginx certbot python3-certbot-nginx ufw

echo "── [2/8] Node.js $NODE_VERSION ──"
curl -fsSL https://deb.nodesource.com/setup_${NODE_VERSION}.x | bash -
apt-get install -y nodejs

echo "── [3/8] PM2 ──"
npm install -g pm2
pm2 startup systemd -u root --hp /root

echo "── [4/8] App directory ──"
mkdir -p $APP_DIR
mkdir -p /var/log/pm2

echo "── [5/8] Firewall ──"
ufw allow OpenSSH
ufw allow 'Nginx Full'
ufw --force enable

echo "── [6/8] Clone repo ──"
# Replace with your actual repo URL
# git clone https://github.com/YOUR_ORG/ifrit-web.git $APP_DIR
echo "⚠  Skipped — add your GitHub repo URL and run manually:"
echo "   git clone https://github.com/YOUR_ORG/ifrit-web.git $APP_DIR"

echo "── [7/8] SSL certificate ──"
echo "⚠  Run after DNS is pointed to this server:"
echo "   certbot --nginx -d $DOMAIN -d www.$DOMAIN"

echo "── [8/8] Nginx config ──"
echo "⚠  Copy deploy/nginx.conf to /etc/nginx/sites-available/ifrit-web"
echo "   ln -s /etc/nginx/sites-available/ifrit-web /etc/nginx/sites-enabled/"
echo "   nginx -t && systemctl reload nginx"

echo ""
echo "✓ Base setup complete."
echo "Next steps:"
echo "  1. Point DNS A record to this server IP"
echo "  2. Clone your repo to $APP_DIR"
echo "  3. Create .env.local with production values"
echo "  4. npm install && npm run build"
echo "  5. pm2 start ecosystem.config.js && pm2 save"
echo "  6. Run certbot for SSL"
echo "  7. Copy and enable nginx.conf"
