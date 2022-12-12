build:
    sudo docker compose -f compose.prod.yml up --build -d --remove-orphans
up:
    sudo docker compose up -d
down:
    sudo docker compose down
prune:
    sudo docker image prune -a -f
show_logs:
    sudo docker compose logs
