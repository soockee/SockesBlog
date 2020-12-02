module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
  title: 'Sockes Blockgedöns', // Navigation and Site Title
  titleAlt: 'Sockes Blockgedöns', // Title for JSONLD
  description: 'Sockes Blockgedöns',
  url: 'https://not-so-dark.net', // Domain of your site. No trailing slash!
  siteUrl: 'https://not-so-dark.net', // url + pathPrefix
  siteLanguage: 'de', // Language Tag on <html> element
  logo: '/static/logo/logo.png', // Used for SEO
  banner: '/static/logo/banner.png',
  // JSONLD / Manifest
  favicon: 'static/logo/favicon.png', // Used for manifest favicon generation
  favicon144: 'static/logo/favicon_144x144.png', // Used for manifest favicon generation+
  favicon144Type: `image/png`,
  favicon144Size: '144x144', // Used for manifest favicon generation
  favicon512: 'static/logo/favicon_512x512.png', // Used for manifest favicon generation
  favicon512Size: '512x512', // Used for manifest favicon generation
  favicon512Type: `image/png`,
  shortName: 'Stocki', // shortname for manifest. MUST be shorter than 12 characters
  author: 'Simon', // Author for schemaORGJSONLD
  themeColor: '#258f7d',
  backgroundColor: '#2ab09a',
  twitter: '', // Twitter Username
};
