# AI Learning Platform

An AI-powered learning platform that provides personalized lessons, user management, prompt history, and admin tools with OpenAI integration.

---

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies](#technologies)
- [Installation & Running](#installation--running)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
- [Folder Structure](#folder-structure)
- [Environment Variables](#environment-variables)
- [Docker Support](#docker-support)
- [Contributing](#contributing)
- [License](#license)

---

## Project Overview

This platform allows users to:

- Register and login securely
- Generate AI-based personalized lessons by category, subcategory, or free text
- View their prompt history and responses
- Administer users and prompt data via a management API

---

## Features

- AI lesson generation using OpenAI GPT-3.5-turbo
- User authentication and authorization
- Category and subcategory management
- Prompt history tracking per user
- Clean RESTful API backend
- Modern React frontend with Redux state management
- Swagger UI for API documentation and testing

---

## Technologies

### Backend

- ASP.NET Core 8 Web API
- Entity Framework Core (SQL Server)
- AutoMapper
- OpenAI API
- Swagger (OpenAPI)

### Frontend

- React 19
- Redux Toolkit
- React Router v7
- PrimeReact UI components
- Axios HTTP client
- Web Vitals for performance monitoring

---

## Installation & Running

### Backend Setup

```bash
git clone https://github.com/your-username/ai-learning-platform.git
cd ai-learning-platform
dotnet restore

# Initialize user secrets for storing OpenAI API key securely
dotnet user-secrets init
dotnet user-secrets set "OpenAi:ApiKey" "your-openai-api-key"

# Apply database migrations
dotnet ef database update

# Run the backend API server
dotnet run --project AiLearningPlatform
Frontend Setup
bash
Copy
Edit
cd client
npm install
npm run dev
The frontend will run typically on http://localhost:5173 and will communicate with the backend API.

Folder Structure
plaintext
Copy
Edit
/ai-learning-platform
├── AiLearningPlatform/       # Backend API project (ASP.NET Core)
/client                        # Frontend React app
/BL                           # Business Logic Layer
/DAL                          # Data Access Layer
/Entities                     # DTOs and Models
/README.md                    # This file
Environment Variables
Backend
OpenAI API key should be set via user-secrets or in appsettings.Development.json as:

json
Copy
Edit
"OpenAi": {
  "ApiKey": "your-openai-api-key"
}
Frontend
Create a .env file in the /client directory with:

env
Copy
Edit
VITE_API_URL=http://localhost:5000/api
Docker Support
Optionally, you can use Docker Compose to spin up a SQL Server database:

yaml
Copy
Edit
version: '3.8'
services:
  sqlserver:
    image: mcr.microsoft.com/mssql/server:2022-latest
    environment:
      SA_PASSWORD: "YourStrong!Password"
      ACCEPT_EULA: "Y"
    ports:
      - "1433:1433"
Update your connection string accordingly in backend config.

Contributing
Contributions are welcome! Please fork the repository, make your changes, and open a pull request.

License
This project is for educational purposes only.

Happy coding! 🚀
