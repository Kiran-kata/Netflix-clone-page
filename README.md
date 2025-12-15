# 🎬 Netflix Clone

A modern, responsive Netflix clone built with **React** and **Vite**, featuring a sleek UI with video backgrounds, interactive components, and Netflix-inspired design.

![Netflix Clone](https://img.shields.io/badge/React-18.3-61DAFB?style=flat&logo=react)
![Vite](https://img.shields.io/badge/Vite-6.0-646CFF?style=flat&logo=vite)
![License](https://img.shields.io/badge/License-MIT-green)

## 🌐 Live Demo

**[View Live Demo](https://kiran-kata.github.io/Netflix-clone-page/)**

## ✨ Features

- 🎥 **Video Background** - Stunning hero section with autoplay video
- 📱 **Fully Responsive** - Works seamlessly on desktop, tablet, and mobile
- ⚡ **Fast Performance** - Built with Vite for lightning-fast development
- 🎨 **Netflix Design** - Authentic Netflix color scheme and styling
- 🔄 **Interactive Components** - Accordion FAQ, feature sections, and more
- 🎯 **Modern React** - Uses React hooks and component-based architecture

## 🚀 Quick Start

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Kiran-kata/Netflix-clone-page.git
   cd Netflix-clone-page
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 📁 Project Structure

```
netflix-clone-page/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── Header.jsx   # Navigation bar with logo
│   │   ├── Hero.jsx     # Hero section with video background
│   │   ├── Feature.jsx  # Feature showcase sections
│   │   ├── FAQ.jsx      # Accordion FAQ component
│   │   └── Footer.jsx   # Footer with links
│   ├── App.jsx          # Main app component
│   ├── index.css        # Global styles
│   └── main.jsx         # Entry point
├── index.html           # HTML template
├── vite.config.js       # Vite configuration
└── package.json         # Dependencies
```

## 🎨 Components

### Header
- Netflix logo (SVG)
- Language selector
- Sign In button

### Hero
- Video background with autoplay
- Email signup form
- Call-to-action button

### Feature
- Reusable feature sections
- Support for images and videos
- Reversible layout

### FAQ
- Interactive accordion
- Common questions and answers
- Smooth expand/collapse animations

### Footer
- Site links organized in columns
- Language selector
- Copyright information

## 🛠️ Built With

- **React 18.3** - UI library
- **Vite 6.0** - Build tool
- **CSS3** - Styling with CSS variables
- **JavaScript ES6+** - Modern JavaScript

## 📦 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
```

## 🎯 Key Features Explained

### Responsive Design
The app uses modern CSS techniques including:
- Flexbox and Grid layouts
- CSS custom properties (variables)
- Media queries for breakpoints
- Min/max width constraints

### Component Architecture
- Modular component structure
- Props for reusability
- Inline styles with JavaScript objects
- React hooks (useState) for state management

### Performance
- Vite's fast HMR (Hot Module Replacement)
- Optimized video loading
- Efficient component rendering
- Production build optimization

## 🎨 Color Palette

```css
--bg: #000                          /* Background */
--text: #fff                        /* Text */
--muted: rgba(255,255,255,0.75)    /* Muted text */
--accent: #e50914                   /* Netflix red */
```

## 📸 Screenshots

### Desktop View
- Full hero section with video background
- Feature sections with images and videos
- Interactive FAQ accordion

### Mobile View
- Responsive navigation
- Stacked layout for features
- Touch-optimized interactions

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Kiran Kata**
- GitHub: [@Kiran-kata](https://github.com/Kiran-kata)

## 🙏 Acknowledgments

- Design inspired by Netflix
- Built as a learning project
- Assets from Netflix CDN

## 🚧 Future Enhancements

- [ ] Add authentication
- [ ] Implement movie catalog
- [ ] Add video player
- [ ] User profiles
- [ ] Watchlist functionality
- [ ] Search feature

---

⭐ Star this repo if you found it helpful!

