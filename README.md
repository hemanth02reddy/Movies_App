# Movies App

A responsive Netflix-style Movies App built using React JS. This application allows users to browse trending movies, view popular movies, search for movies, and check detailed information about each movie.

## Live Features

* User Authentication
* Protected Routes
* Trending Movies Section
* Originals Section
* Popular Movies Page
* Search Movies Functionality
* Movie Details Page
* Similar Movies Recommendations
* Responsive UI Design
* API Integration

---

# Tech Stack

* React JS
* React Router DOM
* JavaScript (ES6+)
* CSS3
* HTML5
* Vite
* REST API
* JWT Authentication
* js-cookie

---

# Project Structure

```bash
src/
 ├── components/
 │    ├── Account/
 │    ├── Footer/
 │    ├── Header/
 │    ├── Home/
 │    ├── Login/
 │    ├── MovieDetails/
 │    ├── MovieItem/
 │    ├── Popular/
 │    ├── ProtectedRoute/
 │    ├── ReactSlick/
 │    ├── Search/
 │    └── SimilarMovieDetails/
 │
 ├── assets/
 ├── App.jsx
 ├── main.jsx
 └── index.css
```

---

# Installation & Setup

## Clone Repository

```bash
git clone https://github.com/hemanth02reddy/Movies_App.git
```

## Navigate into Project Folder

```bash
cd Movies_App
```

## Install Dependencies

```bash
npm install
```

## Run Development Server

```bash
npm run dev
```

---

# API Endpoints Used

* Trending Movies API
* Originals API
* Popular Movies API
* Search Movies API
* Movie Details API

Base URL:

```bash
https://apis.ccbp.in/movies-app
```

---

# Authentication

JWT Token based authentication is implemented using:

```bash
js-cookie
```

Protected routes are used to restrict unauthorized access.

---

# Key Features

## Home Page

* Displays Trending Movies
* Displays Originals Movies
* Dynamic Banner Section

## Popular Page

* Shows popular movies fetched from API

## Search Page

* Search movies dynamically
* Handles loading and failure states

## Movie Details Page

* Displays:

  * Movie Title
  * Runtime
  * Release Date
  * Rating
  * Overview
  * Genres
  * Audio Languages
  * Similar Movies

## Account Page

* User profile section
* Logout functionality

---

# Responsive Design

The application is fully responsive and optimized for:

* Mobile Devices
* Tablets
* Desktop Screens

---

# Error Handling

The app handles:

* API Failure States
* Empty Search Results
* Unauthorized Access
* Loading States
* Invalid Routes

---

# Demo

https://hemanthcinema.ccbp.tech/login

---

# Future Improvements

* Add Watchlist Feature
* Add Video Player
* Add Dark/Light Theme Toggle
* Improve Search Suggestions
* Add Pagination

---

# Author

Hemanth Reddy

GitHub:

```bash
https://github.com/hemanth02reddy
```

---

# License

This project is created for learning and portfolio purposes.
