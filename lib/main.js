/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
// main.coffee
// Copyright 2014 9165584 Canada Corporation <legal@fuzzy.ai>
// All rights reserved.

const RedirectServer = require("./redirectserver");

const config = {
  port: process.env["REDIR_PORT"],
  address: process.env["REDIR_ADDRESS"],
  key: process.env["REDIR_KEY"],
  cert: process.env["REDIR_CERT"],
  redirectTo: process.env["REDIR_REDIRECT_TO"]
};

const server = new RedirectServer(config);

server.start(function(err) {
  if (err) {
    return console.error(err);
  } else {
    return console.log(`Server listening on ${server.config.port} for ${server.config.address || server.config.hostname}`);
  }
});
