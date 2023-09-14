## Usage

### Requirements

- SQLite (Just Memory)
- NodeJS 18

### Comand for start

```shell
npm i
npm start
```

### If usage Docker

```shell
docker compose up -d
```

### List API's

```js
// @domain = http://localhost:8000

// Creates `Book` and reference `Authors`.
// POST {{domain}}/book HTTP/1.1
// content-type: application/json

{
    "title": "The lord of the rings",
    "chapters": 3,
    "pages": 45,
    "authors": [1]
}


// Retrieves `Books` with thier `Authors`.
// GET {{domain}}/book HTTP/1.1
// content-type: application/json

// Creates `Authors` with their `Books`.
// POST {{domain}}/author HTTP/1.1
// content-type: application/json

{
    "name": "J.R.R. Tolkien",
    "books": [{
        "title": "The Hobit",
        "chapters": 3,
        "pages": 15
    }]
}

// Retrieves `Authors` with thier `Books`.
// GET {{domain}}/author HTTP/1.1
// content-type: application/json

// Retrieves `Book` with thier `Authors` and average `chapters` by `page`.
// GET {{domain}}/book/average/1 HTTP/1.1
// content-type: application/json

```