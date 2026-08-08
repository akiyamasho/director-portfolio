PNPM ?= corepack pnpm@9.15.9
NODE_RUNNER ?= npx -y node@20
GATSBY_CLI := node_modules/gatsby/cli.js
DEV_PORT ?= 8000
RUN_PORT ?= 9000
GATSBY_CONFIG_DIR ?= $(CURDIR)/.gatsby-config
NPM_CACHE_DIR ?= $(CURDIR)/.npm-cache
GATSBY_ENV := GATSBY_TELEMETRY_DISABLED=1 XDG_CONFIG_HOME=$(GATSBY_CONFIG_DIR) npm_config_cache=$(NPM_CACHE_DIR)

.PHONY: dep dev build run

dep:
	$(PNPM) install --frozen-lockfile

dev:
	$(GATSBY_ENV) $(NODE_RUNNER) $(GATSBY_CLI) develop --host 0.0.0.0 --port $(DEV_PORT)

build:
	$(GATSBY_ENV) $(NODE_RUNNER) $(GATSBY_CLI) build

run: build
	$(GATSBY_ENV) $(NODE_RUNNER) $(GATSBY_CLI) serve --host 0.0.0.0 --port $(RUN_PORT)
