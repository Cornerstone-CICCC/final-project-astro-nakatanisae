# Reflection

- Netlify link: https://shimmering-custard-bcf7b0.netlify.app/

- Used `[slug].astro` and `getStaticPaths()` for the detail pages.


- **Why this approach:**
  It automatically generates pages for each product from a single template. By adding a product to `products.json` and rebuilding, there is no need to manually add new `.astro` files.


- **Advantages compared to manual static pages or category routes:**
  When changes are needed, you only need to update a specific component rather than modifying multiple files, which saves time and effort.


- **Disadvantages:**
  Pages cannot be created without a `slug`, and this approach is not suitable for pages that display multiple products together.