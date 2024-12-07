import { client } from "./_lib/client";

export default async function Home() {
  const data = await client.hono.$get();
  const json = await data.json();

  return <p>{json.comment}</p>;
}
