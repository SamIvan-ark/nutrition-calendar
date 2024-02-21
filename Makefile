install:
	npm ci

start:
	npm start

clear-build:
	rm -rf build
	npm run build

lint:
	npx eslint .

lint-fix:
	npx eslint . --fix

deploy:
	npm run deploy