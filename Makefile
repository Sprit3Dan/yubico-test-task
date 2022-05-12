# Docker based tooling
COMPOSE := DOCKER_BUILDKIT=1 docker-compose

# Build containers. The built container will be cached
build:
	@$(COMPOSE) build

# Start the containers using docker-compose.
run:
	@$(COMPOSE) up

# Convenience function to build and run in one command
dev: build run

# Stop the running docker container and remove them
stop:
	@$(COMPOSE) down
