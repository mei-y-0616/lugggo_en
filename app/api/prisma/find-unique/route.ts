import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: NextRequest) {
  try {
    const { where } = await request.json();

    const counters = await prisma.counter.findUnique({
      where: where,
    });

    return NextResponse.json({
      success: true,
      message: "AI API request successful",
      res: counters,
    });
  } catch (e) {
    return NextResponse.json({
      success: false,
      message: "AI API request failed",
      res: "An error occurred. Please try again.",
    });
  }
}
