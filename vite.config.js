import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import zipPack from "vite-plugin-zip-pack";
import basicSsl from "@vitejs/plugin-basic-ssl";
import { terser } from 'rollup-plugin-terser';

export default defineConfig({
  plugins: [react(), zipPack(), basicSsl()],
  build: {
    // Minify and compress production bundle using esbuild
    minify: 'esbuild', 
    rollupOptions: {
      plugins: [
        // Terser for advanced minification (adjust options as needed)
        terser({
          ecma: '2020', // Target latest supported ES version
          compress: {
            drop_console: true, // Remove console logs (production-safe)
            drop_debugger: true, // Remove debugger statements
          },
        }),
      ],
      // Tree-shaking for unused code elimination
      output: {
        manualChunks: (id) => {
          // Consider creating custom chunks for larger libraries
          // eslint-disable-next-line no-useless-escape
          if (/node_modules([\\/][^\/]+(?:[\\/][^\\/]+)*)/.test(id)) {
            const [, packageName] = id.split('/');
            return packageName;
          }
          return 'vendor'; // Chunk for common dependencies
        },
      },
    },
    // Remove sourcemaps for smaller bundle size (consider in dev vs prod)
    sourcemap: false,
  },
});