import { Hono } from "hono";

const app = new Hono()
  .get("/", (c) => {
    return c.text("Hello Hono!");
  })
  .get("/hono", (c) => {
    return c.json({
      comment: "hello hono",
    });
  });

export type AppType = typeof app;
export { app };
