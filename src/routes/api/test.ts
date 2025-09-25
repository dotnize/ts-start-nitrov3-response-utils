import { createFileRoute } from "@tanstack/react-router";
import { setResponseHeader } from "@tanstack/react-start/server";

export const Route = createFileRoute("/api/test")({
  server: {
    handlers: {
      GET: async (req) => {
        setResponseHeader("Location", "https://tanstack.com");
        return new Response(null, { status: 302 });
      },
    },
  },
});
