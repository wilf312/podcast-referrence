import { RemixBrowser } from "@remix-run/react";
import { hydrate } from "react-dom";
import * as Sentry from "@sentry/remix";
import { useEffect } from "react";
import { useLocation, useMatches } from "@remix-run/react";

const sentryDsn =
  "https://130293a154554d69ba1d509419f07d1f@o456979.ingest.sentry.io/5450566";
Sentry.init({
  dsn: sentryDsn,
  tracesSampleRate: 1,
  integrations: [
    new Sentry.BrowserTracing({
      routingInstrumentation: Sentry.remixRouterInstrumentation(
        useEffect,
        useLocation,
        useMatches
      ),
    }),
  ],
});

hydrate(<RemixBrowser />, document);
