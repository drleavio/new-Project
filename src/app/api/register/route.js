import { dbConnect } from "utils/dbConnect";

import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import UserData from "./../../../../models/userModel";

export async function POST(NextRequest) {
  // return { message: "inside post" };

  try {
    await dbConnect();
    const { name, email, password } = await NextRequest.json();
    console.log(name, email, password);
    const userExist = await UserData.findOne({ email });
    console.log(userExist);
    if (userExist) {
      return NextResponse.json(
        {
          success: false,
          message: "user already exist",
        },
        { status: 500 }
      );
    }
    const hashedPassword = await bcryptjs.hash(password, 10);
    const response = await UserData.create({
      name,
      email,
      password: hashedPassword,
    });
    console.log(response);
    return NextResponse.json(
      {
        success: true,
        message: "signup successfully",
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({
      message: "error in signup",
    });
  }
}
