build:
    docker compose -f compose.prod.yml up --build -d --remove-orphans
up:
    docker compose -f compose.prod.yml up -d
down:
    docker compose down
prune:
    docker image prune -a -f
show_logs:
    docker compose logs
