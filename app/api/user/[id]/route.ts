import { db } from "@/db";
import { usersTable } from "@/db/schema";
import { eq } from "drizzle-orm";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const { id } = (await params);

  if (id.match(/[^0-9]/g)) return new Response('id must be number', { status: 400 })

  try {
    const data = await db.select().from(usersTable).where(eq(usersTable.id, Number(id)));

    if (data.length === 0) return new Response('user not found', { status: 404 });

    return Response.json({ message: data }, { status: 200 });
  } catch (error) {
    return Response.json({ message: "internal server error" }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  const { id } = (await params);

  if (id.match(/[^0-9]/g)) return new Response('id must be number', { status: 400 })

  try {
    const existingUser = await db.select().from(usersTable).where(eq(usersTable.id, Number(id)));

    if (existingUser.length === 0) return new Response('user not found', { status: 404 });

    await db.delete(usersTable).where(eq(usersTable.id, Number(id)));
    return Response.json({ message: "success" }, { status: 200 });
  } catch (error) {
    return Response.json({ message: "error" }, { status: 500 });
  }
}