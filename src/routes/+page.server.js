import { db } from '@vercel/postgres';

const client = await db.connect();

/** @type {import('./$types').PageLoad} */
export async function load({url}) {
    await client.sql`CREATE TABLE IF NOT EXISTS posts (title TEXT, data TEXT, date REAL)`;

    const pageSize = 20;
    let pageNumber = url.searchParams.get('page') || 1;
    pageNumber = Math.max(Math.floor(pageNumber),1); 
     
    const offset = (pageNumber - 1) * pageSize;
     
    const { rows, fields } =
        await client.sql`SELECT * FROM posts ORDER BY date DESC LIMIT ${pageSize} OFFSET ${offset};`;

    return {
        rows,
        pages: pageNumber
    };
}

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({request}) => {
		const data = await request.formData();
        let name = data.get('name') || '';
        let save = data.get('save') || '';
        if (name.length < 1 || save.length < 1 ) return;

        const { rows, fields } =
            await client.sql`SELECT * FROM posts WHERE title = ${name}`;

        if (rows && rows.length > 0 ) return;

        await client.sql`INSERT INTO posts (title, data, date) VALUES (${name}, ${save}, ${+new Date()})`;
	}
};