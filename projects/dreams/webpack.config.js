const {
  shareAll,
  withModuleFederationPlugin,
} = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({
  name: 'dreams',

  exposes: {
    './Component': './projects/dreams/src/app/app.component.ts',
    './DreamsService': './projects/dreams/src/app/dreams.service.ts',
  },

  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: 'auto',
    }),
  },
});
