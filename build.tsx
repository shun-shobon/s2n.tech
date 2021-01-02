import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { oneLineTrim } from "common-tags";
import { writeFile, mkdir } from "fs/promises";
import { resolve } from "path";

import App from "~/App";

const build = async () => {
  const output = oneLineTrim`
    <html lang="ja">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <title>SHUN's Portfolio</title>
      </head>
      <body>
        ${renderToStaticMarkup(<App />)}
      </body>
    </html>
  `;

  await mkdir("dist", { recursive: true });
  await writeFile(resolve("dist", "index.html"), output);
};

build().catch(console.error);
