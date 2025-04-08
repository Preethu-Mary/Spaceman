import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/Spaceman",
  test: {
    environment: "jsdom", // This ensures jsdom is used
  },
});
