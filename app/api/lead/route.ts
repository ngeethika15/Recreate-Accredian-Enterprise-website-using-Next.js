import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, phone } = body;

    if (!name || !email || !company) {
      return NextResponse.json(
        { error: "Missing required fields (Name, Email, Company)" },
        { status: 400 }
      );
    }

    // Mock storage or integration
    console.log("New Enterprise Lead Received:", { name, email, company, phone, date: new Date().toISOString() });

    return NextResponse.json(
      { message: "Lead submitted successfully!", lead: { name, email, company } },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}