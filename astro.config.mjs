import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://shibapapa.com',
  // /work/index.html のようにディレクトリ形式で出力し、既存URLを維持する
  build: { format: 'directory' },
  trailingSlash: 'always',
  compressHTML: true,
});
