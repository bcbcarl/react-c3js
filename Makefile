MKDIR := mkdir -p
RM := rm -rf

GIT = $(shell command -v git || { echo "git not found." >&2; exit 1; })
NPM = $(shell command -v npm || { echo "npm not found." >&2; exit 1; })
YARN = $(shell command -v yarn || { echo "yarn not found." >&2; exit 1; })

MODULES_DIR := node_modules
BIN_DIR := $(MODULES_DIR)/.bin
BABEL := $(BIN_DIR)/babel

SRC_DIR := src
SRC_FILE := $(SRC_DIR)/index.js
LIB_FILE := react-c3js.js

INFO = "\\033[34m[+] $@\\033[0m"

.PHONY: all
all: build

.PHONY: clean
clean:
	@echo $(INFO)
	@$(RM) $(LIB_FILE)

.PHONY: distclean
distclean: clean
	@echo $(INFO)
	@$(RM) $(MODULES_DIR)

.PHONY: install
install: package.json
	@echo $(INFO)
	@$(YARN)

.PHONY: build
build: $(SRC_FILE) clean install
	@echo $(INFO)
	@NODE_ENV=production $(BABEL) $(SRC_FILE) -o $(LIB_FILE)

.PHONY: dist
dist: package.json
	@echo $(INFO)
	@$(NPM) version patch
	@$(GIT) push origin
	@$(GIT) push origin --tags

.PHONY: publish
#publish: $(LIB_FILE) dist
#	@echo $(INFO)
#	@$(NPM) publish
