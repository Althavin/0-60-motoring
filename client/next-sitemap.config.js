module.exports = {
  siteUrl: 'https://www.0-60motoring.com',
  generateRobotsTxt: true,
  exclude: [],
  robotsTxtOptions: {
    additionalSitemaps: [],
  },
  additionalPaths: async () => {
    return [
      { loc: '/', changefreq: 'daily', priority: 0.7 },
      { loc: '/blogs', changefreq: 'daily', priority: 0.7 },
      { loc: '/about', changefreq: 'daily', priority: 0.7 },
      { loc: '/enquiries', changefreq: 'daily', priority: 0.7 },
    ];
  },
};