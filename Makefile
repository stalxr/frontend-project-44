install-deps:
	npm ci

run: 
	node bin/brain-games.js

brain-even:
	node bin/brain-even.js

publish:
	npm publish --dry-run	

lint:
	npx eslint .