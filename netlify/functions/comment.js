const http = require('http');
const Waline = require('@waline/vercel');
const serverless = require('serverless-http');
const Bark = require('waline-notification-bark');

const app = Waline({
  plugins: [Bark],
  env: 'netlify',
  async postSave(comment) {
    // do what ever you want after save comment
  },
});

module.exports.handler = serverless(http.createServer(app));
