import { db } from "@/db";
import { usersTable } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function GET() {
  const data = await db.select().from(usersTable);

  if (data.length === 0) return Response.json({ message: "user is empty" }, { status: 404 });

  return Response.json(data);
}

export async function POST(request: Request) {
  const body = await request.json();

  try {
    const existingUser = await db.select().from(usersTable).where(eq(usersTable.email, body.email));

    if (existingUser.length > 0) {
      return Response.json({ message: "user already registered" }, { status: 409 });
    } else {
      await db.insert(usersTable).values(body);
      return Response.json({ message: "success" }, { status: 200 });
    }
  } catch {
    return Response.json({ message: "internal server error" }, { status: 500 });
  }
}