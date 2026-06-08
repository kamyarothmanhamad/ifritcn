# Ifrit Web — Deployment Guide

## Server Requirements
- Ubuntu 22.04 LTS
- 1 vCPU, 2GB RAM minimum (Hetzner CX21 recommended — ~€4/mo)
- Domain pointed to server IP

---

## 1. First-time server setup

```bash
# On your local machine
ssh root@YOUR_SERVER_IP
bash /path/to/deploy/setup-server.sh
```

---

## 2. Clone and configure

```bash
cd /var/www
git clone https://github.com/YOUR_ORG/ifrit-web.git
cd ifrit-web

# Create production env file
cp .env.local.example .env.local
nano .env.local
# Fill in all values (see table below)
```

### Environment variables

| Variable | Example value |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | `https://ifrit.co` |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | `8613800001234` (no +, no spaces) |
| `NEXT_PUBLIC_CONTACT_EMAIL` | `hello@ifrit.co` |
| `RESEND_API_KEY` | From [resend.com/api-keys](https://resend.com/api-keys) |
| `CONTACT_EMAIL` | `hello@ifrit.co` |

---

## 3. Build and start

```bash
npm install
npm run build
pm2 start ecosystem.config.js
pm2 save
```

---

## 4. Nginx and SSL

```bash
# Copy nginx config
cp deploy/nginx.conf /etc/nginx/sites-available/ifrit-web
ln -s /etc/nginx/sites-available/ifrit-web /etc/nginx/sites-enabled/
nginx -t

# SSL certificate (after DNS is live)
certbot --nginx -d ifrit.co -d www.ifrit.co

# Reload
systemctl reload nginx
```

---

## 5. GitHub Actions (auto-deploy on push)

Add these secrets in your GitHub repo under **Settings > Secrets > Actions**:

| Secret | Value |
|---|---|
| `VPS_HOST` | Your server IP |
| `VPS_USER` | `root` (or deploy user) |
| `VPS_SSH_KEY` | Private key (run `cat ~/.ssh/id_rsa`) |
| `VPS_PORT` | `22` |
| `NEXT_PUBLIC_SITE_URL` | `https://ifrit.co` |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Your WhatsApp number |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Your email |

After this, every push to `main` automatically deploys.

---

## 6. Ongoing commands

```bash
pm2 status              # Check app status
pm2 logs ifrit-web      # Live logs
pm2 restart ifrit-web   # Manual restart
nginx -t                # Test nginx config
systemctl reload nginx  # Apply nginx changes
```

---

## 7. Post-launch checklist

- [ ] DNS A record points to VPS IP
- [ ] HTTPS working, HTTP redirects to HTTPS
- [ ] www redirects to non-www
- [ ] Contact form sends email (test with real submission)
- [ ] WhatsApp button opens correct number with pre-filled message
- [ ] Both /en and /ar routes load correctly
- [ ] All 10 service pages load
- [ ] sitemap.xml accessible at /sitemap.xml
- [ ] robots.txt accessible at /robots.txt
- [ ] Google Search Console: add property, submit sitemap
- [ ] Bing Webmaster Tools: add site, submit sitemap
- [ ] Analytics tracking pageviews
