# MERN Tutorial

- Following Traversy Media's `Learn the MERN Stack` tutorial
- `npm install express body-parser mongoose concurrently`
  - `body-parser` to parse incoming API requests
  - `mongoose` = ORM to interact with MongoDB 
  - `concurrently` will allow us to run more than 1 npm script at a time (the server and client) 
- `npm i -D nodemon` to install it as a dev dependency
- `package.json` scripts:
  - "start": "node server.js",
  - "server": "nodemon server.js"
    - => do `npm run server` to have nodemon start the server (auto refreshes on changes)
- The React app will go in the `client/` directory 
  - to have front end be able to connect to the backend server (without having to type `axios.get("http://localhost:5000/api/get)`) => put `proxy` in `client/package.json`
  - "proxy": "http://localhost:5000"
