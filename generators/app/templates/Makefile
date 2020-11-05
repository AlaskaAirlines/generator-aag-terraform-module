all: brew install

brew:
	brew bundle --no-lock

install: brew
	git init
	pre-commit uninstall
	pre-commit install -f
	tfenv install<% if(testFramework == '1') { %>
	go get -u golang.org/x/lint/golint<% } %><% if(testFramework == '2') { %>
	bundle install<% } %>
<% if(testFramework == '1') { %>
test:
	cp -n examples/fixtures.auto.tfvars.example examples/fixtures.auto.tfvars || test -f examples/fixtures.auto.tfvars
	go get -u github.com/gruntwork-io/terratest/modules/terraform
	go get -u github.com/stretchr/testify/assert
	go test -v ./test/example_test.go<% } %>	<% if(testFramework == '2') { %>
test:
	cp -n examples/fixtures.auto.tfvars.example examples/fixtures.auto.tfvars || test -f examples/fixtures.auto.tfvars
	bundle exec kitchen test<% } %>

.PHONY: brew install test
