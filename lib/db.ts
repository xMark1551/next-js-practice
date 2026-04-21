import { Pool, createPool } from "mysql2/promise";
import "dotenv/config";

// Create a pool instead of a single connection
const pool: Pool = createPool({
  // for development
  host: "localhost",
  user: "root",
  password: "",
  database: "mysql-practice-2026",

  // for production
  //   host: process.env.DB_HOST!,
  //   port: Number(process.env.DB_PORT),
  //   user: process.env.DB_USER!,
  //   password: process.env.DB_PASS!,
  //   database: process.env.DB_NAME!,
  //   waitForConnections: true,
  //   connectionLimit: 10,
  //   queueLimit: 0,
});

console.log("✅ MySQL connection pool created");

export default pool;
