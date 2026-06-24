A high-performance Next.js 14 application built to monitor containerized cluster telemetry and provide high-availability architecture documentation. This project demonstrates advanced rendering techniques including Server-Side Rendering (SSR), Static Site Generation (SSG) with Incremental Static Regeneration (ISR), and custom API Route Handlers.

## 🚀 Features

* **Real-Time Telemetry (SSR):** The live metrics dashboard fetches data server-side on every request, ensuring zero stale data for critical infrastructure monitoring.
* **Background Revalidation (ISR):** Architecture documentation is statically generated for maximum delivery speed and automatically rebuilt in the background every 60 seconds to capture updates without deployment.
* **Microservice API Endpoint:** Utilizes Next.js 14 Route Handlers to simulate a backend cluster database delivering randomized node health and CPU/Memory usage stats.
* **Client-Side Interactivity:** React Client Components allow for dynamic filtering of high-load nodes directly in the browser.
* **Modern App Router:** Strictly adheres to the Next.js `app/` directory conventions for optimal separation of Server and Client components.

## 🛠️ Technology Stack

* **Framework:** [Next.js 14](https://nextjs.org/) (App Router)
* **Library:** React 18
* **Styling:** Vanilla CSS (Global Styles, CSS Grid & Flexbox)
* **Deployment target:** Vercel / Node.js Environments

## 📂 Architecture Overview

```text
├── app/
│   ├── layout.js          # Global layout wrapper and metadata configuration
│   ├── page.js            # Landing page and navigation entry point
│   ├── dashboard/
│   │   └── page.js        # SSR Node Telemetry Monitor (force-dynamic)
│   ├── docs/
│   │   └── page.js        # SSG Architecture Docs (revalidate: 60)
│   └── api/
│       └── metrics/
│           └── route.js   # Internal JSON API endpoint for cluster data
├── components/
│   ├── MetricCard.js      # Client Component for interactive data filtering
│   └── Navbar.js          # Persistent navigation routing
└── styles/
    └── globals.css        # CSS variables and core layout styling
💻 Local Development Setup
To run this project locally on your machine:

Clone the repository:

Bash

Navigate to the directory:

Bash
cd infrastructure-dashboard
Install dependencies:
(Note: Ensure Node.js is installed)

Bash
npm install
Start the development server:

Bash
npm run dev
View the application:
Open http://localhost:3000 in your web browser.
