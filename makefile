# commands
.PHONY: run
run:
	@echo "Building and running application" && \
	docker-compose down --remove-orphans && \
	docker-compose up --build -d

.PHONY: attach
attach:
	@echo "Attaching to containers" && \
	docker exec -it optomcalc-backend sh

ARG=""
.PHONY: test
test:
	@echo "Running Testing" && \
	docker exec -it optomcalc-backend sh -c "pytest $(ARG)"

.PHONY: tox
tox:
	@echo "Running tox" && \
	docker exec -it optomcalc-backend sh -c "tox"

.PHONY: deploy
deploy:
	@echo "Deploying application" && \
	cp .env ansible/files/.env && \
	ansible-playbook ansible/deploy.yml -i ansible/hosts -K
