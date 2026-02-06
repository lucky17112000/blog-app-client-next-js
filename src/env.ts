import { createEnv } from "@t3-oss/env-nextjs"
import * as z from "zod"

export const env = createEnv({
    server: {
        BACKEND_API: z.url(),
        FRONTEND_URL: z.url(),
        API_URL:z.url(),
        AUTH_URL:z.url(),

    },
    // client: {},
    runtimeEnv: {

         BACKEND_API: process.env.BACKEND_API || "http://localhost:5000",
        FRONTEND_URL: process.env.FRONTEND_URL || "http://localhost:3000",

        API_URL:process.env.API_URL || "http://localhost:5000",
        AUTH_URL:process.env.AUTH_URL || "http://localhost:5000/api/auth",
    },
})