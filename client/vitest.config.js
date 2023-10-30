// vitest.config.ts
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    coverage: {
      reporter: ["text", "html"],
    },
    environment: "happy-dom",
  },
  testPath: "__tests__",
  testFramework: "vitest",
  browser: "jsdom",
  plugins: ["@vitest/plugin-vue"],
});
