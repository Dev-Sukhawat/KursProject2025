<img width="1536" height="1024" alt="cbb90206-9346-4b1b-8dd4-eca3976ed4fe" src="https://github.com/user-attachments/assets/dd15b870-b87e-488f-a8f3-ed6e77481f75" />

# 🛒MetalMorph — React Webshop Project 2025


![GitHub repo size](https://img.shields.io/github/repo-size/dev-sukhawat/kursproject2025?color=blueviolet)
![GitHub license](https://img.shields.io/badge/license-MIT-green)
![GitHub last commit](https://img.shields.io/github/last-commit/dev-sukhawat/kursproject2025)
![GitHub stars](https://img.shields.io/github/stars/dev-sukhawat/kursproject2025?style=social)

> ⚡ A modern React-based webshop inspired by [Displate](https://displate.com), built with Vite and API-powered product data.

---

## 🚀 Live Demo

🎯 **[Visit the live webshop →](https://dev-sukhawat.github.io/KursProject2025)**  
> [!IMPORTANT]
> If you wan't to go HomePage press the MetalMorph logo or Use the Menu on Top left of the website.\
> \
> Some info to add. The live demo is not reflecting the new project file changes because the changes need to be deployed to the demo environment.

> [!NOTE]
> If you wan't to have the best experience of the website I would recommend to just Clone the repository.

---

## 📚 Table of Contents

1. [🧩 Overview](#-overview)  
2. [📦 Features](#-features)  
3. [🧠 Project Description](#-project-description)  
4. [⚙️ Technical Requirements](#️-technical-requirements)  
5. [📁 Directory Structure](#-directory-structure)
6. [🎨 Visual Preview](#-visual-preview)
7. [🧰 Installation & Setup](#-installation--setup)  
8. [💡 Future Improvements](#-future-improvements)  
9. [👨‍💻 Author](#-author)  
10. [📜 License](#-license)

---

## 🧩 Overview

**MetalMorph** is a fully functional webshop built with **React + Vite**, featuring real-time product data, cart management, and responsive design.  
The project draws inspiration from **Displate**, offering a smooth user shopping experience with modern UI/UX elements.

---

## 📦 Features

### 🛍️ Product Catalog
- Fetches live product data from the [DummyJSON API](https://dummyjson.com/docs/products).  
- Displays product name, price, and image in a clean grid layout.  
- Allows users to click a product to open a detailed product page.

### 📄 Product Details Page
- Shows product title, price, description, and images.  
- Quantity selector to adjust product count.  
- Add-to-cart functionality powered by React Hooks and Context.

### 🛒 Shopping Cart & Checkout
- Displays selected items with real-time total price.  
- Supports product quantity adjustments and item removal.  
- Simulated checkout flow with user info and confirmation view.

### ⚙️ Additional Features
- Modular component architecture (React functional components + Hooks).  
- Dynamic routing with **React Router**.  
- Local storage integration for cart and liked products.  
- Reusable UI elements (Buttons, Inputs, Payment Methods).  
- Custom hooks for fetching, cart state, and user interaction.  

---

## 🧠 Project Description

### 🧩 Description: Build a Webshop with React

**Introduction**  
In this project, the goal was to apply and expand React skills by developing a functioning webshop platform.  
It enables working with real API data, managing component state, and implementing cart logic within a modern web application.

**Project Objectives**
- Create a functional webshop where users can:
  - View product lists fetched from the DummyJSON API.  
  - Navigate to a detailed product page to add items to the cart and adjust quantity.  
  - Review their cart and complete an order overview with personal details.

**Learning Outcomes**
By completing this project, the developer demonstrates the ability to:
- Build a React application from scratch.  
- Handle external API requests and integrate responses into components.  
- Implement basic e-commerce functionality and state management.

---

## ⚙️ Technical Requirements

- Built using **React** with **Vite** as the build tool.  
- Uses **functional components** and **React Hooks** for state and side effects.  
- Styling with **CSS / SASS** or other CSS-in-JS solutions.  
- API requests handled via **fetch** or **axios**.  
- Navigation implemented with **React Router**.  
- Data source: **[DummyJSON API](https://dummyjson.com/products)**.

---

## 📁 Directory Structure
```
  projeckt2025/
├── README.md
├── index.html
├── package.json
├── vite.config.js
├── src/
│ ├── App.jsx / App.css
│ ├── main.jsx / index.css
│ ├── assets/
│ │ ├── img/
│ │ └── video/
│ ├── components/
│ │ ├── nav/
│ │ ├── homepage/
│ │ ├── cartpage/
│ │ ├── footer/
│ │ └── utils/
│ ├── data/
│ │ ├── data.json
│ │ ├── deliveryService.json
│ │ └── pick.json
│ └── pages/
│ ├── home.jsx
│ ├── about.jsx
│ ├── cart.jsx
│ ├── category.jsx
│ ├── likes.jsx
│ ├── login.jsx
│ ├── signup.jsx
│ ├── support.jsx
│ └── topics.jsx
└── server/
└── db.json
```
---
## 🎨 Visual Preview
### 🏠 HomePage
<img width="1862" height="966" alt="image" src="https://github.com/user-attachments/assets/37c3154b-f62b-4d19-bdb6-9cc84537378c" />
<img width="1861" height="965" alt="image" src="https://github.com/user-attachments/assets/b23a429c-1ef1-45a8-9a2e-6766c7fe43f2" />
<img width="1861" height="960" alt="image" src="https://github.com/user-attachments/assets/804dbcc8-ec6f-4376-91e0-d322e723a9fe" />
<img width="1861" height="946" alt="image" src="https://github.com/user-attachments/assets/301f22ad-d4e3-4e91-ac29-4f5a6e2556aa" />
<img width="1863" height="966" alt="image" src="https://github.com/user-attachments/assets/af23f1de-562c-4f35-9026-656502e87ad5" />

### 📝Category
<img width="1858" height="970" alt="image" src="https://github.com/user-attachments/assets/4d874685-8c78-4b1c-a31a-d64c7e7c8cf6" />

---
### Only Available in Repository if you Clone the Project
#### 😍 Likes
<img width="1849" height="944" alt="image" src="https://github.com/user-attachments/assets/dd575f0f-e1c0-40cd-8479-b065eb0e0c69" />

#### 🛒 Cart
<img width="1859" height="634" alt="image" src="https://github.com/user-attachments/assets/6b3118aa-91f6-4176-8651-d4fc7b5c375e" />
<img width="1855" height="969" alt="image" src="https://github.com/user-attachments/assets/ae42affd-b0dc-49b4-9ce0-dcb17cbe4449" />
<img width="1856" height="554" alt="image" src="https://github.com/user-attachments/assets/551df5df-e6b9-4f9e-b31b-a8d31ef6c966" />

### 💳 Checkout
<img width="1855" height="965" alt="image" src="https://github.com/user-attachments/assets/a2a0beda-9c03-4066-bcf1-3b6d5cc42f39" />
<img width="1852" height="718" alt="image" src="https://github.com/user-attachments/assets/0c31a67d-6d57-45f2-9cd7-89a1a6a66a1c" />
<img width="1852" height="547" alt="image" src="https://github.com/user-attachments/assets/bb119d92-1589-49ac-bc12-de3e2fdea64a" />









---
## 🧰 Installation & Setup

### 1️⃣ Clone the repository
```
git clone https://github.com/dev-sukhawat/kursproject2025.git
cd kursproject2025/projeckt2025
```

### 2️⃣ Install dependencies
```
npm install
```

### 3️⃣ Run the development server
```
npm run dev
```
Then open your browser at localhost.

---
## 💡 Future Improvements
* Improve accessibility and performance optimization.
* Add user authentication (login/signup with Firebase or Supabase).
* Include real checkout flow with backend API.
* Implement a backend for the website.

---
## 👨‍💻 Author
### Sukhawat Charoenchit
👨‍💻 Full Stack Dev Student 🏫 Företagsuniversitetet • 📍 Sthlm\
✨ Developer & Designer of Hypernova Code (2024) Exploring web architecture, design systems, and the limitless world of science fiction.

---
## 📜 License
This project is licensed under the [MIT License](https://opensource.org/license/MIT).\
You may freely use, modify, and distribute it for personal or educational purposes.


---
## 💫 Thank You
Thanks for exploring MetalMorph — a creative React webshop inspired by art and technology.\
Keep coding, keep creating! 🚀

