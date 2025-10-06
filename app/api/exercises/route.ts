import { NextRequest, NextResponse } from "next/server";
import data from "@/app/database/db.json";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const name = searchParams.get("name");

  const result = data.exercises.filter(
    (exercise) =>
      exercise.bodyPart.toLowerCase() === name ||
      exercise.target.toLowerCase() === name
  );

  return NextResponse.json(result);
}
