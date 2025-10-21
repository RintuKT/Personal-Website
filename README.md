# Rintu KT - Personal Portfolio Website

A modern, professional personal portfolio website showcasing skills, experience, and projects.

## Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Interactive Elements**: Hover effects, smooth scrolling, and dynamic navigation
- **Professional Sections**:
  - Hero section with introduction
  - About section with statistics
  - Experience timeline
  - Featured projects
  - Skills showcase
  - Education & certifications
  - Contact form

## Technologies Used

- HTML5
- CSS3 (with CSS Grid and Flexbox)
- JavaScript (ES6+)
- Font Awesome icons
- Google Fonts (Inter)

## Project Structure

```
Website/
├── index.html          # Main HTML file
├── styles.css          # Stylesheet
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## Local Development

1. Clone or download this repository
2. Open `index.html` in your web browser
3. No build process or dependencies required!

## Deployment Instructions

### Option 1: GitHub Pages (Free)

1. Create a GitHub repository
2. Push your code to the repository
3. Go to repository Settings → Pages
4. Select the branch to deploy (usually `main`)
5. Your site will be live at `https://yourusername.github.io/repository-name`

### Option 2: Netlify (Free)

1. Sign up at [Netlify](https://www.netlify.com/)
2. Drag and drop your website folder to Netlify
3. Your site will be live instantly with a custom subdomain
4. Optional: Connect a custom domain (rintu.co)

### Option 3: Custom Domain (rintu.co)

To host on rintu.co:

1. **Purchase the domain** (if not already owned) from:
   - GoDaddy
   - Namecheap
   - Google Domains
   - etc.

2. **Choose a hosting provider**:
   - **Netlify** (Recommended for static sites)
     - Deploy your site to Netlify
     - Go to Domain Settings
     - Add custom domain "rintu.co"
     - Follow DNS configuration instructions
   
   - **Vercel** (Also excellent for static sites)
     - Deploy your site to Vercel
     - Add custom domain in project settings
     - Configure DNS as instructed
   
   - **Traditional Hosting** (cPanel/FTP)
     - Upload files via FTP to your hosting provider
     - Point domain to hosting server

3. **DNS Configuration**:
   - Add A records or CNAME records as per hosting provider instructions
   - Wait for DNS propagation (can take 24-48 hours)

### Quick Deploy to Netlify

1. Install Netlify CLI (optional):
   ```bash
   npm install -g netlify-cli
   netlify deploy
   ```

2. Or use drag-and-drop at [app.netlify.com/drop](https://app.netlify.com/drop)

### Quick Deploy to Vercel

1. Install Vercel CLI (optional):
   ```bash
   npm install -g vercel
   vercel
   ```

2. Or connect your GitHub repository at [vercel.com](https://vercel.com)

## Customization

### Update Personal Information

Edit the following in `index.html`:

- Name and title in hero section
- Email, phone, location in contact section
- Social media links (LinkedIn, GitHub)
- Project descriptions and links
- Skills and technologies
- Work experience details

### Change Color Scheme

Edit CSS variables in `styles.css`:

```css
:root {
    --primary-color: #2563eb;
    --secondary-color: #1e40af;
    --accent-color: #60a5fa;
    /* Add your custom colors */
}
```

### Add Your Photo

Replace the profile icon in the hero section:

```html
<div class="profile-avatar">
    <img src="your-photo.jpg" alt="Rintu KT">
</div>
```

And update the CSS accordingly.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Optimized for fast loading
- Minimal external dependencies
- Efficient CSS and JavaScript
- Mobile-first approach

## SEO Optimization

To improve SEO:

1. Add meta description in `<head>`:
   ```html
   <meta name="description" content="Rintu KT - Project Manager & Python Developer specializing in Agile leadership and E-commerce development">
   ```

2. Add Open Graph tags for social sharing:
   ```html
   <meta property="og:title" content="Rintu KT - Portfolio">
   <meta property="og:description" content="Project Manager & Python Developer">
   <meta property="og:image" content="preview-image.jpg">
   ```

3. Add favicon:
   ```html
   <link rel="icon" type="image/png" href="favicon.png">
   ```

## Contact

- **Email**: rintuiri@gmail.com
- **Phone**: +91 80895 26160
- **Location**: Iringalloor, Calicut-14, Kerala, India
- **LinkedIn**: [linkedin.com/in/rintukti](https://linkedin.com/in/rintukti)
- **GitHub**: [github.com/RintuKT](https://github.com/RintuKT)

## License

This project is open source and available for personal use.

---

Built with ❤️ by Rintu KT