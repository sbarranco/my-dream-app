const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'auth',

  exposes: {
    './Component': './projects/auth/src/app/app.component.ts',
     './AuthService': './projects/auth/src/app/auth-service/auth.service.ts',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});
