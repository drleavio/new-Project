import { dbConnect } from "utils/dbConnect";
import { NextResponse } from "next/server";
import { getDataFromToken } from "@/helpers/getDataFromToken";
import UserData from "models/userModel";

export async function GET(request) {
  await dbConnect();
  try {
    const user = await getDataFromToken(request);
    // console.log(userId);
    // const user = UserData.findOne({ _id: userId }).select("-password");
    // console.log("from data eoutr", user);
    // console.log("getting data from data route", user.data.name);
    return NextResponse.json({
      success: true,
      message: "User found",
      data: user,
    });
  } catch (error) {
    return NextResponse.json({
      message: error.message,
    });
  }
}
