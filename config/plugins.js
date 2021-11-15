module.exports = ({ env }) => ({
  upload: {
    provider: 'cloudinary',
    providerOptions: {
      cloud_name: env('CLOUDINARY_NAME','diversitrampos'),
      api_key: env('CLOUDINARY_KEY','679526664589862'),
      api_secret: env('CLOUDINARY_SECRET','logfOIKWxPwvLiuwNWsO3bewpNs'),
    },
    actionOptions: {
      upload: {},
      delete: {},
    },
  },
});