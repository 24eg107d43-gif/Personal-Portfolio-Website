# Full-Stack Personal Portfolio Website

A complete full-stack portfolio application to showcase your projects and skills.

## Features

### Frontend
- Responsive HTML/CSS design
- Dynamic JavaScript functionality
- Project showcase section
- Skills display
- Contact form
- Smooth animations and transitions

### Backend
- Node.js/Express.js REST API
- Project management endpoints
- Contact form submission handling
- Email notifications

### Database
- MongoDB for flexible data storage
- Project collection schema
- Contact submissions collection

### Deployment
- Ready for Heroku, Netlify, or Vercel
- Environment configuration
- Production-ready setup

## Project Structure

```
Personal-Portfolio-Website/
├── frontend/              # Frontend application
│   ├── index.html
│   ├── css/
│   │   └── styles.css
│   ├── js/
│   │   ├── main.js
│   │   └── api.js
│   └── assets/
├── backend/              # Backend application
│   ├── server.js
│   ├── config/
│   │   └── db.js
│   ├── routes/
│   │   ├── projects.js
│   │   └── contact.js
│   ├── models/
│   │   ├── Project.js
│   │   └── Contact.js
│   ├── controllers/
│   │   ├── projectController.js
│   │   └── contactController.js
│   ├── middleware/
│   │   └── errorHandler.js
│   ├── .env.example
│   └── package.json
└── docs/                 # Documentation
    └── setup.md
```

## Getting Started

### Prerequisites
- Node.js (v14+)
- MongoDB (local or MongoDB Atlas)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/24eg107d43-gif/Personal-Portfolio-Website.git
cd Personal-Portfolio-Website
```

2. Setup Backend
```bash
cd backend
npm install
cp .env.example .env
# Edit .env with your configuration
npm start
```

3. Setup Frontend
```bash
cd ../frontend
# Serve using any static server or open index.html directly
```

## API Endpoints

### Projects
- `GET /api/projects` - Get all projects
- `GET /api/projects/:id` - Get project by ID
- `POST /api/projects` - Create new project
- `PUT /api/projects/:id` - Update project
- `DELETE /api/projects/:id` - Delete project

### Contact
- `POST /api/contact` - Submit contact form

## Environment Variables

See `backend/.env.example` for required configuration.

## Deployment

### Heroku
```bash
heroku create your-portfolio
git push heroku main
```

### Netlify
- Deploy frontend to Netlify
- Deploy backend to Heroku or Railway

### Vercel
- Deploy frontend to Vercel
- Configure backend API endpoint

## License

MIT