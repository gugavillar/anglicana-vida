const url = process.env.NEXT_PUBLIC_API.split('/api')

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: url[0] ?? 'http://localhost:3000',
  generateRobotsTxt: true,
}
