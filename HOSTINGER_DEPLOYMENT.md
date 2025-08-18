# Hostinger Deployment Guide

## Files Created for SPA Routing Support

This project includes several configuration files to handle client-side routing on different hosting platforms:

### 1. `.htaccess` (Apache servers - most common on Hostinger)

- Location: `public/.htaccess`
- Redirects all requests to `index.html` for client-side routing
- This is the most important file for Hostinger

### 2. `_redirects` (Netlify-style redirects)

- Location: `public/_redirects`
- Fallback option for some hosting providers

### 3. `404.html` (Custom 404 page)

- Location: `public/404.html`
- Fallback redirect page

## Deployment Steps for Hostinger

1. **Build the project:**

   ```bash
   npm run build
   ```

2. **Upload files:**

   - Upload ALL contents of the `dist` folder to your Hostinger public_html directory
   - Make sure the `.htaccess` file is included (it might be hidden)

3. **File structure on server should look like:**
   ```
   public_html/
   ├── index.html
   ├── .htaccess
   ├── assets/
   └── other built files...
   ```

## Alternative Solutions if .htaccess doesn't work

If Hostinger doesn't support `.htaccess` or it's not working:

### Option 1: Contact Hostinger Support

Ask them to enable URL rewriting or provide the correct configuration for SPAs.

### Option 2: Use Hash Router (Last Resort)

Change from BrowserRouter to HashRouter in your React app:

```jsx
// In App.tsx, change:
import { BrowserRouter as Router } from "react-router-dom";
// To:
import { HashRouter as Router } from "react-router-dom";
```

This will make URLs look like `yoursite.com/#/products` instead of `yoursite.com/products`, but it will work on any hosting provider.

## Testing

After deployment, test these scenarios:

1. Navigate to different pages using the navigation
2. Refresh the page on `/products`, `/about`, etc.
3. Directly type URLs like `yoursite.com/products` in the browser

All should work without showing 404 errors.

## Troubleshooting

If you still get 404 errors:

1. Check if `.htaccess` file is present on the server
2. Verify Hostinger supports Apache mod_rewrite
3. Try the HashRouter solution as a fallback
4. Contact Hostinger support for SPA hosting configuration
