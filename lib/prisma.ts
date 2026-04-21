import "dotenv/config";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import { PrismaClient } from "../generated/prisma/client";
const adapter = new PrismaMariaDb({
  host: "localhost",
  user: "root",
  password: "",
  database: "mysql-practice-2026",
  connectionLimit: 5,
});
const prisma = new PrismaClient({ adapter });
export { prisma };
