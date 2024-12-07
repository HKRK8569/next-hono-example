import { Hono } from "hono";
import { handle } from "hono/vercel";
import { app as backend } from "@next-hono-example/backend";

const handleDevOnly = (...args: Parameters<ReturnType<typeof handle>>) => {
  const app = new Hono().basePath("/api").route("/", backend);
  return handle(app)(...args);
};

export const runtime = "nodejs";
export const GET = handleDevOnly;
export const POST = handleDevOnly;
export const PUT = handleDevOnly;
export const PATCH = handleDevOnly;
export const DELETE = handleDevOnly;
