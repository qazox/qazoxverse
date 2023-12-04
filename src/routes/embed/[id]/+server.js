import { db } from '@vercel/postgres';

const client = await db.connect();


/** @type {import('./$types').RequestHandler} */

export async function GET({ params }) {
    const { rows, fields } =
        await client.sql`SELECT * FROM posts WHERE title = ${params.id}`;

    console.log(rows)

    return new Response(rows ? rows[0].data : '{}');
};