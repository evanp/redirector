// main.js
// Copyright 2014 9165584 Canada Corporation <legal@fuzzy.ai>
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

const RedirectServer = require('./redirectserver')

const config = {
  port: process.env['REDIR_PORT'],
  address: process.env['REDIR_ADDRESS'],
  key: process.env['REDIR_KEY'],
  cert: process.env['REDIR_CERT'],
  redirectTo: process.env['REDIR_REDIRECT_TO'],
  status: process.env['REDIR_STATUS_URL']
}

const server = new RedirectServer(config)

server.start((err) => {
  if (err) {
    return console.error(err)
  } else {
    return console.log(`Server listening on ${server.config.port} for ${server.config.address || server.config.hostname}`)
  }
})

const shutdown = () => {
  console.log('Shutting down...')
  server.stop((err) => {
    if (err) {
      console.error(err)
      process.exit(-1)
    } else {
      console.log('Done.')
      process.exit(0)
    }
  })
}

process.on('SIGTERM', shutdown)
process.on('SIGINT', shutdown)
