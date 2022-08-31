import { createEventHandler } from "@remix-run/cloudflare-workers";
import * as build from "@remix-run/dev/server-build";

addEventListener("fetch", (event) => {
  console.log(event.request.headers.get("user-agent"));
  createEventHandler({ build, mode: process.env.NODE_ENV })(event);
});
