# Tula's International School (TIS) - Homepage Redesign

A modern, animated, high-converting redesign of the **Tula's International School (TIS) Dehradun** homepage ([tis.edu.in](https://tis.edu.in/)). Built with modern React, Tailwind CSS, Framer Motion, and Lucide React to elevate the school's online presence while retaining its core brand identity, legacy, and copy.

---

## 🚀 Live Demo & Repository

- **Live URL:** [TIS Redesign Deployment](https://tis-homepage-redesign.vercel.app) *(Deployable on Vercel / Netlify / GitHub Pages)*
- **GitHub Repository:** [https://github.com/your-username/tis-homepage-redesign](https://github.com/your-username/tis-homepage-redesign)

---

## 🛠️ Tech Stack

- **Framework:** React 19 + Vite (TypeScript)
- **Styling:** Tailwind CSS v4 + Vanilla CSS Variables & Glassmorphism design tokens
- **Animations:** Framer Motion 14 (Spring dynamics, scroll triggers, layout transitions, confetti)
- **Icons:** Lucide React
- **Utility:** Canvas Confetti, clsx, tailwind-merge

---

## ✨ Standout Features Implemented (Included All 4!)

1. **Feature A: Custom Cursor (`CustomCursor.tsx`)**
   - Interactive mouse-follower ring with inner precision dot using Framer Motion springs.
   - Dynamically scales and glows when hovering over buttons, cards, links, and inputs.
   - Automatically hides on touch and mobile devices (`pointer: coarse`).

2. **Feature B: Scroll-Triggered Reveals (`ScrollReveal.tsx`)**
   - Staggered entrances with custom cubic bezier easing (`[0.25, 0.1, 0.25, 1.0]`) as cards and sections scroll into view.
   - Zero layout thrashing, optimized 60 FPS scroll triggers.

3. **Feature C: Animated Dark/Light Theme Switcher (`ThemeToggle.tsx`)**
   - Smooth 360-degree rotation and spring movement between Sun and Moon states.
   - Synchronizes with `html.dark` class and persists user preference in `localStorage`.

4. **Feature D: Scroll Progress Bar (`ScrollProgress.tsx`)**
   - Fixed top reading depth bar glowing with brand amber-emerald gradient.
   - Smooth real-time progress calculation powered by Framer Motion `useScroll()` & `useSpring()`.

---

## 🏛️ High-Converting Additions & Interactive Components

- **Hero Showcase:** High-impact copy, live admissions open badge, video tour play preview, floating 22-acre & 8:1 ratio stat chips.
- **Live Animated Metrics Counter (`CountUpNumber.tsx`):** Animated numerical count-up when metrics scroll into viewport (22+ Acres, 8:1 Ratio, 16+ Sports, 100% CBSE Success).
- **Interactive Academic Wings (`ProgramsSection.tsx`):** Tabbed breakdown for Junior, Middle, and Senior Secondary wings with CBSE stream highlights.
- **Filterable Campus Facilities Gallery (`CampusFacilitiesSection.tsx`):** Filter by Hostel, Sports, Science & STEM, Arts.
- **A Day in the Life of a TISian (`BoardingLifeSection.tsx`):** Interactive daily timeline covering Morning fitness, Academic sessions, Sports coaching, and Supervised evening prep.
- **Interactive Parent & Student Testimonials Carousel (`TestimonialsSection.tsx`):** Filterable quotes, star ratings, and student avatars.
- **Accredited Rankings & Awards (`AwardsSection.tsx`):** EW India School Rankings #1 Boarding School honors.
- **Interactive Accordion FAQs (`FAQSection.tsx`):** Real-time search bar & category filters for admissions, boarding, meals, and safety.
- **Instant Eligibility & Fee Estimator Modal (`AdmissionCalculatorModal.tsx`):** Multi-step form with instant fee breakdown guide and celebratory canvas confetti.
- **Virtual Video Tour Modal (`VideoTourModal.tsx`):** Popup YouTube virtual walk-through player.

---

## 📐 Component Architecture Overview

```
src/
├── components/
│   ├── animation/         # Animation drivers (CustomCursor, ScrollProgress, ThemeToggle, ScrollReveal, CountUpNumber)
│   ├── layout/            # Navigation header, MobileNav drawer, Footer
│   ├── modals/            # AdmissionCalculatorModal, VideoTourModal
│   ├── sections/          # HeroSection, StatCounterSection, AboutSection, ProgramsSection, CampusFacilitiesSection, BoardingLifeSection, TestimonialsSection, AwardsSection, FAQSection, CTASection
│   └── ui/                # Atomic UI components (Button, Badge, Modal)
├── data/                  # Static TIS school copy, nav items, stats, FAQs, testimonials (schoolData.ts)
├── hooks/                 # Custom React hooks (useTheme, useMousePosition, useScrollProgress)
└── styles/                # Tailwind CSS v4 setup & CSS custom variables (index.css)
```

---

## 📦 Getting Started Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/tis-homepage-redesign.git
   cd tis-homepage-redesign
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` (or the terminal localhost link) in your browser.

4. **Build for production:**
   ```bash
   npm run build
   ```

---

## 🛡️ Brand Identity Retained

- Official Tula's International School colors (Royal Navy `#0B192C`, Academic Gold `#D4AF37`, Emerald Green `#059669`).
- Authentic address details (Dhoolkot, Near P.O. Selakui, Chakrata Road, Dehradun - 248011, Uttarakhand).
- Accurate copy regarding 22-acre campus, 8:1 student-teacher ratio, CBSE curriculum, and 100% residential boarding experience.
