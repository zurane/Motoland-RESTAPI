// lib/prisma.js

import 'dotenv/config'; 

import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';

// Create PostgreSQL connection pool
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// Create Prisma adapter (Prisma 7 requirement)
const adapter = new PrismaPg(pool);

// Create Prisma client instance
const prisma = new PrismaClient({ adapter });

export default prisma;