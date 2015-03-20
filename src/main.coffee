# main.coffee
# Copyright 2014 9165584 Canada Corporation <legal@fuzzy.io>
# All rights reserved.

RedirectServer = require "./redirectserver"

config =
  port: process.env["REDIR_PORT"]
  hostname: process.env["REDIR_HOSTNAME"]
  address: process.env["REDIR_ADDRESS"]
  key: process.env["REDIR_KEY"]
  cert: process.env["REDIR_CERT"]
  logLevel: process.env["REDIR_LOG_LEVEL"]
  redirectTo: process.env["REDIR_REDIRECT_TO"]

server = new RedirectServer(config)

server.start (err) ->
  if err
    console.error(err)
  else
    console.log("Server listening on #{server.config.port} for #{server.config.address or server.config.hostname}")
