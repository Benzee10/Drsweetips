# Dating Groups Landing Page

## Overview
A simple static HTML landing page for dating groups with links to join Snapchat and WhatsApp groups. The page features a modern design using Tailwind CSS from CDN.

## Recent Changes
- **2025-09-16**: Added dating icon and social media preview support
  - Generated custom dating-themed icon for favicon and social sharing
  - Added comprehensive Open Graph and Twitter Card meta tags
  - Enhanced link previews for social media platforms (WhatsApp, Facebook, Twitter, etc.)
  - Fixed CSS styling issue with missing style tag
- **2025-09-10**: Added smart redirect functionality
  - Implemented click handler to redirect non-button interactions to https://whatsappad.vercel.app/
  - Preserved all existing button and interactive element functionality
  - Enhanced user engagement through strategic redirects
- **2025-09-09**: Project imported and configured for Replit environment
  - Set up static file server workflow on port 5000
  - Configured deployment for autoscale production environment
  - Verified website functionality

## Project Architecture
- **Frontend**: Single static HTML file (`index.html`)
- **Styling**: Tailwind CSS loaded via CDN
- **Server**: Python HTTP server for static file serving
- **Deployment**: Autoscale configuration for production

## Technical Setup
- **Development Server**: Python HTTP server on port 5000
- **Host Configuration**: Binds to 0.0.0.0 for Replit proxy compatibility
- **Module**: Web module configured in .replit file

## File Structure
```
├── index.html          # Main landing page
├── .replit            # Replit configuration
└── replit.md          # Project documentation
```