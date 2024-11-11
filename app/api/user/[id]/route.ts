import { db } from "@/db";
import { usersTable } from "@/db/schema";
import { eq } from "drizzle-orm";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const { id } = (await params);

  if (id.match(/[^0-9]/g)) return new Response('id must be number!', { status: 400 })

  try {
    const data = await db.select().from(usersTable).where(eq(usersTable.id, Number(id)));

    if (data.length === 0) return new Response('user not found', { status: 404 });

    return Response.json({ message: data }, { status: 200 });
  } catch (error: any) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  const { id } = (await params);
  const body = await req.json();

  if (id.match(/[^0-9]/g)) return new Response('id must be number!', { status: 400 })

  try {
    const existingUser = await db.select().from(usersTable).where(eq(usersTable.id, Number(id)));

    if (existingUser.length <= 0) return Response.json({ message: 'user not found' }, { status: 404 });

    await db.update(usersTable).set(body).where(eq(usersTable.id, Number(id)));
    return Response.json({ message: "user has been updated!" }, { status: 200 });
  } catch (error: any) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  const { id } = (await params);

  if (id.match(/[^0-9]/g)) return new Response('id must be number!', { status: 400 })

  try {
    const existingUser = await db.select().from(usersTable).where(eq(usersTable.id, Number(id)));

    if (existingUser.length === 0) return new Response('user not found', { status: 404 });

    await db.delete(usersTable).where(eq(usersTable.id, Number(id)));
    return Response.json({ message: "user has been deleted!" }, { status: 200 });
  } catch (error: any) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}