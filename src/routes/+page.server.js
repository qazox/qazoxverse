import { db } from '@vercel/postgres';

/** @type {import('./$types').PageLoad} */
export async function load() {
    const client = await db.connect();

    await client.sql`CREATE TABLE IF NOT EXISTS posts (title TEXT, data TEXT, date REAL)`;

    const pageSize = 10;
    const pageNumber = 1; 
     
    const offset = (pageNumber - 1) * pageSize;
     
    const { rows, fields } =
        await client.sql`SELECT * FROM posts ORDER BY date DESC LIMIT ${pageSize} OFFSET ${offset};`;

    return {
        rows
    };
}

/** @type {import('./$types').Actions} */
export const actions = {
	default: async (event) => {
		// TODO log the user in
	}
};