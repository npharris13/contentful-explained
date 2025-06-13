# Contentful Explained

An interactive demo that shows how Contentful's headless CMS works. This tool helps people understand the "create once, use everywhere" concept by letting them edit content on the left and see it instantly update across multiple channels on the right.

## Features

- **Interactive Content Editor**: Simulates Contentful's admin interface
- **Real-time Updates**: See changes instantly across all channels
- **Multiple Output Channels**: 
  - Website preview
  - Mobile app preview  
  - In-store kiosk preview
- **Visual API Connections**: Animated lines showing how content flows from the CMS to different platforms
- **Contentful Branding**: Uses official colors and design patterns

## How it Works

1. Edit content in the simulated Contentful admin interface on the left
2. Watch as your changes instantly appear across all three output channels
3. See the visual connections that represent Contentful's API delivering content everywhere

This demonstrates the core value proposition of headless CMS: create content once in a centralized location, then use it across any number of digital touchpoints.

## Getting Started

### Prerequisites

- Node.js (version 14+ recommended)
- npm or yarn

### Installation

1. Clone or download this project
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser

## Project Structure

```
src/
├── components/
│   ├── Header.tsx           # Main header with Contentful branding
│   ├── ContentfulAdmin.tsx  # Simulated admin interface
│   ├── ConnectionLines.tsx  # Animated API connection visualization
│   ├── OutputChannels.tsx   # Three channel previews
│   └── *.css               # Component styles
├── App.tsx                 # Main application component
├── App.css                # Application styles
├── index.tsx              # Application entry point
└── index.css              # Global styles with Contentful design tokens
```

## Built With

- React 18 with TypeScript
- CSS3 with custom properties (Contentful design tokens)
- SVG animations for connection visualization

## Use Cases

- Sales demonstrations
- Customer education
- Developer onboarding  
- Conference presentations
- Marketing materials

Perfect for explaining the headless CMS concept to non-technical stakeholders! 