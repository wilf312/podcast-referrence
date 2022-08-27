import type { EntryContext } from "@remix-run/cloudflare";
import { RemixServer } from "@remix-run/react";
import { renderToString } from "react-dom/server";

import * as Sentry from "@sentry/remix";

const sentryDsn =
  "https://130293a154554d69ba1d509419f07d1f@o456979.ingest.sentry.io/5450566";
Sentry.init({
  dsn: sentryDsn,
  tracesSampleRate: 1,
});
export default function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext
) {
  const markup = renderToString(
    <RemixServer context={remixContext} url={request.url} />
  );

  responseHeaders.set("Content-Type", "text/html");

  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders,
  });
}
