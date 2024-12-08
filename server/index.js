import express from "express";
import { adminRouter } from "./Routes/AdminRoute.js";
import cors from 'cors';
import { EmployeeRouter } from "./Routes/EmployeeRoute.js";

const app = express();

// Enable CORS with correct origin and credentials
app.use(cors({
    origin: "http://localhost:5173",  // No trailing slash
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true  // Allow cookies to be sent across domains
}));

// Body parser middleware to parse incoming JSON requests
app.use(express.json()); 

// Correct route without extra space
app.use('/auth', adminRouter);
app.use('/employee', EmployeeRouter)
app.use(express.static('Public'))

// Start the server
app.listen(3000, () => {
    console.log("Server is running at http://localhost:3000");
});
