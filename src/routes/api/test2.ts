import { setResponseHeader } from "@tanstack/react-start/server";
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/api/test2')({
    server: {
    handlers: {
      GET: async (req) => {
        // setResponseHeader("Authorization", "Bearer test");
        return Response.redirect("https://tanstack.com");
      },
    },
  },
})
