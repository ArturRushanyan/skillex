const fs = require("fs");
const path = require("path");
const pool = require("../configs/dbConnection"); // <-- your connection pool file

async function runMigrations() {
    const connection = await pool.getConnection(); // get one connection from the pool

    try {
        const migrationDir = path.join(__dirname, '..', "migrations");
        const files = fs.readdirSync(migrationDir).sort(); // sort by number

        for (const file of files) {
            const sql = fs.readFileSync(path.join(migrationDir, file), "utf-8");
            console.log(`Running migration: ${file}`);
            await connection.query(sql);
        }

        console.log("All migrations applied successfully!");
    } catch (err) {
        console.error("Migration failed:", err);

    } finally {
        connection.release(); // release the connection back to the pool
        process.exit(0)
    }
}

runMigrations();