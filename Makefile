install: # выполнение npm ci
	npm ci

brain-games: # запуск brain-games
	node bin/brain-games.js

lint: # запуск npx eslint .
	npx eslint .
