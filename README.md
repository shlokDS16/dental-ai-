
## DentAI Scale

Landing page and ROI calculator for dental practices, built with **Vite**, **React**, **TypeScript**, **Tailwind CSS**, and subtle motion effects.

### Tech stack

- **Framework**: Vite + React 19 + TypeScript
- **Styling**: Tailwind CSS v4
- **Animation**: `motion` (Framer Motion for React 19)
- **Icons**: `lucide-react`

### Running locally

**Prerequisites:** Node.js (LTS recommended)

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Configure environment variables**

   Copy the example env file and set your values:

   ```bash
   cp .env.example .env
   ```

   Then edit `.env` and set:

   - `GEMINI_API_KEY` – your Gemini API key
   - `APP_URL` – the URL you will host this app at (optional for local dev)

3. **Run the dev server**

   ```bash
   npm run dev
   ```

   By default this starts Vite on port `3000` and binds to `0.0.0.0`.
