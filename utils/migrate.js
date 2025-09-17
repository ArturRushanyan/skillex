const fs = require("fs");
const path = require("path");
const pool = require("../configs/dbConnection"); // <-- your connection pool file

async function runMigrations() {
    const connection = await pool.getConnection(); // get one connection from the pool

    try {
        await connection.beginTransaction();

        // Ensure migrations table exists
        await connection.query(`
            CREATE TABLE IF NOT EXISTS migrations (
                id INT AUTO_INCREMENT PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                run_on TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
            )
        `);

        // Get the last applied migration
        const [rows] = await connection.query(
            `SELECT name FROM migrations ORDER BY id DESC LIMIT 1`
        );
        const lastApplied = rows.length ? rows[0].name : null;

        // Load migration files
        const migrationDir = path.join(__dirname, "..", "migrations");
        // Sort files
        const files = fs.readdirSync(migrationDir).sort();

        // Run only migrations after the last applied
        let migrationStartPosition = lastApplied
            ? files.findIndex((file) => file === lastApplied) + 1
            : 0;

        for (let i = migrationStartPosition; i < files.length; i++) {
            const file = files[i];
            const sql = fs.readFileSync(path.join(migrationDir, file), "utf-8");
            console.log(`Running migration: ${file}`);
            await connection.query(sql);

            // Record migration in the table
            await connection.query(`INSERT INTO migrations (name) VALUES (?)`, [file]);
        }
        await connection.commit();
    } catch (error) {
        await connection.rollback();
        console.log("Error during migration:", error);
    } finally {
        await connection.release();
        process.exit(0);
    }
}

runMigrations();