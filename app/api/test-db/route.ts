import pool from "@/lib/db";

export async function GET() {
  try {
    // Try getting a connection from the pool
    const connection = await pool.getConnection();
    console.log("✅ Database connected successfully! hi");
    connection.release(); // release connection back to the pool

    return Response.json({
      success: true,
      message: "Database connected successfully!",
    });
  } catch (error) {
    console.error("❌ Database connection failed:", error);
    process.exit(1); // optional: stop the server if DB is down
  }
}
