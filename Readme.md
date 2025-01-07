# Email Forwarding Application

This application is designed for forwarding emails from one Gmail account to another using IMAP and SMTP protocols, and it stores related data in MongoDB.

## Configuration

Before starting the application, make sure to set up the following environment variables in your `.env` file:

- **EMAIL**: The email address you want to fetch emails from (e.g., `x@gmail.com`).
- **PASSWORD**: The app password for the Gmail account. (Ensure you've enabled "Less secure apps" or used App Passwords for Gmail).
- **FORWARD_TO**: The email address to forward the emails to (e.g., `a@gmail.com`).
- **IMAP_HOST**: The host for Gmail's IMAP service. Default value is `imap.gmail.com`.
- **SMTP_HOST**: The host for Gmail's SMTP service. Default value is `smtp.gmail.com`.
- **SMTP_PORT**: The port for the SMTP service. Default value is `000`.
- **MONGO_URI**: The MongoDB connection URI for storing related data..

Example of the `.env` file:



## Prerequisites

1. **Node.js**: Ensure you have Node.js installed. If not, download and install it from [here](https://nodejs.org/).
2. **MongoDB**: Make sure your MongoDB is up and running, or use a cloud-based MongoDB instance (e.g., MongoDB Atlas).

## Installation

1. Clone the repository to your local machine.

   ```bash
   git clone <repository-url>


## Navigate into the project directory.

cd <project-directory>


## Install the required dependencies.

npm install


## Run Command 
npm start



### Instructions for use:

1. Replace the placeholder `<repository-url>` and `<project-directory>` with your actual repository URL and project folder name.
2. Update the MongoDB URI `<dbname>` in the `.env` file with your actual database name.
3. If you're running a local MongoDB, ensure it's running on the default port or specify your custom settings in `MONGO_URI`.

This README will guide users to set up, configure, and run the application.


