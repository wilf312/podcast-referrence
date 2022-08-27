/**
 * podcast のデータの取得API
 * @param hashEncoded 
 * @returns 
 */
export const getPodcast = async (hashEncoded: string) => {
  const url = `https://action-ten.vercel.app/${hashEncoded}.json`;
  const res = await fetch(url, {
    method: "GET",
  }).then((res) => {
    return res.json();
  });
  console.warn({ res });
  return res;
};
