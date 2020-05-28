all: brew install

brew:
	brew bundle --no-lock

install: brew
	npm install --global yo
	# TODO: Upload generator package to 'as.com-npm' artifact feed 
	npm link

test:
	mkdir -p ../module-test-dir && cp ./.yo-rc.json ../module-test-dir && cd ../module-test-dir && yo aag-terraform-module
	$(MAKE) -C ../module-test-dir/test-module install
	$(MAKE) -C ../module-test-dir/test-module test
	cd ../module-test-dir/test-module && git add . && git commit -m "Initial commit"

.PHONY: brew install test
