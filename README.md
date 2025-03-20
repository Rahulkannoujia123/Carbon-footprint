# CarbonTrackr

CarbonTrackr is a minimal proof-of-concept web application that helps users track and offset their carbon footprint using AI recommendations.

## Project Structure
```
carbonfootprint/
├── frontend/
│   ├── README.md
│   ├── main.jsx
│   ├── App.jsx
│   ├── styles/
│   │   └── global.css
│   └── package.json
└── backend/
    ├── index.js
    ├── .env
    ├── package.json
    └── README.md
```

## Tech Stack
- **Frontend:** React (with Vite), Zustand for state management, Shadcn (optional for styling)
- **Backend:** Node.js with Express, OpenAI API integration

## Features
- Calculate carbon footprint based on travel distance.
- Receive AI-generated recommendations for reducing carbon emissions.
- Persist results and recommendations using Zustand and local storage.
- Backend handles carbon calculation and integrates with OpenAI to generate recommendations.

## Installation
### Frontend
1. Clone the repository:
```bash
git clone https://github.com/Rahulkannoujia123/carbonfootprint.git
cd carbonfootprint/frontend
```
2. Install dependencies:
```bash
npm install
```
3. Run the development server:
```bash
npm run dev
```

### Backend
1. Navigate to the backend folder:
```bash
cd ../backend
```
2. Install dependencies:
```bash
npm install
```
3. Create a `.env` file and add your OpenAI API key:
```
OPENAI_API_KEY=your-api-key-here
https://platform.openai.com/api-keys
```
4. Run the backend server:
```bash
node index.js
```

## Usage
1. Enter the travel distance (in kilometers) in the input field.
2. Click the "Calculate" button to get the carbon footprint and AI recommendations.

## API Endpoint
The frontend interacts with the backend API at:
```
POST https://your-backend-url.com/calculate
```
Expected request body:
```json
{
  "distance": 100
}
```
Expected response:
```json
{
  "footprint": 25.5,
  "recommendations": [
    "Use public transport",
    "Carpool with others"
  ]
}
```

## Deployment
- Frontend can be hosted on Vercel/Netlify with a simple push to the repository.
- Backend can be deployed on any free hosting service (e.g., Render, Heroku, Vercel).
- Ensure the backend URL is updated in the frontend API calls.
- Add the `OPENAI_API_KEY` in your hosting environment settings.

## Author
- **Rahul Kannoujia**

## License
This project is licensed under the MIT License.

