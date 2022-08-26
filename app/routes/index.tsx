import { getEncodedUrl } from "~/config";
import { Link } from "@remix-run/react";
export default function Index() {
  const a = getEncodedUrl();

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>hello world</h1>
      {a.map((data) => {
        return (
          <Link to={`/content/${data.hashEncoded}/`} key={data.hashEncoded}>
            <h2>{data.name}</h2>
          </Link>
        );
      })}
    </div>
  );
}
