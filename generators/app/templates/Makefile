all: brew install

brew:
	brew bundle --no-lock

install: brew
	git init
	pre-commit uninstall
	pre-commit install -f
	tfenv install<% if(testFramework == '2') { %>
	bundle install<% } %>
<% if(testFramework == '1') { %>
test:
	go get -u golang.org/x/lint/golint
	go get -u github.com/gruntwork-io/terratest/modules/terraform
	go get -u github.com/stretchr/testify/assert
	go test -v ./test/example_test.go<% } %>	<% if(testFramework == '2') { %>
test:
	kitchen test<% } %>

.PHONY: brew install test
