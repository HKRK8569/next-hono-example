import { Hono } from "hono";
import { handle } from "hono/vercel";
import { app as backend } from "@next-hono-example/backend";
export const runtime = "edge";

const app = new Hono().basePath("/api").route("/", backend);

app.get("/hello", (c) => {
  return c.json({
    message: "Hello from Hono!",
  });
});

export const GET = handle(app);
