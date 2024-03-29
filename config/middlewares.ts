export default [
  "strapi::errors",
  "strapi::cors",
  "strapi::poweredBy",
  "strapi::logger",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        directives: {
          "img-src": [
            "'self'",
            "data:",
            "blob:",
            "https://market-assets.strapi.io",
            "https://dl.airtable.com",
            "https://cdn.shopify.com",
            "https://*.strapiapp.com",
            // "https://*.digitaloceanspaces.com",
          ],
        },
      },
    },
  },
];
