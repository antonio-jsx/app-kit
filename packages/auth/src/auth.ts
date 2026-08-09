import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { nextCookies } from "better-auth/next-js";
import { db } from "database";

export const auth = betterAuth({
  database: drizzleAdapter(db, { provider: "pg", usePlural: true, camelCase: true }),
  experimental: {
    joins: true,
  },
  baseURL: {
    allowedHosts: ["localhost:*"],
  },
  emailAndPassword: { enabled: true },
  session: {
    expiresIn: 60 * 60 * 24 * 7, // 7 days
    updateAge: 60 * 60 * 24, // 24 hours
    cookieCache: {
      enabled: true,
      maxAge: 5 * 60, // 5 minutes
    },
  },
  rateLimit: {
    enabled: true,
    window: 60, // seconds
    max: 10, // max requests per window per IP
    storage: "memory",
  },
  plugins: [nextCookies()],
});
