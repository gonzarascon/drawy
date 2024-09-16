// tsup.config.ts
import { defineConfig } from "tsup";

export default defineConfig({
	entry: ["src/index.ts"],
	splitting: false,
	sourcemap: true,
	clean: true,
	dts: true,
	format: ["cjs", "esm"],
	external: ["react", "react-dom", "@radix-ui/react-dialog"],
	target: "esnext",
	minify: false,
	banner: { js: '"use client";' },
});
