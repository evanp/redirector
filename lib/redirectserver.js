// redirectserver.js
// Copyright 2015 9165584 Canada Corporation <legal@fuzzy.ai>
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

const http = require('http')
const https = require('https')

const _ = require('lodash')

const defaults = {
  port: 80,
  address: '0.0.0.0',
  key: null,
  cert: null,
  redirectTo: 'https://fuzzy.ai'
}

class RedirectServer {
  constructor (config) {
    this.config = _.defaults(config, defaults)

    const redirect = (req, res, next) => {
      let statusCode
      const url = this.config.redirectTo + req.url
      // Explicitly tell the client to re-POST or re-PUT to the other
      // server
      if (req.method === 'GET') {
        statusCode = 301
      } else {
        statusCode = 307
      }
      res.writeHead(statusCode, {'Location': url, 'Content-Type': 'text/html'})
      return res.end(`<a href="${url}">${url}</a>`)
    }

    if (this.config.key) {
      const options = {
        key: this.config.key,
        cert: this.config.cert
      }
      this.srv = https.createServer(options, redirect)
    } else {
      this.srv = http.createServer(redirect)
    }
  }

  start (callback) {
    this.srv.once('error', err => callback(err))
    this.srv.once('listening', () => callback(null))
    return this.srv.listen(this.config.port, this.config.address)
  }

  stop (callback) {
    this.srv.once('close', () => callback(null))
    this.srv.once('error', err => callback(err))
    return this.srv.close()
  }
}

module.exports = RedirectServer
