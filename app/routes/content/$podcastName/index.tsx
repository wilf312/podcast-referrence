import { redirect } from "@remix-run/cloudflare";
import type { LoaderFunction } from "@remix-run/cloudflare";
import { getPodcast } from "~/api";

export const loader: LoaderFunction = async ({ params }) => {
  const podcast: any = await getPodcast(params.podcastName || "");

  if (!podcast || !podcast?.item[0]) {
    return new Response(`ページが見つかりません`, { status: 404 });
  }

  const newestEpisode = podcast.item[0];
  return redirect(
    `/content/${params.podcastName}/${encodeURIComponent(
      newestEpisode.guid["#text"]
    )}`
  );
};
