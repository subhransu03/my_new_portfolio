# My New Portfolio

A modern, interactive portfolio built with Next.js and Tailwind CSS.  
Showcases your skills, projects, resume, and contact options with engaging UI elements.

---

## 🚀 Features

- **Animated Hero Section:** Orbiting and spinning stars, availability status, and introduction.
- **Smooth Navigation:** "Explore my projects" button scrolls to the Projects section.
- **Resume Download:** "Download my resume" button downloads your resume PDF.
- **Contact Options:** "Let's connect" button opens Gmail compose window.
- **Social Footer:** Links to LinkedIn, GitHub, Email, WhatsApp, and Instagram with original icon colors.
- **Responsive Design:** Works on all devices.
- **Modern Styling:** Uses Tailwind CSS for fast, customizable UI.
- **Accessibility:** Keyboard and screen reader friendly.

---

## 📁 Project Structure

```
my-new-portfolio/
├── public/
│   ├── Subhransu_Software_Developer_Resume.pdf
│   └── ... (other static assets)
├── src/
│   ├── assets/
│   │   ├── images/
│   │   ├── icons/
│   ├── components/
│   │   └── HeroOrbit.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── Projects.tsx
│   │   └── Footer.tsx
│   └── ...
├── README.md
└── ...
```

---

## 🛠️ Setup & Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/my-new-portfolio.git
   cd my-new-portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Add your resume:**
   - Place your PDF resume in the `public` folder and name it `Subhransu_Software_Developer_Resume.pdf`.

4. **Start the development server:**
   ```bash
   npm run dev
   ```

5. **Open in browser:**
   - Visit [http://localhost:3000](http://localhost:3000)

---

## 🖼️ Main Sections

### 1. Hero Section (`src/sections/Hero.tsx`)
- Animated background with orbiting stars.
- Displays your avatar, name, and availability.
- Buttons:
  - **Explore my projects:** Scrolls to Projects section.
  - **Download my resume:** Downloads your resume PDF.
  - **Let's connect:** Opens Gmail compose window.

### 2. Projects Section (`src/sections/Projects.tsx`)
- Displays your projects.
- Add an `id="projects"` to this section for smooth scrolling.

### 3. Footer (`src/sections/Footer.tsx`)
- Social links with original icon colors.
- Responsive layout.

---

## ✨ Customization

- **Resume:** Replace `Subhransu_Software_Developer_Resume.pdf` in `public/`.
- **Avatar:** Update `memoji-computer.png` in `src/assets/images/`.
- **Social Links:** Edit `footerLinks` array in `Footer.tsx`.
- **Projects:** Add your projects in `Projects.tsx`.

---

## 🧑‍💻 Technologies Used

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [TypeScript](https://www.typescriptlang.org/)

---

## 📄 End-to-End Project Documentation

### Overview

This portfolio is designed to showcase your professional profile, skills, and projects with a modern, interactive interface.

### Pages & Components

#### 1. **Hero Section**
- **Animated Orbits:** Uses `HeroOrbit` component for spinning and orbiting star icons.
- **Availability Badge:** Shows your current status.
- **Introduction:** Name and short bio.
- **Action Buttons:**
  - **Explore my projects:** Scrolls to Projects section using `scrollIntoView`.
  - **Download my resume:** Opens resume PDF in a new tab.
  - **Let's connect:** Opens Gmail compose window with your email.

#### 2. **Projects Section**
- **ID:** `projects` for smooth scrolling.
- **Content:** List your projects with descriptions, tech stack, and links.

#### 3. **Footer**
- **Social Links:** LinkedIn, GitHub, Email, WhatsApp, Instagram.
- **Icons:** Displayed with original brand colors.
- **Responsive:** Adapts to all screen sizes.

### Adding/Updating Content

- **Resume:** Replace the PDF in `public/`.
- **Projects:** Edit `Projects.tsx` to add or update projects.
- **Social Links:** Update `footerLinks` in `Footer.tsx`.
- **Avatar:** Replace image in `src/assets/images/`.

### Deployment

1. **Build for production:**
   ```bash
   npm run build
   ```

2. **Preview production build:**
   ```bash
   npm run start
   ```

3. **Deploy to Vercel (recommended):**
   - Push your code to GitHub.
   - Import your repo in [Vercel](https://vercel.com/).
   - Vercel will auto-deploy your Next.js app.

### Troubleshooting

- **Resume not downloading:** Ensure the PDF is in the `public` folder and the filename matches.
- **Buttons not clickable:** Check `z-index` and overlapping elements in your CSS.
- **Icons not showing colors:** Set icon color using inline styles or Tailwind utility classes.

---

## 📬 Contact

- **Email:** subh03ransu@gmail.com
- **LinkedIn:** [linkedin.com/in/subhransusekharsahu](https://linkedin.com/in/subhransusekharsahu)
- **GitHub:** [github.com/subhransu03](https://github.com/subhransu03)

---

## 📃 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🙏 Credits

- [React Icons](https://react-icons.github.io/react-icons/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Next.js](https://nextjs.org/)

---

Feel free to update this documentation as your portfolio evolves!