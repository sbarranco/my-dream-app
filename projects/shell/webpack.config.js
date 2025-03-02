const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'shell',

  remotes: {
    auth: 'auth@http://localhost:4201/remoteEntry.js',
    dreams: 'dreams@http://localhost:4202/remoteEntry.js'
  },

  exposes: {
    './Component': './projects/shell/src/app/app.component.ts',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});
