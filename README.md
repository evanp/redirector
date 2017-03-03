redirector
==========

This is a simple service for redirecting HTTP or HTTPS requests from one server
to another. It's probably most useful for when you've moved a server to a new
URL and you want the old URL to redirect.

Environment variables
---------------------

- `REDIR_PORT`: The port to listen on; defaults to 80.
- `REDIR_ADDRESS`: Address to listen on; defaults to "0.0.0.0" (All interfaces).
- `REDIR_KEY`: Full content (not a path!) of the OpenSSL PEM file for the key.
  Default is null.
- `REDIR_CERT`: Full content (not a path!) of the OpenSSL PEM file for the cert.
  Default is null.
- `REDIR_REDIRECT_TO`: Protocol, server name and port of the server to redirect
  to. Don't put in a trailing '/'. Defaults to 'https://fuzzy.ai'.
