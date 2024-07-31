import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function getDataFromToken(request) {
  try {
    const token = request.cookies.get("token")?.value || "";
    const decodedToken = jwt.verify(token, process.env.SECRET_KEY);
    // console.log("from token data", decodedToken);
    return decodedToken;
  } catch (error) {
    throw new Error(error.message);
  }
}
