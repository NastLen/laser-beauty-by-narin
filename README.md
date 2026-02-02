# Laser Beauty by Narin

A modern, elegant website for a premium laser hair removal studio built with Next.js 14 and Tailwind CSS.

## Features

- 🎨 Luxury, minimalistic design with feminine aesthetic
- 🎯 Fully responsive and mobile-friendly
- ⚡ Built with Next.js 14 App Router
- 💅 Styled with Tailwind CSS
- 🔤 Google Fonts integration (Cormorant Garamond & Inter)
- 🎭 Smooth animations and transitions
- 📱 Modern component architecture

## Color Palette

- **Cream**: Light beige tones for backgrounds
- **Nude**: Warm nude tones for accents
- **Champagne**: Soft champagne for subtle highlights
- **Gold**: Elegant gold for CTAs and accents
- **Sage**: Soft green for complementary elements

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with font configuration
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles and Tailwind config
├── components/
│   ├── ui/                 # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   └── Section.tsx
│   └── sections/           # Page sections
│       ├── Hero.tsx
│       ├── About.tsx
│       ├── Services.tsx
│       ├── Benefits.tsx
│       ├── Pricing.tsx
│       └── Contact.tsx
└── tailwind.config.js      # Tailwind configuration
```

## Customization

### Colors

Edit the color palette in `tailwind.config.js` under `theme.extend.colors`.

### Typography

Fonts are configured in `app/layout.tsx`. Current fonts:

- **Headings**: Cormorant Garamond (serif)
- **Body**: Inter (sans-serif)

### Content

Update section content in the respective component files under `components/sections/`.

## Build for Production

```bash
npm run build
npm start
```

## Technologies Used

- **Next.js 14** - React framework with App Router
- **React 18** - UI library
- **Tailwind CSS 3** - Utility-first CSS framework
- **TypeScript** - Type-safe development
- **Google Fonts** - Typography

## License

Private project for Laser Beauty by Narin

---

Built with ❤️ using Next.js and Tailwind CSS
