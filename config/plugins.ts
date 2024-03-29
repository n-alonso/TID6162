export default ({ env }) => ({
  // graphql: {
  //   config: {
  //     endpoint: "/graphql",
  //     shadowCRUD: true,
  //     playgroundAlways: true,
  //     depthLimit: 15,
  //     amountLimit: 100,
  //     apolloServer: {
  //       tracing: false,
  //     },
  //   },
  // },
  "shopify-fields": {
    enabled: true,
    config: {
      apiVersion: "2022-07", // Or one of Shopify's supported API versions
      accessToken: process.env.SHOPIFY_ACCESS_TOKEN, // The environment variable containing your private app's access token
      shopName: process.env.SHOPIFY_STORE_DOMAIN, // The environment variable containing your myshopify.com domain
    },
  },
  upload: {
    config: {
      breakpoints: {
        xxlarge: 1920,
        xlarge: 1440,
        large: 1280,
        medium: 1024,
        small: 768,
        xsmall: 376,
      },
    },
  },
});
