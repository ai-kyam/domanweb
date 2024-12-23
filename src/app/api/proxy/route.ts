import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const keyword = request.nextUrl.searchParams.get("keyword");
  const tlds = request.nextUrl.searchParams.get("tlds")?.split(",");

  const authUserId = process.env.AUTH_USERID;
  const apiKey = process.env.API_KEY;

  if (!keyword) {
    return NextResponse.json(
      { error: "Keyword is required" },
      { status: 400 }
    );
  }

  if (!authUserId || !apiKey) {
    return NextResponse.json(
      { error: "Missing API credentials (auth-userid or api-key)" },
      { status: 400 }
    );
  }

  try {
    // Build the TLD parameters for the Domain Availability API call
    const tldParams = tlds?.map((tld) => `tlds=${encodeURIComponent(tld)}`).join("&") || "";

    // Construct the external API URL
    const apiUrl = `https://domaincheck.httpapi.com/api/domains/available.json?auth-userid=${authUserId}&api-key=${apiKey}&domain-name=${encodeURIComponent(
      keyword
    )}&${tldParams}`;

    console.log("Request URL for external API:", apiUrl);

    // Use Axios to make the API request
    const response = await axios.get(apiUrl, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    // Return the data from the Domain Availability API
    return NextResponse.json({ data: response.data });
 
    
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error:any) {
    
    console.error("Error fetching domain availability:", error.message);
    return NextResponse.json(
      { error: error.message || "An unknown error occurred" },
      { status: 500 }
    );
  }
}
