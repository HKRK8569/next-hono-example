import { hc } from "hono/client";
import type { AppType } from "@next-hono-example/backend";

const apiUrl = "http://localhost:3000/api";

export const client = hc<AppType>(apiUrl);
