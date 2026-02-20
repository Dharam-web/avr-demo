# Enquiry server (Express + Nodemailer)

Sends enquiry form data by email and optionally forwards to Google Sheets.

## Setup

1. Copy `.env.example` to `.env` in the project root.
2. Set in `.env`:
   - `EMAIL_USER` – sender (e.g. assets.avr@anandvardhanresorts.com)
   - `EMAIL_APP_PASSWORD` – Gmail app password for that account
   - `TO_EMAIL` – recipient (e.g. ashish.moguls@gmail.com)
   - `GOOGLE_SCRIPT_URL` – your Apps Script web app URL (to save to sheet)
   - `NEXT_PUBLIC_ENQUIRY_API_URL` – URL of this server (e.g. `http://localhost:3001` for dev)

## Run

```bash
# From project root
npm run server
```

Runs on port 3001 (or `PORT` in `.env`). Keep this running while testing the form.

## Flow

1. Form POSTs to `POST /api/send-enquiry` with `{ Name, Email, Phone, Querydate }`.
2. Server sends that data to `TO_EMAIL` via Nodemailer (Gmail).
3. Server forwards the same data to `GOOGLE_SCRIPT_URL` so the sheet is updated.
