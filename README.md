# Employee Management System

## Overview

This project is a comprehensive **Employee Management System** developed with a **React** front end and **Node.js** backend. It uses **MySQL** for database management, **Axios** for seamless data transmission, and implements a custom **JWT tokenizer** for secure user authentication. Hash functions are integrated to encrypt employee data, and a dedicated router ensures smooth navigation within the application. This system is fully functional, showcasing expertise in full-stack development, database management, and secure data handling.

## Features

- **Employee Management**: Add, edit, view, and delete employee information with ease.
- **User Authentication**: Secure login system with JWT tokens and encrypted passwords.
- **Seamless Data Transmission**: Axios is used for efficient communication between the front end and backend.
- **Smooth Navigation**: Custom router ensures user-friendly navigation across different components.
- **Database Management**: Employee data is securely stored and managed in a MySQL database.
- **Responsive Design**: The system is built to be responsive and user-friendly across devices.

## Technologies Used

### Frontend
- **React**: JavaScript library for building user interfaces.
- **Axios**: Promise-based HTTP client for the browser and Node.js.

### Backend
- **Node.js**: JavaScript runtime built on Chrome's V8 JavaScript engine.
- **Express.js**: Web framework for Node.js.
- **MySQL**: Relational database management system.

### Security
- **JWT (JSON Web Token)**: Secure user authentication.
- **Bcrypt**: Hash functions for encrypting employee data.

## Project Structure

### Frontend Components

- **style**: Handles all the CSS styles for the application.
- **addCategory**: Component for adding new employee categories.
- **addEmployee**: Component for adding new employees.
- **category**: Component to manage and display employee categories.
- **DashBoard**: Main dashboard for navigating the system.
- **editEmployee**: Component to edit existing employee details.
- **EmployeeDetails**: Displays detailed information about an employee.
- **employeeLogin**: Login interface for employees.
- **Home**: Home page of the application.
- **login**: Login interface for admin users.
- **privateRoute**: Protects routes that require authentication.
- **profileStart**: Initial profile setup component.

### Backend Structure

- **routes**
  - **AdminRoute**: Handles admin-related routes and operations.
  - **employeeRoute**: Handles employee-related routes and operations.
- **db**: Contains database connection and utility functions.
- **util**: Includes utility functions like the custom JWT tokenizer and password hashing.
