# Employee-Tracker-12

## Description
The Employee Tracker application is a command-line interface (CLI) tool designed to manage a company's employee database. Utilizing Node.js, Inquirer, and PostgreSQL, this application allows users to view, add, update, and delete employees, roles, and departments. It's an efficient way to maintain and access employee records in a structured manner.

## Table of Contents
1. [Description](#description)
2. [Demo](#demo)
3. [Instructions](#instructions)
4. [Required Packages](#required-packages)
5. [Installation](#installation)

## Demo
Here is a video that shows how to interact with the application interface:
![walkthrough of the application interface](./Assets/employee-tracker-demo.mp4)

## Instructions
1. Open your terminal and navigate to the project directory.
2. Start the application by running:
   ```sh
   node index.js
3. Follow the prompts to perform various operations such as viewing, adding, updating, or deleting employees, roles, and departments.

## Required Packages
-Node.js
-Inquirer
-PostgreSQL

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/crob127/Employee-Tracker-12.git
2. Navigate to the project directory:
   ```sh
   cd Employee-Tracker-12
3. Install the required packages:
   ```sh
   npm install
4. Set up the PostgreSQL database by importing the provided schema and seed data. Connect to your PostgreSQL server and run:
   ```sh
   source db/schema.sql
   source db/seeds.sql
5. Update the database configuration in the index.js file with your POstgreSQL user and password.

6. Start the application
   ```sh
   npm start
