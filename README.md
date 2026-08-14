# 🌐 AKA Associates Website

Official website for **AKA Associates** — Builders & Architects, Mannargudi, Tamil Nadu.

🔗 **Live Website:** https://www.akaassociate.com

---

## 🚀 Tech Stack

- **Frontend:** React 19 + Vite
- **Language:** JavaScript (ES6+)
- **Styling:** Vanilla CSS (BEM naming convention)
- **Contact Form:** Web3Forms (frontend-safe email delivery)

---

## 📁 Project Structure

```
src/
├── animations/       # Canvas-based hero animation engine
│   └── hero/         # 3D architectural blueprint animation (10 modules)
├── assets/
│   └── img/          # Static images (logo, about section photos)
├── components/       # Reusable UI components
│   ├── projects/     # ProjectCard, ProjectGallery
│   └── services/     # ServiceCard
├── data/             # Static website content (services, projects, testimonials)
├── pages/            # Route-level pages (Home, ProjectsPage, PrivacyPolicy, TermsOfService)
├── sections/         # Homepage sections (Hero, Services, Projects, Process, About, Testimonials, CTA, Contact)
├── services/         # External API integrations (Web3Forms contact form)
├── utils/            # Shared helper functions (navigation)
├── App.jsx           # Root component — routing, theme state
├── main.jsx          # Entry point
└── index.css         # Global design system tokens (light/dark themes)
```

---

## ⚙️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/FlareMindsTech/AkaaassociateWebsite.git
cd AkaaassociateWebsite
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

```bash
cp .env.example .env
```

Edit `.env` and add your Web3Forms access key. Get a free key at [web3forms.com](https://web3forms.com).

### 4. Run development server

```bash
npm run dev
```

### 5. Open in browser

```
http://localhost:5173
```

### 6. Production build

```bash
npm run build
```

---

## ✨ Features

- Fully responsive design across devices
- Light & dark theme with toggle and localStorage persistence
- 3D architectural blueprint hero animation (custom canvas engine)
- Infinite CSS marquee for services showcase
- Project photo gallery with lightbox, keyboard navigation, and touch swipe
- Contact form with client-side validation and Web3Forms email delivery
- Static map with Google Maps external link
- Privacy Policy and Terms of Service pages

---

## 🏢 Organization

Developed under: **FlareMinds**

---

## 👨‍💻 Author

**Srilakshman K**
Software Developer @ FlareMinds

- GitHub: https://github.com/SrilakshmanK
- Portfolio: https://srilakshmank.github.io/portfolio/
- LinkedIn: https://www.linkedin.com/in/Srilakshman-K-WebDeveloper

---

## 📌 Acknowledgment

This project was initially built during the **FlareMinds Internship Program** and later enhanced as part of ongoing professional work.
