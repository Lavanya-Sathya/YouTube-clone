import { defineConfig, loadEnv } from "vite";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    define: {
      __VITE_GOOGLE_API_KEY__: JSON.stringify(env.VITE_GOOGLE_API_KEY),
    },
  };
});
