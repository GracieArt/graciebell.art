module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: 'https://api.graciebell.art',
  app: {
    keys: ['myKeyA', 'myKeyB']
  },
});