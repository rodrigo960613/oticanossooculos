// Gera a pasta public/ (é ela que a Vercel publica).
//   npm run build   -> versão otimizada
//   npm run dev     -> recompila ao salvar e abre em http://localhost:8000
const esbuild = require("esbuild");
const fs = require("fs");

const dev = process.argv.includes("--dev");
const OUT = "public";

fs.rmSync(OUT, { recursive: true, force: true });
fs.mkdirSync(OUT, { recursive: true });
fs.cpSync("assets", `${OUT}/assets`, { recursive: true });
fs.copyFileSync("index.html", `${OUT}/index.html`);

const options = {
  entryPoints: ["src/main.jsx"],
  bundle: true,
  minify: !dev,
  sourcemap: dev,
  target: "es2019",
  jsx: "automatic",
  legalComments: "none",
  define: { "process.env.NODE_ENV": JSON.stringify(dev ? "development" : "production") },
  outdir: OUT,
  entryNames: "app",
  logLevel: "info",
};

(async () => {
  if (dev) {
    const ctx = await esbuild.context(options);
    await ctx.watch();
    const { port } = await ctx.serve({ servedir: OUT, port: 8000 });
    console.log(`Abra http://localhost:${port}`);
  } else {
    await esbuild.build(options);
  }
})();
