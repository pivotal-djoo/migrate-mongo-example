# Migrate-Mongo Example

## Getting Started

Start local MongoDB

```bash
docker compose up -d
```

Install dependencies.

```bash
pnpm install
```

Run the server locally. This will spin up the server in port 8080.

```bash
pnpm run dev
```

A simple REST server will run on URL: http://localhost:8080.

## Database Migrations

### Create a new migration

```bash
pnpm run db:migrate:create [options] [description]
```

### Check status

```bash
pnpm run db:migrate:status
```

### Run all new migrations

```bash
pnpm run db:migrate:up
```
