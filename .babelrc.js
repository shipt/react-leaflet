const targets = {
  node: '12',
  browsers: [
    'last 2 Chrome versions',
    'last 2 Edge versions',
    'last 2 Firefox versions',
    'last 2 iOS versions',
    'last 2 Opera versions',
    'last 2 Safari versions',
    'last 2 Samsung versions',
  ],
}

module.exports = {
  presets: ['@babel/preset-react', '@babel/preset-typescript'],
  env: {
    development: {
      presets: [
        [
          '@babel/preset-env',
          {
            loose: true,
            modules: 'commonjs',
            targets,
          },
        ],
      ],
    },
    rollup: {
      presets: [
        [
          '@babel/preset-env',
          {
            loose: true,
            modules: false,
            targets,
          },
        ],
      ],
    },
    esm: {
      presets: [
        [
          '@babel/preset-env',
          {
            loose: true,
            modules: false,
            targets,
          },
        ],
      ],
    },
  },
}
