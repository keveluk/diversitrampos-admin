module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'mysql',
        host: env('DATABASE_HOST', 'ns928.hostgator.com.br'),
        port: env('DATABASE_PORT', 3306),
        database: env('DATABASE_NAME', 'dropsc49_diversitrampos'),
        username: env('DATABASE_USERNAME', 'dropsc49_admin'),
        password: env('DATABASE_PASSWORD', 'Igualdade@2021')
      },
      options: {
        useNullAsDefault: true,
      },
    },
  },
});
