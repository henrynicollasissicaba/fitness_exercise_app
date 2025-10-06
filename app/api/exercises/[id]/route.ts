import { NextResponse } from "next/server";
import data from "@/app/database/db.json";

export async function GET(
  _request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  const result = data.exercises.find((exercise) => exercise.id === Number(id));

  return NextResponse.json(result);
}
