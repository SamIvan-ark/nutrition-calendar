install:
	npm ci

start:
	npm start

build:
	npm run build

lint:
	npx eslint .

lint-fix:
	npx eslint . --fix

deploy:
	npm run deploy

.PHONY: build