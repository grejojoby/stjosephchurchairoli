import { defineConfig } from "astro/config";
import sentry from "@sentry/astro";

export default defineConfig({
  integrations: [
    sentry({
      dsn: "https://15438d63f56c44933d974d27574d2880@o4507351643389952.ingest.us.sentry.io/4507354965540864",
      sourceMapsUploadOptions: {
        project: "stjosephchurchairoli",
        authToken: process.env.SENTRY_AUTH_TOKEN,
      },
    }),
  ],
});