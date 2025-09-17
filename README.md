# Combination Generator API

## Overview
This project implements a simple **Node.js + MySQL API** that:
- Accepts a list of item counts and a combination length.
- Generates all valid combinations (items with the same prefix cannot be combined).
- Stores items, combinations, and API responses in the database.
- Uses raw SQL queries (no ORMs).
- Handles database operations with **transactions**.
- Includes a **migration runner** that applies SQL migrations in order and tracks which have been applied.

---

## Tech Stack
- **Node.js** (Express)
- **MySQL** (with mysql2)
- **Raw SQL migrations**
---

## Setup and run locally

1. Clone the repository (`main` branch):

   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. Create a `.env` file and copy the content from `.env.example` and set you environment configurations:

   ```bash
   cp .env.example .env
   ```

3. Install the dependencies

   ```bash
   npm install
   ```

4. To run the server first apply migrations use following command:
   ```bash
   npm run migrate
   ```
   This will apply all `.sql` files in `migrations` directory, and you can track applied migrations in `migrations` table
   

5. To run server in production mode
    ```bash
    npm run prod  
    ```

## Postman Collections

In project root directory you can find <b>Postman</b> API collections.