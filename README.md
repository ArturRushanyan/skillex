# Combination Generator API

## Overview
This project implements a simple **Node.js + MySQL API** that:
- Accepts a list of item counts and a combination length.
- Generates all valid combinations (items with the same prefix cannot be combined).
- Stores items, combinations, and API responses in the database.
- Uses raw SQL queries (no ORMs).
- Handles database operations with **transactions**.
- Includes a **migration runner** that applies SQL migrations in order and tracks which have been applied.

### Combination Generator

### 1. `generateItems(inputArray)`
Generates the base list of items, where each item is represented by a capital letter (`A`, `B`, `C`, …) followed by the index `1`.

- **Example:**
  ```js
  generateItems([1,2,1]);
  // Output: [ 'A1', 'B1', 'C1' ]
  ```

### 2. `generateUniqueCombinations(items, combinationLength)`

Generates all unique combinations of the given items with the specified length.
- Returns (Array of arrays),each inner array represents a unique combination of items.
   ```js
   generateUniqueCombinations(['A1','B1','C1'], 2);
   // Output:
   [
     [ 'A1', 'B1' ],
     [ 'A1', 'C1' ],
     [ 'B1', 'C1' ]
   ]
   ```

### 3. `expandCombinations(combinations, counts)`

Expands the base combinations by adding variations of items that have multiple versions.
For example, if `B` has a count of 2, will be generated new combination where `B1` will be replaced with `B2`.

- Returns (Array of arrays). A list of expanded combinations, including variations for letters with multiple indices.

    ```js
    const base = [ ['A1','B1'], ['A1','C1'], ['B1','C1'] ];
    const counts = [1,2,1];

    expandCombinations(base, counts);
    // Output:
    [
      [ 'A1', 'B2' ],
      [ 'B2', 'C1' ]
    ]
   ```

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