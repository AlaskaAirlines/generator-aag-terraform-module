all: install

install:
	npm install --global yo
	npm install
	npm link

test:
	mkdir -p ../module-test-dir && cp ./.yo-rc.json ../module-test-dir && cd ../module-test-dir && /usr/bin/yes "" | yo @alaskaairgroup/aag-terraform-module
	$(MAKE) -C ../module-test-dir/test-module install
	$(MAKE) -C ../module-test-dir/test-module test
	cd ../module-test-dir/test-module && git add . && git commit -m "Initial commit"

.PHONY: install test
