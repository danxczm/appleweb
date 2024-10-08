/** @type {import('next').NextConfig} */

import withVideos from 'next-videos';

const nextConfig = {
  reactStrictMode: true,
  webpack: config => {
    config.module.rules.push({
      test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)$/i,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]',
          },
        },
      ],
    });

    return config;
  },
};

// module.export = nextConfig;

export default withVideos();
