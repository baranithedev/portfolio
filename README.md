# 🌐 Barani.Dev Portfolio

**A modern, responsive, full-stack personal portfolio built with React, Vite, and Node.js.**

Showcase projects, technical skills, pricing plans, resources, and contact information through a responsive website featuring light and dark themes. The project also includes a separate backend for contact submissions, newsletter subscriptions, and email verification workflows.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5-7952B3?logo=bootstrap&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-Backend-339933?logo=nodedotjs&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green)

---

## 📖 Description

**Barani.Dev Portfolio** is a full-stack personal portfolio project designed to present professional information, development projects, technical skills, and services through a clean, responsive interface.

The frontend is built with **React, Vite, React Router, Bootstrap, and CSS**, providing reusable components, client-side navigation, theme management, and dynamically loaded portfolio data.

The backend organizes contact and subscriber workflows into dedicated routes, controllers, middleware, database configuration, token utilities, and reusable HTML email templates.

### ✨ Features

- 📱 **Responsive Design** — Optimized for desktop, tablet, and mobile devices.
- 🌙 **Theme Management** — Light and dark theme support.
- 🧭 **Client-Side Routing** — Navigation powered by React Router.
- 🏠 **Home & About** — Present personal information and professional background.
- 💼 **Projects Showcase** — Display development projects and their details.
- 🛠️ **Skills Section** — Organize technical skills and technologies.
- 💰 **Pricing Plans** — Display available services and pricing information.
- 📚 **Resources** — Provide useful learning materials and references.
- 📩 **Contact System** — Organize contact form submissions through the backend.
- ✉️ **Newsletter Subscriptions** — Support subscriber-related workflows.
- 🔐 **Email Verification** — Dedicated verification screen and token-handling modules.
- 🧩 **Reusable Components** — Shared layouts, components, and React contexts.
- 📂 **JSON-Based Data** — Store portfolio content in a JSON file.
- ⚖️ **Legal Information** — Dedicated legal information screen.
- 🚫 **Custom 404 Page** — Handle unknown application routes.

> **Note:** The listed features are based on the supplied project structure. Their exact functionality depends on the implementation in the source code.

---

## 🛠️ Tech Stack

| Category | Technologies |
|---|---|
| Frontend | React, JavaScript, HTML5, CSS3 |
| Build Tool | Vite |
| Routing | React Router |
| UI Framework | Bootstrap |
| Backend | Node.js |
| Data Storage | JSON and the configured database |
| Email | SMTP or the configured mail service |
| Authentication Utilities | Token creation and validation modules |
| Frontend Hosting | Vercel |
| Backend Hosting | Compatible Node.js hosting provider |
| Version Control | Git and GitHub |

---

## 📁 Project Structure

The project is organized into separate frontend and backend applications.

```text
portfolio/
├── client/
│   ├── public/
│   │   ├── data/
│   │   │   └── __portfolio.json
│   │   ├── images/
│   │   │   └── profile.png
│   │   ├── favicon.svg
│   │   └── icons.svg
│   │
│   ├── src/
│   │   ├── api/
│   │   │   └── api.config.js
│   │   ├── components/
│   │   │   ├── Footer.jsx
│   │   │   ├── Header.jsx
│   │   │   └── ThemeManager.jsx
│   │   ├── contexts/
│   │   │   ├── DataContext.jsx
│   │   │   └── ThemeContext.jsx
│   │   ├── layouts/
│   │   │   └── BaseLayout.jsx
│   │   ├── screens/
│   │   │   ├── AboutScreen.jsx
│   │   │   ├── ContactScreen.jsx
│   │   │   ├── HomeScreen.jsx
│   │   │   ├── LegalScreen.jsx
│   │   │   ├── NotFound.jsx
│   │   │   ├── PricingScreen.jsx
│   │   │   ├── ProjectsScreen.jsx
│   │   │   ├── Resources.jsx
│   │   │   ├── VerifierScreen.jsx
│   │   │   └── ViewPlanScreen.jsx
│   │   ├── utils/
│   │   │   ├── icon_base.js
│   │   │   ├── picker.js
│   │   │   └── title_updater.js
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   │
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
│
├── server/
│   ├── config/
│   │   ├── db.connect.js
│   │   └── mail.server.js
│   ├── controllers/
│   │   ├── contacts.controller.js
│   │   ├── subscribers.controller.js
│   │   └── verifier.controller.js
│   ├── cores/
│   │   └── template_manager.core.js
│   ├── middlewares/
│   │   ├── create_token.js
│   │   ├── return_error.log.js
│   │   └── validate_token.js
│   ├── models/
│   │   └── subscribers.model.js
│   ├── routes/
│   │   ├── contacts.route.js
│   │   ├── subscribers.route.js
│   │   └── verifier.route.js
│   ├── templates/
│   │   ├── conversation.html
│   │   ├── project_lead.html
│   │   └── subscriber.html
│   ├── app.js
│   ├── server.js
│   └── package.json
│
├── .gitignore
└── README.md
```

