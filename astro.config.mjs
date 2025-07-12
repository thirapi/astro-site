// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwinds from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
    integrations: [react(), tailwinds()]
});
