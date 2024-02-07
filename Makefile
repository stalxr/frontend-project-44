install-deps:
	npm ci

run: 
	node bin/brain-games.js

publish:
	npm publish --dry-run