> **Note:** This structure is based on the supplied file list. Files such as `package.json`, `vite.config.js`, and `.gitignore` should be included only if they exist in your repository. Adjust the structure to match your actual project.

### 📂 Directory Overview

| Directory / File | Purpose |
|---|---|
| `client/` | React frontend application |
| `client/public/data/` | Publicly accessible portfolio JSON data |
| `client/public/images/` | Public images and visual assets |
| `client/src/api/` | API configuration |
| `client/src/components/` | Reusable UI components |
| `client/src/contexts/` | Shared application state and theme contexts |
| `client/src/layouts/` | Shared page layouts |
| `client/src/screens/` | Application screens and route-level components |
| `client/src/utils/` | Utility functions and icon helpers |
| `server/config/` | Database and mail configuration |
| `server/controllers/` | Request-handling logic |
| `server/cores/` | Shared backend functionality |
| `server/middlewares/` | Token validation and error-handling middleware |
| `server/models/` | Database models |
| `server/routes/` | Backend API route definitions |
| `server/templates/` | HTML email templates |
| `server/app.js` | Application and middleware configuration, if implemented |
| `server/server.js` | Backend server entry point, if implemented |

---

## ⚙️ Requirements

Install the following tools before running the project:

- **Node.js** — Use a supported LTS version.
- **npm** — Included with Node.js.
- **Git** — Required to clone the repository.
- **Database access** — Required if the backend uses a database.
- **Mail service credentials** — Required for email functionality.

Verify your installations:

```bash
node --version
npm --version
git --version
```

---

## 🚀 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/baranithedev/portfolio.git
cd portfolio
```

### 2. Install Frontend Dependencies

```bash
cd client
npm install
```

### 3. Install Backend Dependencies

Open a second terminal and navigate to the project root:

```bash
cd portfolio/server
npm install
```

Alternatively, from the project root, run:

```bash
cd server
npm install
```

> These commands assume that both `client/` and `server/` contain their own `package.json` files.

---

## 🔧 Environment Configuration

Configure environment variables according to the names and values expected by your source code.

### Frontend Environment

Create `client/.env.local`:

```env
VITE_API_BASE_URL=http://localhost:5000
```

This variable is an example. Ensure that `client/src/api/api.config.js` reads `VITE_API_BASE_URL` or update the example to match your implementation.

**Security:** Never store passwords, private API keys, JWT secrets, or other sensitive credentials in frontend environment variables beginning with `VITE_`. These variables can be exposed in the browser bundle.

### Backend Environment

Create `server/.env`:

```env
PORT=5000

# Database
DATABASE_URL=your_database_connection_string

# Mail Configuration
MAIL_HOST=your_smtp_host
MAIL_PORT=587
MAIL_USER=your_mail_username
MAIL_PASS=your_mail_password
MAIL_FROM=your_verified_sender_address

# Token Security
JWT_SECRET=your_long_random_secret

