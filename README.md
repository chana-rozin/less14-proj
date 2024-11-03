# Less14 Project

A JavaScript project featuring a card management system with both front-end and back-end components. This project allows users to manage cards, handle errors, and interact with an API through a clean, user-friendly interface.

---

## Table of Contents

- [Project Overview](#project-overview)
- [Project Structure](#project-structure)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)

---

## Project Overview

The **Less14 Project** is designed for card management, supporting full CRUD operations—create, read, update, and delete cards. It includes error handling through toast notifications to enhance user experience.

---

## Project Structure

```plaintext
less14-proj/
└── proj/
    ├── front/        # Front-end code (UI, client-side logic)
    └── back/         # Back-end code (API, server-side logic)
```

- **`front/`**: Contains the user interface, manages user interactions, and shows toast notifications for real-time feedback.
- **`back/`**: Manages API requests, processes data, and connects with the card API for CRUD operations.

---

## Features

- **Card Management**: Full CRUD operations on cards
- **Error Handling**: Toast notifications for real-time error feedback
- **API Integration**: Integrates with a card API for efficient data handling

---

## Prerequisites

- **Node.js** and **npm** for back-end development
- A **Web Browser** for front-end access

---

## Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/chana-rozin/less14-proj.git
   ```

2. **Navigate to Project Directory**:
   ```bash
   cd less14-proj/proj
   ```

3. **Install Dependencies**:

   - For **Front-end**:
     ```bash
     cd front
     npm install
     ```

   - For **Back-end**:
     ```bash
     cd ../back
     npm install
     ```

---

## Usage

1. **Run the Back-end Server**:

   In the `back` directory, start the server:
   ```bash
   cd back
   npm start
   ```

2. **Run the Front-end Server**:

   In a new terminal, navigate to the `front` directory and start the client:
   ```bash
   cd ../front
   npm start
   ```

3. **Access the Application**:

   Open a browser and go to `http://localhost:3000` to access the front-end interface.

---
