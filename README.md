# 🧱 Tiles Gallery

A modern, highly responsive Full-Stack Web Application designed to showcase stylish and contemporary tile collections. Built using **Next.js 16 (App Router)** optimized with **Turbopack**, and featuring a robust multi-provider authentication system.

---

## 🚀 Key Features

* **Dynamic Gallery Interface:** Clean, modern catalog layout showcasing tile designs.
* **Comprehensive Authentication:** Powered by **Better-Auth** supporting:
    * Traditional Email & Password registration/login with client-side form validation.
    * OAuth Social Login streams with **Google** and **GitHub**.
* **Protected Routing & Middleware:** Custom secure route handling engine (`proxy.js`) protecting private user dashboards (`/my-profile`).
* **State-of-the-Art UI Components:** Beautifully styled input fields, form validation feedback, and adaptive themes powered by **HeroUI** and **Tailwind CSS**.
* **Persistent Database Storage:** Integrated natively with **MongoDB** to handle safe user provisioning and sessions.

---

## 🛠️ Tech Stack

* **Frontend Framework:** Next.js 16 (App Router)
* **Build Optimization Tool:** Turbopack
* **Styling & UI Library:** Tailwind CSS & HeroUI
* **Authentication Engine:** Better-Auth (with MongoDB adapter)
* **Database:** MongoDB (via Native MongoClient Driver)
* **Notifications:** React-Toastify

---

## 📦 Getting Started & Local Installation

Follow these steps to spin up the project workspace locally on your computer:

### 1. Clone the Repository
```bash
git clone <your-repository-url>
cd tiles-gallery2
2. Install Project DependenciesBashnpm install
3. Setup Your Environment VariablesCreate a file named .env in the root of your project directory and configure the following variables:Code snippet# Database Credentials
MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/tiles-gallery-2

# Better Auth Configuration Keys
BETTER_AUTH_SECRET=your_super_secure_random_string_here
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Google OAuth Keys
GOOGLE_CLIENT_ID=your_google_client_id.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=your_google_client_secret

# GitHub OAuth Keys
GITHUB_CLIENT_ID=your_github_client_id
GITHUB_CLIENT_SECRET=your_github_client_secret
4. Run the Development ServerFire up the lightning-fast Next.js Turbopack compiler:Bashnpm run dev
Open your browser and navigate to http://localhost:3000 to explore the application!🔒 OAuth Callback ConfigurationsWhen setting up your social application spaces in developer consoles, make sure your redirect endpoints match these patterns:ProviderHomepage/Origin URLAuthorization Callback URLGooglehttp://localhost:3000http://localhost:3000/api/auth/callback/googleGitHubhttp://localhost:3000http://localhost:3000/api/auth/callback/githubNote: Update these entries to your production Vercel URL (https://tiles-gallery2.vercel.app) when deploying to live environments.👥 Authors & ContributionKanok Faisal - Lead Full-Stack Engineer & Core Developer
---

### 💡 Git Tip
Since your local workspace tracking currently shows modified structures, you can stage and commit this new file along with your progress cleanly right now by executing:

```bash
git add README.md
git commit -m "docs: add comprehensive project documentation README"