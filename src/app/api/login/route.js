import UserData from "models/userModel";
import { dbConnect } from "utils/dbConnect";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(NextRequest) {
  await dbConnect();
  try {
    const { email, password } = await NextRequest.json();
    console.log(email, password);
    const user = await UserData.findOne({ email });
    console.log(user.password);
    if (!user) {
      console.log("not user");
      return NextResponse.json(
        {
          success: false,
          message: "user does not exist please signup first",
        },
        { status: 500 }
      );
    }
    console.log("validtaing password");
    const validPassword = await bcryptjs.compare(password, user.password);
    console.log("password validated");
    console.log(validPassword);
    if (!validPassword) {
      return NextResponse.json(
        {
          success: false,
          message: "password is wrong",
        },
        { status: 402 }
      );
    }

    const tokenData = {
      id: user._id,
      name: user.name,
      email: user.email,
    };
    console.log(tokenData);
    const token = await jwt.sign(tokenData, process.env.SECRET_KEY, {
      expiresIn: "1h",
    });
    console.log(token);
    const response = NextResponse.json({
      messgae: "login successfull",
      success: true,
    });
    console.log(response);
    response.cookies.set("token", token, {
      httpOnly: true,
    });
    console.log(token);
    return response;
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "error log in",
    });
  }
}
