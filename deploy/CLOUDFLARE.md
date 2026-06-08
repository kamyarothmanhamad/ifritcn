# Ifrit Web — Cloudflare Pages Deployment

Free hosting, no commercial-use restrictions, unlimited bandwidth, global CDN.

---

## One-time setup (20 minutes)

### 1. Push your code to GitHub

```bash
# In the ifrit-web folder
git init
git add .
git commit -m "Initial commit"

# Create a new repo on github.com, then:
git remote add origin https://github.com/YOUR_USERNAME/ifrit-web.git
git branch -M main
git push -u origin main
```

### 2. Create a Cloudflare account

Go to https://dash.cloudflare.com/sign-up — free, no credit card.

### 3. Connect your GitHub repo to Cloudflare Pages

1. In the Cloudflare dashboard: **Workers & Pages → Create → Pages → Connect to Git**
2. Authorize GitHub and select your `ifrit-web` repo
3. Set the following build settings:

| Setting | Value |
|---|---|
| Framework preset | None (Custom) |
| Build command | `npx opennextjs-cloudflare build` |
| Build output directory | `.open-next/assets` |
| Node.js version | `20` |

4. Click **Save and Deploy**

---

### 4. Add environment variables

In Cloudflare Pages → your project → **Settings → Environment variables → Production**:

| Variable | Value |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | `https://ifritcn.com` |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Your number e.g. `8613800001234` |
| `NEXT_PUBLIC_CONTACT_EMAIL` | `hello@ifritcn.com` |
| `RESEND_API_KEY` | From resend.com/api-keys |
| `CONTACT_EMAIL` | `hello@ifritcn.com` |
| `NODE_VERSION` | `20` |

---

### 5. Connect ifritcn.com

**Option A — Domain is already on Cloudflare DNS (easiest)**
1. Pages → your project → **Custom domains → Set up a custom domain**
2. Enter `ifritcn.com` → Continue
3. Cloudflare auto-creates the DNS record — done in ~1 minute

**Option B — Domain is with another registrar**
1. In your domain registrar (GoDaddy, Namecheap, etc.), update the nameservers to Cloudflare's:
   - `ns1.cloudflare.com`
   - `ns2.cloudflare.com`
2. Add your domain to Cloudflare (free): **dash.cloudflare.com → Add a Site → Free plan**
3. Then follow Option A above

**Strongly recommend moving DNS to Cloudflare** — you get free DDoS protection, SSL, caching, and analytics on top of hosting.

---

## Ongoing deployment

Every `git push` to `main` **automatically triggers a new deployment**. No manual steps.

```bash
# Make a change, then:
git add .
git commit -m "Update services content"
git push
# Cloudflare builds and deploys in ~2 minutes
```

---

## Contact form

The `/api/contact` route runs as a Cloudflare Worker via the OpenNext adapter. It needs `RESEND_API_KEY` set in environment variables. Test it after first deploy by submitting the form and checking your inbox.

---

## Free tier limits

| Resource | Free limit |
|---|---|
| Builds | 500/month |
| Bandwidth | Unlimited |
| Requests | Unlimited |
| Custom domains | Unlimited |
| SSL | Automatic, free |
| CDN | 300+ edge locations globally |

For a business brochure site, you will never come close to any limit on the free tier.

---

## Upgrading later

If you need more builds or advanced analytics: Cloudflare Pages Pro is $20/month — but for this site you likely never need it.
