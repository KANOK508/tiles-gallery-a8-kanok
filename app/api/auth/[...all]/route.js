import { auth } from "@/lib/auth"; // path to your auth file
import { toNextJsHandler } from "better-auth/next-js";

// Add this crucial line for production stability on Vercel:
export const dynamic = "force-dynamic";

export const { POST, GET } = toNextJsHandler(auth);