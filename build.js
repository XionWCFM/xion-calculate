import esbuild from "esbuild";
import { nodeExternalsPlugin } from "esbuild-node-externals";
// 공통으로 사용할 옵션들
// https://esbuild.github.io/api/#build 에서 다양한 옵션들을 확인할 수 있다.
const baseConfig = {
  entryPoints: ["./src/index.ts"],
  outfile: "dist/index.js",
  bundle: true,
  minify: true,
  treeShaking: true,
  platform: "node",
  format: "cjs",
  target: "node14",
  plugins: [nodeExternalsPlugin()],
};
Promise.all([
  // 한 번은 cjs
  esbuild.build({
    ...baseConfig,
    format: "cjs",
    outExtension: {
      ".js": ".cjs",
    },
  }),
  // 한 번은 esm
  esbuild.build({
    ...baseConfig,
    format: "esm",
  }),
]).catch(() => {
  console.log("Build failed");
  process.exit(1);
});
