/* eslint-env node */
import { ImageResponse } from "@vercel/og";
import { docsConfig } from "@docs-config";

export const config = {
  runtime: "edge",
};

const font = fetch(new URL("./Inter-SemiBold.otf", import.meta.url)).then(
  (res) => res.arrayBuffer(),
);

export const alt = "Aptos Docs";

export const size = {
  width: 2400,
  height: 1256,
};

export const contentType = "image/png";

/**
 * For more details on OpenGraph configuration, see
 * @see https://nextjs.org/docs/app/api-reference/file-conventions/metadata/opengraph-image
 */
export default async function (req) {
  const inter = await font;

  const { searchParams } = new URL(req.url);

  // ?title=<title>
  const hasTitle = searchParams.has("title");
  const title = hasTitle
    ? searchParams.get("title")?.slice(0, 100)
    : docsConfig.defaultTitle;

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: 160,
          backgroundColor: "#030303",
          backgroundSize: "100px 100px",
          backgroundPosition: "-30px -10px",
          fontWeight: 600,
          color: "white",
        }}
      >
        <span
          style={{
            position: "absolute",
            bottom: 140,
            left: 160,
            margin: 0,
            fontSize: 60,
            letterSpacing: -1,
            display: "flex",
            flexDirection: "row",
            gap: 24,
          }}
        >
          <svg
            width="64"
            height="65"
            viewBox="0 0 64 65"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M49.5678 22.5137H43.9056C43.2471 22.5137 42.6189 22.2516 42.1808 21.7961L39.8857 19.4017C39.544 19.0455 39.0508 18.8394 38.5356 18.8394C38.0203 18.8394 37.5271 19.0429 37.1855 19.4017L35.2154 21.4577C34.5707 22.1294 33.6449 22.5162 32.6723 22.5162H1.68624C0.804545 24.8394 0.228689 27.2923 0 29.8394H29.253C29.7682 29.8394 30.2586 29.646 30.6141 29.3025L33.3391 26.679C33.678 26.3508 34.1491 26.1651 34.6396 26.1651H34.7525C35.2678 26.1651 35.761 26.3686 36.1026 26.7274L38.3978 29.1218C38.8359 29.5773 39.4613 29.8394 40.1226 29.8394H64C63.7713 27.2923 63.1954 24.8394 62.3137 22.5162H49.5678V22.5137Z"
              fill="white"
            />
            <path
              d="M17.9561 46.8366C18.4622 46.8366 18.944 46.627 19.2931 46.2547L21.9698 43.4112C22.3027 43.0554 22.7655 42.8541 23.2473 42.8541H23.3582C23.8643 42.8541 24.3488 43.0747 24.6844 43.4636L26.9389 46.0588C27.3692 46.5525 27.9836 46.8366 28.6332 46.8366H60.418C61.6089 44.3296 62.4804 41.6378 63 38.8219H32.4926C31.8457 38.8219 31.2287 38.5378 30.7983 38.0441L28.5438 35.4489C28.2082 35.0628 27.7238 34.8394 27.2177 34.8394C26.7115 34.8394 26.2271 35.06 25.8915 35.4489L23.9563 37.6773C23.323 38.4054 22.4137 38.8246 21.4583 38.8246H1C1.51964 41.6433 2.39114 44.3323 3.58199 46.8394H17.9561V46.8366Z"
              fill="white"
            />
            <path
              d="M40.0967 13.8394C40.6083 13.8394 41.0953 13.6272 41.4483 13.2502L44.1542 10.3716C44.4908 10.0114 44.9586 9.80757 45.4457 9.80757H45.5578C46.0695 9.80757 46.5592 10.0309 46.8985 10.4246L49.1776 13.052C49.6127 13.5518 50.2338 13.8394 50.8904 13.8394H57C51.1804 5.9461 41.9244 0.839355 31.5 0.839355C21.0757 0.839355 11.8196 5.9461 6 13.8394H40.0994H40.0967Z"
              fill="white"
            />
            <path
              d="M27.7966 54.7633H19.375C18.7159 54.7633 18.0872 54.4834 17.6487 53.997L15.3517 51.4399C15.0097 51.0595 14.5161 50.8394 14.0005 50.8394C13.4848 50.8394 12.9912 51.0567 12.6493 51.4399L10.6776 53.6356C10.0323 54.3529 9.1058 54.766 8.13237 54.766H8C13.8681 60.9616 22.2208 64.8394 31.5 64.8394C40.7792 64.8394 49.1319 60.9616 55 54.766H27.7966V54.7633Z"
              fill="white"
            />
          </svg>
          Developers
        </span>
        <h1
          style={{
            fontSize: 164,
            margin: "0 0 40px -2px",
            lineHeight: 1.1,
            textShadow: "0 2px 30px #000",
            letterSpacing: -4,
            backgroundImage: "linear-gradient(90deg, #fff 40%, #aaa)",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          {title}
        </h1>
      </div>
    ),
    {
      width: 2400,
      height: 1256,
      fonts: [
        {
          name: "inter",
          data: inter,
          style: "normal",
        },
      ],
    },
  );
}
