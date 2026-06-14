from http.server import HTTPServer, SimpleHTTPRequestHandler

server = HTTPServer(("127.0.0.1", 6500), SimpleHTTPRequestHandler)

print("Serving on http://127.0.0.1:6500")
server.serve_forever()