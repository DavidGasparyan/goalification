build:
	docker compose -f compose.prod.yml up --build -d --remove-orphans
up:
	docker compose -f compose.prod.yml up -d
down:
	compose -f compose.prod.yml down
prune:
	image prune -a -f
show_logs:
	docker compose -f compose.prod.yml logs

