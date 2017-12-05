redirector
==========

This is a simple service for redirecting HTTP or HTTPS requests from one server
to another. It's probably most useful for when you've moved a server to a new
URL and you want the old URL to redirect.

License
-------

Copyright 2014-2017 9165584 Canada Corporation d/b/a Fuzzy.ai <mailto:legal@fuzzy.ai>

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

Environment variables
---------------------

-   `REDIR_PORT`: The port to listen on; defaults to 80.
-   `REDIR_ADDRESS`: Address to listen on; defaults to "0.0.0.0" (All interfaces).
-   `REDIR_KEY`: Full content (not a path!) of the OpenSSL PEM file for the key.
    Default is null.
-   `REDIR_CERT`: Full content (not a path!) of the OpenSSL PEM file for the cert.
    Default is null.
-   `REDIR_REDIRECT_TO`: Protocol, server name and port of the server to redirect
    to. Don't put in a trailing '/'. Defaults to '<https://fuzzy.ai>'.
