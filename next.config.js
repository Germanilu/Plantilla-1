/** @type {import('next').NextConfig} */

const path = require('path')
const nextConfig = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
      },
}

const withNextIntl = require('next-intl/plugin')(
    './i18n.js'
);

module.exports = withNextIntl(nextConfig)

