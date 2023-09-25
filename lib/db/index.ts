import { neon, neonConfig } from '@neondatabase/serverless';
import { drizzle } from "drizzle-orm/neon-http";

neonConfig.fetchConnectionCachje = true;

if(!process.env.NEON_DATABASE) {
    throw new Error('databse url not found');
}

const sql = neon(process.env.NEON_DATABASE);

export const db = drizzle(sql);