# Smart Canary Deployment and Automated Rollback System

## Purpose

This project is a **Smart Store** web application used as the demo app for a DevOps mini project. It demonstrates containerization, CI/CD concepts, canary deployment, health checks, and automated rollback for containerized applications.

The React app is intentionally simple: no backend, database, or authentication.

## Technologies Used

- React.js
- Vite
- JavaScript
- Plain CSS
- Docker (multi-stage build)
- nginx (production static hosting)

## Run Locally

```bash
cd smart-canary
npm install
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:5173`).

## Build for Production

```bash
npm run build
```

Output is written to the `dist` folder.

Preview the production build locally:

```bash
npm run preview
```

## Run with Docker

Build the image:

```bash
docker build -t smart-canary .
```

Run the container:

```bash
docker run -p 8080:80 smart-canary
```

Open `http://localhost:8080` in your browser.

Health check route: `http://localhost:8080/health`

## Change Application Version (V1 → V2)

For canary demos, update these files:

1. **`src/config.js`** — set `APP_VERSION` (e.g. `"2.0.0"`) and optionally `DEPLOYMENT_STATUS`.
2. **`src/pages/Home.jsx`** — change the welcome message or heading if you want a visible UI difference.
3. **`src/data/products.js`** — add a new product entry for version 2.

Rebuild and redeploy the Docker image after changes.

## Pages

| Route       | Description                          |
|------------|--------------------------------------|
| `/`        | Home — version and deployment status |
| `/products`| Product list with Add to Cart        |
| `/cart`    | Cart summary and total               |
| `/about`   | Project description                  |
| `/health`  | Simple health indicator              |

## Note

The full CI/CD pipeline (GitHub Actions, canary deployment, rollback) is not included in this repository yet—only the React app and Docker configuration.
