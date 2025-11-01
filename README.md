# AI Automation Portfolio Website

A stunning, modern portfolio website for an AI automation company built with Next.js, React, Tailwind CSS, and Framer Motion. Features smooth animations, eye-catching effects, and a professional design that captivates clients.

## 🚀 Features

### ✨ Animations & Effects
- **Smooth Loading Animation** - Eye-catching 3-second loading screen with rotating AI logo
- **Framer Motion Animations** - Professional transitions and micro-interactions
- **Floating Elements** - Animated background orbs and particles
- **Hover Effects** - Interactive cards with glow effects and transforms
- **Scroll Animations** - Elements animate into view as you scroll
- **Gradient Animations** - Dynamic color transitions and background effects

### 🎨 Design Elements
- **Glass Morphism** - Modern glassmorphism effects throughout
- **Gradient Text** - Beautiful gradient text treatments
- **Custom Animations** - Float, pulse, bounce, and scale animations
- **Responsive Design** - Fully responsive across all devices
- **Dark Theme** - Professional dark color scheme with accent colors

### 📱 Sections
1. **Hero Section** - Animated title, CTA buttons, floating stats
2. **Services** - 6 animated service cards with hover effects
3. **About** - Company story with animated statistics
4. **Portfolio** - Project showcase with interactive cards
5. **Testimonials** - Client reviews with rating animations
6. **Contact** - Interactive contact form and information
7. **Footer** - Comprehensive footer with newsletter signup

## 🛠️ Technologies Used

- **Next.js 14** - React framework for production
- **React 18** - Component-based UI library
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Production-ready motion library
- **Heroicons** - Beautiful hand-crafted SVG icons
- **Custom CSS Animations** - Additional smooth animations

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/ai-automation-portfolio.git
   cd ai-automation-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to see the website

## 🎯 Key Animation Features

### Loading Screen
- Rotating AI logo with scale and rotation animations
- Animated progress bar
- Floating particles
- Smooth fade-out transition

### Hero Section
- Staggered text animations
- Floating background orbs
- Animated grid pattern
- Pulsing CTA buttons
- Scroll indicator animation

### Service Cards
- Hover lift effects
- Icon rotation and scaling
- Gradient glow effects
- Staggered grid animations

### Portfolio Section
- Card hover transformations
- Overlay effects on hover
- Metric counter animations
- Category filtering animations

### Contact Form
- Input field focus animations
- Form validation feedback
- Submit button interactions
- Success/error state animations

## 🎨 Color Scheme

```css
Primary Colors:
- Blue: #3b82f6 (primary-500)
- Cyan: #06b6d4 (cyan-500)
- Green: #10b981 (emerald-500)

Background:
- Black: #000000
- Dark Gray: #111827
- Medium Gray: #374151

Text:
- White: #ffffff
- Light Gray: #d1d5db
- Medium Gray: #9ca3af
```

## 📱 Responsive Breakpoints

- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

## 🔧 Customization

### Changing Colors
Update the `tailwind.config.js` file to modify the color scheme:

```javascript
colors: {
  primary: {
    // Your primary color shades
  },
  accent: {
    // Your accent color shades
  }
}
```

### Adding New Animations
Add custom animations in `tailwind.config.js`:

```javascript
animation: {
  'custom-animation': 'customKeyframes 2s ease-in-out infinite',
}
keyframes: {
  customKeyframes: {
    '0%, 100%': { transform: 'translateY(0px)' },
    '50%': { transform: 'translateY(-10px)' },
  }
}
```

### Modifying Content
- Update company information in each component
- Modify services in `Services.js`
- Change portfolio projects in `Portfolio.js`
- Update testimonials in `Testimonials.js`
- Customize contact information in `Contact.js`

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically with each push

### Netlify
1. Build the project: `npm run build`
2. Deploy the `out` folder to Netlify

### Other Platforms
Build the static files:
```bash
npm run build
npm run export
```

## 📈 Performance Features

- **Optimized Images** - Next.js Image component for performance
- **Lazy Loading** - Components load as they enter viewport
- **Minimal Bundle Size** - Tree-shaking and code splitting
- **Fast Animations** - GPU-accelerated transforms
- **Responsive Images** - Multiple breakpoint support

## 🎭 Animation Principles

The website follows modern animation principles:

1. **Purposeful** - Every animation serves a purpose
2. **Smooth** - 60fps animations with proper easing
3. **Subtle** - Not overwhelming or distracting
4. **Responsive** - Respects user's motion preferences
5. **Professional** - Business-appropriate timing and effects

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🌟 Credits

- Design inspired by modern AI and tech companies
- Icons by Heroicons
- Animations powered by Framer Motion
- Built with love using Next.js and Tailwind CSS

---

**Ready to impress your clients with this stunning AI automation portfolio website!** 🚀✨