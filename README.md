# 🍽️ Restaurant Page

A single-page restaurant website built using **vanilla JavaScript** and **Webpack**. All content is rendered dynamically through DOM manipulation without any hardcoded HTML (except for the base skeleton). This project is part of a practice assignment to learn modular JS, Webpack, and SPA architecture.

---

## 📦 Tech Stack

- **JavaScript (ES6 Modules)**
- **HTML5**
- **CSS3**
- **Webpack** (with `webpack-dev-server`, asset loaders, and `HtmlWebpackPlugin`)

---

## 🚀 Features Implemented

- 🔧 Webpack setup with live development server
- 🔗 Modular file structure (`home.js`, `menu.js`, `contact.js`)
- 🧠 Dynamic tab loading (SPA behavior)
- 🖼️ Full-page responsive background image
- ✨ Basic UI styling (to be improved)

---

## 📁 Folder Structure
```
restaurant-page/
├── dist/ # Webpack output (auto-generated)
├── src/
│ ├── assets/ # Static assets (images, etc.)
│ ├── modules/ # Tab modules: home, menu, contact
│ ├── index.js # Entry point
│ ├── style.css # Styling
│ └── template.html # HTML skeleton (used by HtmlWebpackPlugin)
├── .gitignore
├── package.json
├── webpack.config.js
└── README.md
```

---

## 🛠️ Getting Started

Clone the repo and run locally:

```bash
git clone https://github.com/your-username/restaurant-page.git
cd restaurant-page
npm install
npm start
```