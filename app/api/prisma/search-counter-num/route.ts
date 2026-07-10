import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: NextRequest) {
  try {
    const { where } = await request.json();

    // 件数取得
    const count = await prisma.counter.count({
      where:where
    });

    return NextResponse.json({
      success: true,
      message: "AI API request successful",
      count: count,
    });
  } catch (e) {
    return NextResponse.json({
      success: false,
      message: "AI API request failed",
      res: "An error occurred. Please try again.",
    });
  }
}
