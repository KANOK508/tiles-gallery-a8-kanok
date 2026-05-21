import { createAuthClient } from "better-auth/react"

export const authClient = createAuthClient({
    // ✅ Automatically switches between localhost:3000 (local) and Vercel (production)
    baseURL: process.env.NEXT_PUBLIC_APP_URL || "https://tiles-gallery2.vercel.app"
})

// Destructure cleanly
export const { signIn, signUp, useSession, signOut } = authClient;