# Simple Node.js HTTP Server

This is a basic HTTP server built with Node.js, designed to return the current time in JSON format when accessed via a specific endpoint. Useful to test caching on the client side.

## Setup & Run

1. **Install Node.js** on your machine if it's not already installed.

2. **Start the server** by running the following command in your terminal:

   ```bash
   node index.js
   ```

## How to Use

With the server running, access http://localhost:3001/time to receive the current time. The server will respond with the current time in JSON format, for example:

```json
{ "currentTime": "2024-02-07T12:34:56.789Z" }
```
