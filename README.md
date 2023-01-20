# api-poc-DragonBall

Api de um dos melhores animes que marcaram nossas vidas DragonBall.

## How to run for development

1. Clone this repository
2. Install all dependencies

```bash
npm i
```
3. A conexão do bando está fixada no arquivo `database/db.ts`

4. Execute o back-end em um ambiente de desenvolvimento:

```bash
npm run dev
```

## Rotas

POST: /characters
Body: { "name": "Goku", "level": 8001, "transformations": 5, "image": "image.jpg" }

GET: /characters

GET: /characters/id

PATH: /characters/id

DELETE: /characters/id