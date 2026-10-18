// GitHub용 site/index.html에 앱인토스 SDK 브리지를 끼워 dist/index.html 생성
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { execSync } from "node:child_process";
execSync("npx esbuild src/bridge.js --bundle --minify --format=iife --target=es2019 --outfile=src/bridge.min.js", { stdio: "inherit" });
const html = readFileSync("../index.html", "utf8");
const bridge = readFileSync("src/bridge.min.js", "utf8").replace(/<\/script/gi, "<\\/script");
const i = html.indexOf("<body>") + "<body>".length;
if (i < 6) throw new Error("no <body>");
mkdirSync("dist", { recursive: true });
writeFileSync("dist/index.html", html.slice(0, i) + "\n<script>" + bridge + "</script>\n" + html.slice(i));
console.log("dist/index.html written");
