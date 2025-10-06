# 🐾 Pet Life Calculator

A beautiful, responsive React application that calculates your pet's age in "pet years" with a modern, mobile-first design and side-by-side layout.

![Pet Life Calculator](https://img.shields.io/badge/React-18.2.0-blue) ![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.3.2-38B2AC) ![License](https://img.shields.io/badge/License-MIT-green)

## ✨ Features

- **Animal Selection**: Choose between Cat or Dog
- **Dog Size Options**: Small, Medium, or Large dogs with different aging rates
- **Date Picker**: Select your pet's birth date or estimated birth date
- **Age Calculation**: Get results in Days, Months, and Years
- **Side-by-Side Layout**: Input form and results displayed side by side on desktop
- **Responsive Design**: Mobile-first approach with beautiful animations
- **Modern UI**: Glass morphism effects, gradients, and smooth transitions
- **No Database**: Pure frontend application, perfect for static hosting

## 🧮 Age Calculation Logic

The app uses different aging rates for different animals:

- **Human**: 31 days/month, 365 days/year
- **Cat**: 8 days/month, 91 days/year
- **Dog (Small)**: 8 days/month, 91 days/year
- **Dog (Medium)**: 6 days/month, 73 days/year
- **Dog (Large)**: 4 days/month, 46 days/year

## 🚀 Quick Start

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. **Clone or download the project files**
2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm start
   ```

4. **Open your browser** and navigate to `http://localhost:3000`

## 📁 Project Structure

```
pet-life-calculator/
├── public/
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── components/
│   │   └── CalculatorCard.jsx
│   ├── utils/
│   │   └── calculateAge.js
│   ├── App.jsx
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## 🎨 Customization

### Colors
The app uses custom pastel colors defined in `tailwind.config.js`:
- `pet-pink`: #F8BBD9
- `pet-blue`: #B8E6E6
- `pet-purple`: #D4B5F7
- `pet-green`: #B5F7C4

### Fonts
- Primary: Inter
- Secondary: Poppins

### Animations
- Custom bounce and pulse animations
- Fade-in effects for dynamic content
- Hover effects on interactive elements

## 🌐 Deployment

### GitHub Pages

1. **Update the homepage in package.json**:
   ```json
   "homepage": "https://yourusername.github.io/pet-life-calculator"
   ```

2. **Install gh-pages**:
   ```bash
   npm install --save-dev gh-pages
   ```

3. **Deploy**:
   ```bash
   npm run deploy
   ```

### Vercel

1. **Install Vercel CLI**:
   ```bash
   npm i -g vercel
   ```

2. **Deploy**:
   ```bash
   vercel
   ```

### Netlify

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Drag and drop the `build` folder** to Netlify's deploy area

## 🛠️ Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run deploy` - Deploys to GitHub Pages (requires gh-pages)

## 🎯 Usage

1. **Select Animal Type**: Choose between Cat or Dog
2. **Select Dog Size** (if applicable): Small, Medium, or Large
3. **Enter Birth Date**: Use the date picker to select your pet's birth date
4. **Calculate**: Click the "Calculate Pet Age" button
5. **View Results**: See your pet's age in days, months, and years displayed on the right side

## 🎨 Design Features

- **Glass Morphism**: Semi-transparent cards with backdrop blur
- **Gradient Backgrounds**: Beautiful pastel gradients
- **Side-by-Side Layout**: Input form and results displayed side by side on desktop
- **Responsive Layout**: Works perfectly on all device sizes
- **Smooth Animations**: Subtle animations and transitions
- **Modern Typography**: Clean, readable fonts
- **Interactive Elements**: Hover effects and visual feedback

## 📱 Mobile Responsiveness

The app is designed with a mobile-first approach:
- Touch-friendly buttons and inputs
- Optimized spacing for small screens
- Responsive grid layouts that stack on mobile
- Readable typography on all devices

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Icons by [Lucide React](https://lucide.dev/)
- Fonts by [Google Fonts](https://fonts.google.com/)
- Styling with [TailwindCSS](https://tailwindcss.com/)

---

**Made with ❤️ for pet lovers everywhere!** 🐾
