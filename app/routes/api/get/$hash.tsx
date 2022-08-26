/**
 * API
 */
import type { LoaderFunction } from "@remix-run/cloudflare";
import { json } from "@remix-run/cloudflare";

import { getEncodedUrl } from "~/config";

const getJSON = async (hashEncoded: string) => {
  const url = `https://action-ten.vercel.app/${hashEncoded}.json`;
  const res = await fetch(url, {
    method: "GET",
    mode: "cors",
  }).then((res) => {
    return res.json();
  });
  return res;
};

export const loader: LoaderFunction = async ({ params }) => {
  const a = getEncodedUrl();

  const found = a.find((data) => {
    return data.hash === params.hash;
  });

  if (!found) {
    throw new Response("Content Not Found.", {
      status: 404,
    });
  }
  const res = await getJSON(found?.hashEncoded);

  return json(res);
};
