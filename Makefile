build:
    docker compose -f compose.prod.yml up --build -d --remove-orphans
up:
    docker compose up -d
down:
    docker compose down
show_logs:
    docker compose logs
