# Alaska Airlines Terraform Module Generator [![npm version](https://badge.fury.io/js/%40alaskaairgroup%2Fgenerator-aag-terraform-module.svg)](https://badge.fury.io/js/%40alaskaairgroup%2Fgenerator-aag-terraform-module)

A [Yeoman Generator](http://yeoman.io/) to create new [Terraform module](https://www.terraform.io/docs/configuration/modules.html) projects for Alaska Airlines. This generator creates a base repository to start a new terraform module along with [Terratest](https://github.com/gruntwork-io/terratest) or [kitchen-terraform](https://rubygems.org/gems/kitchen-terraform) to automatically test the module.

To stay up to date on our latest changes, visit our [Changelog](./docs/CHANGELOG.md)

## Install

To install the generator, run the following commands

```sh
npm install --global yo
npm install --global @alaskaairgroup/generator-aag-terraform-module
```

## Usage

To run the generator use the command below and provide your new module name for the prompt

```sh
yo aag-terraform-module
```

```text
? Enter name for the new terraform module :  example-module
? Enter description for the new terraform module :  Example terraform module
? Enter author name :  sudokar
? Choose terraform version (Use arrow keys)
❯ 0.12
  0.11
? Choose test framework (Use arrow keys)
❯ Terratest
  kitchen-terraform
```

## Generated Terraform Module

### Terraform Files

- `main.tf` , `variables.tf` , `outputs.tf` files to module root path
- `example` directory with module usage tf files
- `.terraform-version` file to module root path

### Testing Framework Files

- Option to choose test frameworks:
  - Terratest
  - kitchen-terraform
- `test` directory with an example test based on test framework selection

### Other Files

- `README.md`
- `Makefile`
- `.editorconfig`, `.gitignore` and `.gitattributes`
- `.pre-commit-config.yaml` for
  - `terraform fmt`
  - `terraform-docs`
  - `check-merge-conflict`
  - ( `go fmt`, `golint` ) or (`rubocop`)

## Post Generation

In the generated module directory, run the following command

```sh
make install
```

This will perform the following steps for you

- Initialize git repository
- Install pre-commit hooks
- Install Terraform
- Prepare testing framework

## Software Projects Included

- For module generator itself
  - [nodejs](https://nodejs.org/en/download/)
  - [Yeoman](https://yeoman.io/)
- For generated Terraform module
  - [homebrew](https://brew.sh/)
  - [terraform](https://learn.hashicorp.com/terraform/getting-started/install#installing-terraform)
  - [terraform-docs](https://github.com/segmentio/terraform-docs)
  - [pre-commit](https://pre-commit.com/#install)
- For generated Terraform module tests
  - **Terratest**
    - [golang](https://golang.org/doc/install#install)
    - [golint](https://github.com/golang/lint#installation)
    - [Terratest](https://github.com/gruntwork-io/terratest)
  - **kitchen-terraform**
    - [Chef Workstation](https://downloads.chef.io/chef-workstation/)
    - [kitchen-terraform](https://rubygems.org/gems/kitchen-terraform)

## Contributing

See [Contributing](./docs/CONTRIBUTING.md) for guidelines

### Building The Generator

If you are interested in contributing or modifying the generator itself, clone this repo and install all modules before building the project

```sh
npm install
npm run build
```

The bundled generator and the template files will end up in the `./generators/` folder

### Testing The Generator

If you want to run the generator tests, you can run the following command

```sh
make test
```

### Using it in dev mode

In the `generator-aag-terraform-module` directory use the following command, this will link the local copy of the folder as a global node module

```sh
npm link
```

To revert the link operation

```sh
npm unlink
```

## Maintainers & Author

Maintainers: [Shadow Quests](shadowquests@alaskaair.com) (Alaska Airlines E-Commerce Platform Team)  
Original Author: [sudokar](https://github.com/sudokar)

## License

MIT
