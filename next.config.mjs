/** @type {import('next').NextConfig} */
const nextConfig = {
  // Don't try to build pages
  output: undefined,
  // Don't use the default dist directory
  distDir: undefined,
  // Disable page building
  pageExtensions: [],
  images: {
    unoptimized: true,
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  // Disable the default CSS handling
  webpack: (config) => {
    // Remove the default CSS handling
    config.module.rules = config.module.rules.filter(
      (rule) => !rule.test?.test?.('.css')
    );
    
    // Add our own CSS handling
    config.module.rules.push({
      test: /\.css$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            importLoaders: 1,
            modules: {
              auto: true,
              localIdentName: '[name]__[local]--[hash:base64:5]',
            },
          },
        },
      ],
    });

    // Set library target
    config.output = {
      ...config.output,
      library: {
        type: 'commonjs2',
      },
    };

    return config;
  },
  // Disable the default CSS handling
  experimental: {
    disableOptimizedLoading: true,
  },
};

export default nextConfig; 