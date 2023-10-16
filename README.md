# What

Catering menu manager

## How to run

You need docker in order to run the app

```
  docker-compose build
  docker-compose up -d
```

Then:

```
  docker-compose exec backend rails db:create
  docker-compose exec backend rails db:migrate
```

The app is available at localhost, port 80
