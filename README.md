# Ifrit Website

**IFRIT | عفريت** — Trading, Logistics & Sourcing from Yiwu, China

## Stack
- Next.js 16 (App Router)
- Tailwind CSS
- next-intl (EN + AR bilingual with RTL)
- Resend (email)

## Getting Started

```bash
npm install
cp .env.local.example .env.local
# Fill in your values in .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — redirects to `/en`.

## Environment Variables

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Your domain e.g. `https://ifrit.co` |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Full number with country code e.g. `8613800001234` |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Displayed contact email |
| `RESEND_API_KEY` | From [resend.com](https://resend.com) — leave blank for dev (logs to console) |
| `CONTACT_EMAIL` | Where form submissions go |

## Structure

```
app/
  [locale]/           # EN + AR routes
    page.tsx          # Home
    services/
      page.tsx        # All services
      [slug]/page.tsx # Individual service (10 × 2 locales)
    about/page.tsx
    contact/page.tsx
  api/contact/        # Form submission API
components/
  Header.tsx          # Fixed nav with language toggle
  Footer.tsx
  WhatsAppButton.tsx  # Floating WhatsApp CTA
  ContactForm.tsx     # Client-side form with service preselection
data/
  services.ts         # All 10 services with EN + AR content
messages/
  en.json             # English strings
  ar.json             # Arabic strings
lib/
  config.ts           # Site config, WhatsApp URL helper
i18n/
  routing.ts          # next-intl locale routing
  request.ts          # next-intl server config
```

## Deployment (VPS)

```bash
# On server (Ubuntu 22.04)
git pull
npm install
npm run build
pm2 restart ifrit-web
```

See the 7-week build plan for full deployment instructions.

## Customise

- **WhatsApp number**: update `NEXT_PUBLIC_WHATSAPP_NUMBER` in `.env.local`
- **Services content**: edit `data/services.ts`
- **Translations**: edit `messages/en.json` and `messages/ar.json`
- **Brand colors**: `#A90000` crimson, `#181717` charcoal in `app/[locale]/globals.css`
