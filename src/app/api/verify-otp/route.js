import { dbConnect } from "utils/dbConnect";
import UserData from "models/userModel";
import { NextRequest, NextResponse } from "next/server";

export async function POST(NextRequest) {
  try {
    await dbConnect();
    const { email, otp } = NextRequest.json();
    console.log(email.otp);
    const userExist = await UserData.findOne({ email });
    console.log(userExist);
    if (userExist) {
      return NextResponse.json({
        success: false,
        message: "user already exist",
      });
    }
    console.log("otp is not matching");
    if (userExist.otp != otp) {
      return NextResponse.json({
        success: false,
        message: "otp does not match",
      });
    }
    console.log("otp verified");
    return NextResponse.json({
      success: true,
      message: "otp verified successfully",
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "errot verifying otp",
    });
  }
}
