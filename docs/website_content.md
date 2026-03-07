# Website Analysis

## Current Tech Stack

- **Framework**: Next.js 15 (Pages Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 3
- **Deployment**: Vercel
- **Package Manager**: npm
- **Dependencies**: React 19, React DOM 19

## Branding (from README)

### Brand Identity
- **Name**: Loopd Community
- **Tagline**: "Bridging Generations Through Technology"
- **Mission**: Connecting seniors with youth volunteers to build confidence, skills, and community connections through technology mentorship.
- **Website**: https://loopd.community
- **Contact Email**: hello@loopd.community
- **Phone**: (555) 123-4567

### Color Palette
- **Primary**: Blue (#2563EB) — Trust and technology
- **Secondary**: Light Blue (#0EA5E9) — Communication and connection
- **Accent**: Yellow (#EAB308) — Energy and optimism

### Typography
- **Font Family**: Inter (Google Fonts)
- **Base Font Size**: 18px (accessibility-first design)
- **Larger base sizes** for accessibility throughout

### Design Principles
- Accessibility first (large text, high contrast, screen reader friendly)
- Responsive across desktop, tablet, and mobile
- Clean, intuitive interface
- Component-based architecture

## Sitemap

```
/                   — Home (landing page)
/about              — About (mission, story, values)
/programs           — Programs (curriculum, digital life made easy)
/seniors            — For Seniors (benefits, what you'll learn)
/youth              — For Youth (volunteer opportunities, requirements)
/facilities         — For Facilities (partnership info, outcomes)
/contact            — Contact (form, FAQ, contact methods)
```

## Navigation

```json
[
  { "name": "Home", "href": "/" },
  { "name": "About", "href": "/about" },
  { "name": "Programs", "href": "/programs" },
  { "name": "For Seniors", "href": "/seniors" },
  { "name": "For Youth", "href": "/youth" },
  { "name": "For Facilities", "href": "/facilities" },
  { "name": "Contact", "href": "/contact" }
]
```

## Pages

### Home (/)
- **Hero**: "Bridging Generations, Building Connections" — Empowering seniors through technology with youth mentorship
- **Choose Your Path**: Cards for Seniors, Youth, and Facilities
- **Mission Statement**: Reciprocal mentorship model description
- **How Loopd Works**: 3-step approach (Seniors Gain Confidence, Youth Lead & Mentor, Facilities Improve Engagement)
- **Testimonials Placeholder**: "Join our community and become part of the stories we'll share here."
- **Final CTA**: "Ready to Get Started?" with Join Today / View Programs buttons

### About (/about)
- **Hero**: "Our Story" — Building bridges across generations through technology
- **The Challenge**: Senior Isolation & Digital Divide + Youth Seeking Purpose
- **Our Solution**: Reciprocal Mentorship model — Why This Works (Patient Learning, Mutual Respect, Lasting Impact)
- **Vision & Values**: Inclusion, Community, Empowerment
- **What Makes Us Different**: Personalized Approach, Accessibility First, Community Focus, Proven Results
- **CTA**: "Join Our Mission" — Get Involved Today / See Our Programs

### Programs (/programs)
- **Hero**: "Our Programs" — Structured learning for lasting results
- **Mentorship Model**: 1-on-1 Support, Flexible Scheduling, Progress Tracking
- **Digital Life Made Easy**: 10-week curriculum (accordion)
  - Week 1: Getting Started with Technology
  - Week 2: Device Navigation & Touch Basics
  - Week 3: Internet Basics & Web Browsing
  - Week 4: Email & Digital Communication
  - Week 5: Video Calling & Staying Connected
  - Week 6: Telehealth & Medical Technology
  - Week 7: Smart Home Basics
  - Week 8: Online Banking & Financial Safety
  - Week 9: Scam Awareness & Digital Safety
  - Week 10: Putting It All Together
- **Program Benefits**: Increased Confidence, Better Connections, Enhanced Safety, Independence
- **Coming Soon**: Social Media, Digital Photography, Online Shopping, Digital Entertainment
- **CTA**: "Ready to Start Learning?"

### For Seniors (/seniors)
- **Hero**: "Technology Learning for Seniors" — Learn with confidence, patience, and support
- **Benefits**: Patient Supportive Learning, Stay Connected with Family, Build Confidence, Learn Essential Skills, Safe Learning Environment, New Friendships
- **What You'll Learn**: 10 essential digital skills
- **Accessibility Promise**: Large Text, Multilingual Support, Ergonomic Setup, Flexible Pacing
- **How It Works**: Register → Get Matched → Start Learning → Gain Confidence
- **CTA**: "Ready to Start Your Technology Journey?"

### For Youth (/youth)
- **Hero**: "Youth Volunteers: Be the Bridge" — Help seniors navigate technology while building your own skills
- **Why Join**: Make a Real Impact, Earn Volunteer Hours, Develop Leadership Skills, Gain Life Experience, Build Your Resume, Flexible Scheduling
- **What You'll Do**: 8 mentor activities
- **Time Commitment**: 1-2 hours per week for 10 weeks
- **Skills You'll Develop**: Communication, Patience & Empathy, Teaching, Problem-Solving, Cultural Awareness, Professional Skills
- **High School Requirements**: 20+ Hours, Documented, Impactful
- **Volunteer Requirements**: Ages 14-25, basic tech comfort, patience, 10-week commitment, communication skills, complete training
- **Training & Support**: Communication techniques, understanding senior challenges, empathy training, troubleshooting basics, ongoing support
- **How to Get Started**: Apply → Train → Get Matched → Start Mentoring
- **CTA**: "Ready to Make a Difference?"

### For Facilities (/facilities)
- **Hero**: "Partner with Loopd Community" — Enhance resident wellbeing through technology mentorship
- **Benefits**: Improved Resident Engagement, Enhanced Family Connections, Reduced Social Isolation, Increased Independence, Positive Community Impact, Staff Development
- **Program Setup**: Flexible Implementation, Custom Curriculum, Trained Volunteers, Minimal Staff Burden, Progress Tracking, Ongoing Support
- **Flexible Program Options**: 1-on-1 Mentoring (Most Popular), Small Group Sessions, Workshop Format
- **Measurable Outcomes**: 8 tracked outcomes
- **Who We Work With**: Senior Living Communities, Memory Care Facilities, Nursing Homes, Adult Day Centers, Community Centers, Libraries & Nonprofits
- **What's Included**: Trained volunteers, Customized curriculum, Program coordination, Progress tracking, Ongoing support, Staff training
- **How to Get Started**: Initial Consultation → Program Design → Volunteer Training → Program Launch
- **CTA**: "Ready to Transform Your Residents' Lives?"

### Contact (/contact)
- **Hero**: "Get in Touch" — We're here to help you get started
- **Contact Methods**: Email (hello@loopd.community), Phone ((555) 123-4567), Office Hours (Mon-Fri 9-5 PST)
- **Contact Form**: Name, Email, Role (dropdown), Message
- **FAQ**: 6 common questions about cost, technology needed, program length, experience, format, volunteer training
- **Connect With Us**: Service Area (Greater Metro Area), Social links (Facebook, Instagram, LinkedIn)
- **CTA**: "Ready to Join Our Community?" with Email Us / Call Us buttons

## UI Components

- **Navbar**: Sticky top navigation with logo, desktop links, mobile hamburger menu
- **Hero**: Gradient background (blue to secondary), headline, subtitle, description, CTA buttons
- **Section**: Configurable background (white, gray, primary, gradient), configurable padding
- **Card**: White rounded cards with optional icon, title, description, hover effects, link support
- **CTAButton**: Primary/Secondary/Outline variants, Small/Medium/Large sizes, Link or button
- **ProgramAccordion**: Expandable curriculum items with week numbers
- **ContactForm**: 4 fields (name, email, role dropdown, message), validation, submit handling, status messages
- **Footer**: Dark background, logo, description, contact info, Quick Links, For Participants links, copyright

## Contact Form

### Fields
1. **Full Name** (text, required)
2. **Email Address** (email, required)
3. **I am a...** (select, required): Senior / Youth volunteer / Facility administrator / Other
4. **Message** (textarea, required)

### Validation
- HTML5 required attribute on all fields
- Email type validation on email field

### Submission
- POST to `/api/contact` with JSON body
- Loading state during submission
- Success message: "Thank you for your message! We'll get back to you soon."
- Error message: "Sorry, there was an error sending your message. Please try again or contact us directly."

## SEO Metadata

| Page | Title | Description |
|------|-------|-------------|
| Home | Loopd Community - Bridging Generations Through Technology | Connecting seniors with youth volunteers to build confidence, skills, and community connections through technology mentorship. |
| About | About Us - Loopd Community | Learn about Loopd Community's mission to bridge generations through technology mentorship and digital literacy programs. |
| Programs | Programs - Loopd Community | Explore Loopd Community's structured digital literacy programs designed to empower seniors through technology mentorship. |
| Seniors | For Seniors - Loopd Community | Join Loopd Community's technology programs designed specifically for seniors. Learn digital skills with patient youth mentors. |
| Youth | For Youth - Loopd Community | Join Loopd Community as a youth volunteer mentor. Help seniors learn technology while developing leadership skills. |
| Facilities | For Facilities - Loopd Community | Partner with Loopd Community to enhance resident engagement through innovative technology mentorship programs. |
| Contact | Contact Us - Loopd Community | Get in touch with Loopd Community to learn more about our technology mentorship programs or to register your interest. |

## Assets

| File | Type | Description |
|------|------|-------------|
| `/public/logo.svg` | SVG | Loopd brand logo |
| `/public/favicon.ico` | ICO | Browser favicon |
| `/public/seniors-placeholder.jpg` | JPG | Placeholder image for seniors section |
| `/public/youth-placeholder.jpg` | JPG | Placeholder image for youth section |
| `/public/facilities-placeholder.jpg` | JPG | Placeholder image for facilities section |
