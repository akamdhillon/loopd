# Loopd Community

**Bridging Generations Through Technology**

A modern, responsive community website built with Next.js and Tailwind CSS that connects seniors with youth volunteers for technology mentorship programs.

## 🌟 Project Overview

Loopd Community is a digital platform that facilitates intergenerational technology mentorship. Our mission is to help seniors gain digital confidence while providing youth with valuable leadership experience and community service opportunities.

## 🚀 Features

- **Responsive Design**: Fully responsive across desktop, tablet, and mobile devices
- **Accessibility First**: Large text, high contrast, and screen reader friendly
- **Modern UI/UX**: Clean, intuitive interface built with Tailwind CSS
- **Performance Optimized**: Built with Next.js for fast loading and SEO optimization
- **Component-Based Architecture**: Reusable React components for maintainability

## 📋 Pages Structure

- **Home** (`/`) - Landing page with hero section, mission, and navigation
- **About** (`/about`) - Our story, problem we solve, and values
- **Programs** (`/programs`) - Detailed curriculum and program information
- **For Seniors** (`/seniors`) - Benefits and information for senior participants
- **For Youth** (`/youth`) - Volunteer opportunities and requirements
- **For Facilities** (`/facilities`) - Partnership opportunities for senior facilities
- **Contact** (`/contact`) - Contact form and information

## 🛠️ Technology Stack

- **Framework**: Next.js 15 (Pages Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Deployment**: Vercel (Ready)
- **Package Manager**: npm

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/loopd.git
   cd loopd
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
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📦 Available Scripts

```bash
# Development server with Turbopack
npm run dev

# Production build
npm run build

# Start production server
npm start

# Run ESLint
npm run lint
```

## 🎨 Design System

### Colors
- **Primary**: Blue (#2563EB) - Trust and technology
- **Secondary**: Light Blue (#0EA5E9) - Communication and connection
- **Accent**: Yellow (#EAB308) - Energy and optimism

### Typography
- **Font**: Inter (Google Fonts)
- **Accessibility**: Larger base font sizes (18px minimum)

### Components
- **Responsive Cards**: Flexible information display
- **Accessible Forms**: High contrast, large touch targets
- **Semantic HTML**: Proper heading hierarchy and ARIA labels

## 📁 Project Structure

```
loopd/
├── pages/              # Next.js pages (Pages Router)
│   ├── index.tsx       # Home page
│   ├── about.tsx       # About page
│   ├── programs.tsx    # Programs overview
│   ├── seniors.tsx     # For Seniors
│   ├── youth.tsx       # For Youth
│   ├── facilities.tsx  # For Facilities
│   ├── contact.tsx     # Contact page
│   └── _app.tsx        # Global layout and styles
├── components/         # Reusable React components
│   ├── Navbar.tsx      # Navigation header
│   ├── Footer.tsx      # Site footer
│   ├── Hero.tsx        # Hero sections
│   ├── Section.tsx     # Content sections
│   ├── Card.tsx        # Information cards
│   ├── CTAButton.tsx   # Call-to-action buttons
│   ├── ProgramAccordion.tsx # Expandable curriculum
│   └── ContactForm.tsx # Contact form
├── public/             # Static assets
│   ├── logo.svg        # Loopd logo
│   ├── *.jpg           # Placeholder images
│   └── favicon.ico     # Site icon
├── styles/
│   └── globals.css     # Global styles and Tailwind imports
├── tailwind.config.ts  # Tailwind configuration
├── tsconfig.json       # TypeScript configuration
├── next.config.js      # Next.js configuration
└── package.json        # Dependencies and scripts
```

## 🚀 Deployment

### Vercel Deployment (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will automatically detect Next.js and configure build settings

3. **Environment Variables** (if needed)
   - Add any required environment variables in Vercel dashboard

4. **Custom Domain** (optional)
   - Add your custom domain in Vercel dashboard
   - Update DNS records with your domain registrar

### Build Commands
- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Install Command**: `npm install`

## 📧 Contact Form Integration

The contact form is ready for integration with form handling services:

### Recommended Services
- **Formspree**: Easy form handling with spam protection
- **Netlify Forms**: If deploying to Netlify
- **EmailJS**: Client-side email sending

### Integration Steps
1. Sign up for chosen service
2. Update `ContactForm.tsx` with your endpoint
3. Test form submissions

## 🎯 Future Enhancements

- [ ] Add real testimonials and success stories
- [ ] Integrate with a CMS for content management
- [ ] Add blog functionality
- [ ] Implement user registration system
- [ ] Add multi-language support
- [ ] Integrate with calendar for scheduling
- [ ] Add real-time chat support

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Next.js Team** - For the amazing React framework
- **Tailwind CSS** - For the utility-first CSS framework
- **Vercel** - For seamless deployment platform
- **React Community** - For the ecosystem and resources

## 📞 Support

For support, email hello@loopd.community or create an issue in this repository.

---

**Built with ❤️ for bridging generations through technology**