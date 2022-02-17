install: # выполнение npm ci
	npm ci

brain-games: # запуск brain-games
	node bin/brain-games.js

brain-even: # запуск brain-even
	node bin/brain-even.js

lint: # запуск npx eslint .
	npx eslint .

publish: #публикация пакета
	npm publish --dry-run
