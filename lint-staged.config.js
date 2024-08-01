// should probably avoid this in favor of nx affected
module.exports = {
  '*.{css,scss,less,sass}': 'stylelint --allow-empty-input ',

  // already in lint affected
  '*.{ts,tsx,js,jsx,svelte,astro,cjs,mjs,cts,mts,vue}': 'eslint',

  '*.{yml,md,js,ts,tsx,svelte,astro,cjs,mjs,cts,mts,jsx,json,json5,jsonc,css,scss,less,sass,html,htm,mdx,mdown,markdown}':
    'prettier',

  '*.{html}': 'html-validate && htmlhint',
};
