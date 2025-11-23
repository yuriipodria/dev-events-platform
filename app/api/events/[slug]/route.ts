import connectDB from "@/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";
import Event from "@/database/event.model";
import mongoose from "mongoose";

interface RouteParams {
  params: {
    slug: string;
  };
}

/**
 * GET /api/events/[slug]
 * Fetches a single event by its slug
 */
export async function GET(
  req: NextRequest,
  { params }: RouteParams
): Promise<NextResponse> {
  try {
    // Connect to database
    await connectDB();

    // Extract and validate slug parameter
    const { slug } = await params;

    if (!slug || typeof slug !== "string" || slug.trim().length === 0) {
      return NextResponse.json(
        {
          message: "Invalid slug parameter",
          error: "Slug must be a non-empty string",
        },
        { status: 400 }
      );
    }

    // Sanitize slug to prevent injection attacks
    const sanitizedSlug = slug.trim().toLowerCase();

    // Query event by slug
    const event = await Event.findOne({ slug: sanitizedSlug }).lean();

    // Handle event not found
    if (!event) {
      return NextResponse.json(
        {
          message: "Event not found",
          error: `No event exists with slug: ${sanitizedSlug}`,
        },
        { status: 404 }
      );
    }

    // Return successful response
    return NextResponse.json(
      {
        message: "Event fetched successfully",
        event,
      },
      { status: 200 }
    );
  } catch (error) {
    // Log error for debugging
    console.error("[GET /api/events/[slug]] Error:", error);

    // Handle Mongoose-specific errors
    if (error instanceof mongoose.Error.CastError) {
      return NextResponse.json(
        {
          message: "Invalid slug format",
          error: "The provided slug format is invalid",
        },
        { status: 400 }
      );
    }

    // Handle generic errors
    return NextResponse.json(
      {
        message: "Failed to fetch event",
        error: error instanceof Error ? error.message : "Unknown error occurred",
      },
      { status: 500 }
    );
  }
}