import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();

  const { token } = body;

  const secretKey = process.env.RECAPTCHA_SECRET_KEY!;

  const response = await fetch(
    `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`,
    {
      method: "POST",
    }
  );
  const verification = await response.json();

  if (verification.success && verification.score >= 0.5) {
    return NextResponse.json({
      success: true,
      score: verification.score || 0,
    });
  }

  return NextResponse.json({
    success: false,
    score: verification.score || 0,
    errorCodes: verification["error-codes"],
  });
}
