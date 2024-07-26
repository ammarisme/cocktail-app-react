const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: true,
  assetPrefix: isProd ? '/cocktail-app-react/' : '',
  basePath: isProd ? '/cocktail-app-react' : '',
  output: 'export',

};

export default nextConfig;