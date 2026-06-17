# Dummy Vite App

A minimal Vite app built as static files and served by nginx in Docker.

## Local Development

```sh
npm install
npm run dev
```

## Production Build

```sh
npm run build
npm run preview
```

## Docker

```sh
docker build -t vb-gha-demo-app .
docker run --rm -p 8081:80 vb-gha-demo-app
```

Open `http://localhost:8081`.

Health check:

```sh
curl http://localhost:8081/health
```