# Frontend URL
CLIENT_URL=http://localhost:5173
```

These are example variable names, not confirmed requirements. Keep only the variables your backend actually uses.

For local development, `CLIENT_URL` should point to the frontend's actual development URL.

For production, configure the appropriate production frontend URL in your backend hosting environment.

### Environment File Security

Add environment files to `.gitignore`:

```gitignore
node_modules/
dist/
.env
.env.*
!.env.example
```

Commit an `.env.example` file containing placeholder values if you want to document the required configuration.

Never commit real credentials to GitHub.

---

## ▶️ Running the Project

Run the frontend and backend in separate terminals.

### Start the Frontend

```bash
cd client
npm run dev
```

Vite typically starts the development server at:

```text
http://localhost:5173
```

Use the URL printed in your terminal if a different port is selected.

### Start the Backend

In another terminal:

```bash
cd server
npm run dev
```

This command assumes that `server/package.json` defines a `dev` script.

If it does not, use the scripts available in that file. For example, if a `start` script exists:

```bash
npm start
```

The backend typically listens on port `5000` when configured with `PORT=5000`, unless the application specifies another port.

---

## 🏗️ Production Build

### Build the Frontend

```bash
cd client
npm run build
```

Vite normally generates the production build in:

```text
client/dist/
```

### Preview the Production Build

```bash
npm run preview
```

This starts a local server for previewing the production build.

> The Vite preview server is intended for local testing, not as a replacement for production hosting.

---

## 🌍 Deployment

### Frontend — Vercel

Deploy the `client/` directory to [Vercel](https://vercel.com/).

Configure the project with the following settings when deploying `client/` as the project root:

| Setting | Value |
|---|---|
| Root Directory | `client` |
| Build Command | `npm run build` |
| Output Directory | `dist` |
| Install Command | `npm install` |

Set the production frontend environment variable to your deployed backend API URL:

```env
VITE_API_BASE_URL=https://your-backend-domain.com
```

Replace the example with your actual backend URL.

If the frontend uses React Router with browser-history routes, configure the hosting platform to serve the application entry point for valid client-side routes. Review your existing Vercel configuration before adding rewrite rules.

### Backend — Node.js Hosting

Deploy the `server/` directory to a hosting provider that supports Node.js applications.

Configure the following:

1. Install backend dependencies.
2. Set the required environment variables.
3. Configure the production database connection.
4. Configure SMTP or your chosen email service.
5. Set a strong, private token-signing secret.
6. Allow requests from the intended frontend origin through backend CORS configuration.
7. Confirm that the hosting platform uses the correct server entry point and start command.

### Production Checklist

- [ ] Frontend build completes successfully.
- [ ] Backend starts successfully.
- [ ] Production API URL is configured.
- [ ] Database connection works.
- [ ] Email delivery works.
- [ ] Email verification links use the correct frontend URL.
- [ ] CORS allows the production frontend origin.
- [ ] React Router routes work after refreshing the page.
- [ ] HTTPS is enabled.
- [ ] Secrets are configured through the hosting provider's environment settings.

---

## 🔒 Security Considerations

Follow these practices when developing and deploying the application:

- Never commit `.env` files, passwords, or private credentials.
- Treat files in `client/public/` as publicly accessible.
- Never store private subscriber information or secrets in public JSON files.
- Validate and sanitize user input on the backend.
- Validate verification tokens and enforce appropriate expiration rules.
- Avoid logging authentication tokens, passwords, or sensitive personal information.
- Configure CORS to allow only the intended origins.
- Apply rate limiting to public endpoints where appropriate.
- Escape untrusted content before inserting it into HTML email templates.
- Use HTTPS for production traffic.
- Use a strong, randomly generated secret for signing tokens.
- Store database credentials securely and apply appropriate database access controls.

---

## 📄 License

This project is described as being licensed under the **MIT License**.

To make this licensing explicit, include a `LICENSE` file in the repository containing the full MIT License text and the appropriate copyright notice.

---

## 👨‍💻 Author

**Barani Dharan — Barani.Dev**

- **GitHub:** [@baranithedev](https://github.com/baranithedev)
- **Email:** barani0607k@gmail.com
- **Portfolio:** Add your deployed portfolio URL.
- **LinkedIn:** Add your LinkedIn profile URL.

---

<div align="center">

**Made with ❤️ using React, Vite, and Node.js.**

⭐ If you find this project useful, consider giving the repository a star!

</div>
