# Contact form → Google Sheet

Contact form submissions are appended to the **Flint Business Requests** sheet
by a small Google Apps Script web app (`Code.gs`). The website itself holds no
Google credentials: it only knows the web app's public URL.

## One-time setup (about 5 minutes)

1. Open the sheet:
   https://docs.google.com/spreadsheets/d/1UDbrJIzZ5wVly84aRjQUqlQ9RBJqMy3_Sbq2xMdw_M8/edit
2. **Extensions → Apps Script**. Replace the contents of `Code.gs` with this
   folder's `Code.gs` and click **Save**.
3. In the function dropdown pick **setup**, click **Run**, and approve the
   permissions prompt. This writes the header row to the sheet.
4. **Deploy → New deployment** → gear icon → **Web app**:
   - Execute as: **Me**
   - Who has access: **Anyone**

   Click **Deploy** and copy the **Web app URL** (it ends in `/exec`).
5. Paste it into the project's `.env` file:

   ```
   VITE_CONTACT_ENDPOINT=https://script.google.com/macros/s/XXXX/exec
   ```

6. Restart `npm run dev` (Vite reads `.env` only at startup) and send a test
   request. A new row should appear in the sheet.

"Anyone" is required so website visitors can submit without a Google
account. Visitors can only add rows through the script; they cannot read the
sheet. The URL is public by nature because it ships in the website's
JavaScript, so committing it in `.env` is fine.

## Changing the script later

After editing `Code.gs`: **Deploy → Manage deployments → Edit (pencil) →
Version: New version → Deploy**. The URL stays the same.

## Email alerts

Set `NOTIFY_EMAIL` at the top of `Code.gs` (e.g. `'contact@flintdata.ai'`)
and redeploy to get an email for each new request, with Reply-To set to the
sender.
