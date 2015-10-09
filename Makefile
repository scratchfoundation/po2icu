ESLINT=./node_modules/.bin/eslint
TAP=./node_modules/.bin/tap
NODE=node

# ------------------------------------

lint:
	$(ESLINT) ./*.js
	$(ESLINT) ./lib/*.js

unit:
	$(TAP) ./test/unit/*.js

functional:
	$(TAP) ./test/functional/*.js

test:
	@make lint
	@echo ""
	@make unit
	@echo ""
	@make functional
	@echo ""

# ------------------------------------

.PHONY: lint unit functional test
