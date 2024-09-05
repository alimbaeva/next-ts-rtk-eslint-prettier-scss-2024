/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // отключает оптимизацию изображений, так как GitHub Pages не поддерживает серверную обработку изображений
  },
  basePath: '/REPO_NAME', // замени REPO_NAME на название твоего репозитория
  assetPrefix: '/REPO_NAME/',
};

export default nextConfig;
