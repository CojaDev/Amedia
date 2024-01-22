const withSourceMaps = require('@zeit/next-source-maps');

module.exports = withSourceMaps({
  webpack(config, { isServer }) {
    config.module.rules.push({
      test: /\.(glb|gltf)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            outputPath: 'static/models/', // Output path for the files
          },
        },
      ],
    });

    // Additional configuration if needed

    return config;
  },
});
