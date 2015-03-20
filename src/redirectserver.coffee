# redirectserver.coffee
# Copyright 2015 9165584 Canada Corporation <legal@fuzzy.io>
# All rights reserved.

http = require 'http'
https = require 'https'

_ = require 'lodash'

defaults =
  port: 80
  address: "0.0.0.0"
  key: null
  cert: null
  logfile: null
  loglevel: "info"
  redirectTo: "https://localhost"

class RedirectServer

  constructor: (config) ->

    @config = _.defaults config, defaults
    
    redirect = (req, res, next) =>
      url = @config.redirectTo+req.url
      res.writeHead(301, {'Location': url, 'Content-Type': 'text/html'})
      res.end('<a href="'+url+'">'+url+'</a>')

    if @config.key
      options =
        key: @config.key
        cert: @config.cert
      @srv = https.createServer options, redirect
    else
      @srv = http.createServer redirect

  start: (callback) ->
    @srv.once 'error', (err) ->
      callback err
    @srv.once 'listening', () ->
      callback null
    @srv.listen @config.port, @config.address

  stop: (callback) ->
    @srv.once 'close', () ->
      callback null
    @srv.once 'error', (err) ->
      callback err
    @srv.close()

module.exports = RedirectServer
