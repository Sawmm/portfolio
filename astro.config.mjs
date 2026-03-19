// @ts-check
import { defineConfig, fontProviders } from 'astro/config';


import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Update these values with your GitHub info
  site: 'https://sawmm.github.io',
  base: '/portfolio',
  fonts: [{
    provider: fontProviders.local(),
    name: "Source Code Pro",
    cssVariable: "--source-code-pro",
    options: {
      variants: [{
        src: ['./public/fonts/SourceCodePro-Medium.ttf'],
        weight: 500,
        style: 'normal'
      }]
    }
  },
  {
    provider: fontProviders.local(),
    name: "Neue Regrade Variable",
    cssVariable: "--neue-regrade",
    options: {
      variants: [{
        src: ['./public/fonts/Neue Regrade Variable.ttf'],
        weight: 500,
        style: 'normal'
      }]
    }
  }],
  vite: {
    plugins: [tailwindcss()]
  }
});