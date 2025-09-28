# 🌦️ Weather App

A modern weather forecast web application built with **React**, **TypeScript**, **TanStack Query**, **Tailwind CSS**, **Shadcn UI**, and **Recharts**. The app allows users to search for cities and view current weather conditions along with forecast trends.

## 🚀 Features

- Search weather by **city name**  
- Display **current temperature, humidity, wind speed, visibility, and location**
- Display **temperature chart** (powered by Recharts)
- Show **5-day forecast**
- Dark/Light theme toggle for eye comfort


## 🏗️ Tech Stack

- **Frontend:** React, TanStack Query, TypeScript, Tailwind CSS, Shadcn UI, Recharts  
- **State Management:** Redux Toolkit  
- **API:** [OpenWeatherMap](https://openweathermap.org/api)  
- **Build Tool:** Vite


## 🏁 Getting Started

### Prerequisites
Before running the project, make sure you have installed the following:

- [Node.js](https://nodejs.org/)
- A code editor like [VS Code](https://code.visualstudio.com/)

### Setup Instructions
Follow these steps to get the project up and running locally:

1. **Clone the repository**
   ```sh
   git clone https://github.com/nazmulhossin/weather-forecast-app.git
   cd weather-forecast-app
   ```
2. **Install dependencies**
   ```sh
   npm install
   ```
3. **Rename `.env.example` to `.env`**

   Add your [OpenWeatherMap](https://openweathermap.org/) API key in `.env` file:
   ```env
   VITE_OPENWEATHER_API_KEY=your_openweather_api_key
   ```
5. **Run the development server**
   ```sh
   npm run dev
   ```
   
