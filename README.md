# api-poc-DragonBall

Api of one of the best animes that marked our lives DragonBall.

## How to run for development

1. Clone this repository
2. Install all dependencies

```bash
npm i
```
3. The flock connection is fixed in the file `database/db.ts`

4. Run the backend in a development environment:

```bash
npm run dev
```

## Routes

POST: /characters
Body: { "name": "Goku", "level": 8001, "transformations": 5, "image": "image.jpg" }

GET: /characters

GET: /characters/id
Body: { "name": "Goku", "level": 8002, "transformations": 6, "image": "image.jpg" }

PATH: /characters/id

DELETE: /characters/id