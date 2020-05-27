# Terraform module generator [![npm version](https://badge.fury.io/js/generator-tf-module.svg)](https://www.npmjs.com/package/generator-tf-module)

Scaffolding for new Terraform module projects

## Features

### Terraform Files

- `main.tf` , `variables.tf` , `outputs.tf` files to module root path
- `example` directory with module usage tf files
- `.terraform-version` file to module root path

### Testing Framework Files

- Option to choose test frameworks
  - [Terratest](https://github.com/gruntwork-io/terratest)
  - [kitchen-terraform](https://github.com/newcontext-oss/kitchen-terraform)
- `test` directory with an example test based on test framework selection

### Other Files

- `README.md`
- `Makefile` and `Brewfile`
- `.editorconfig`, `.gitignore` and `.gitattributes`
- `.pre-commit-config.yaml` for
  - `terraform fmt`
  - `terraform-docs`
  - `check-merge-conflict`
  - ( `go fmt`, `golint` ) or (`rubocop`)

## Prerequisites

- For module generator itself
  - [homebrew](https://brew.sh/)
  - [nodejs](https://nodejs.org/en/download/)
- For generated Terraform module
  - [terraform](https://learn.hashicorp.com/terraform/getting-started/install#installing-terraform)
  - [terraform-docs](https://github.com/segmentio/terraform-docs)
  - [pre-commit](https://pre-commit.com/#install)
- For generated Terraform module tests
  - **terratest**
    - [golang](https://golang.org/doc/install#install)
    - [golint](https://github.com/golang/lint#installation)
  - **kitchen-terraform**
    - [Chef Workstation](https://downloads.chef.io/chef-workstation/)
    - [kitchen-terraform](https://rubygems.org/gems/kitchen-terraform)

## Installation

Issue the following command

```sh
> make install
```

## Usage

To use the included generator execute the below command in shell and provide your new module name for the prompt

```sh
> yo aag-terraform-module
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

Project layout generated for the new module with _Terratest_ selection

```text
example-module/
├── example/
│  ├── main.tf
│  ├── outputs.tf
│  └── variables.tf
├── test/
│  └── example_test.go
├── .editorconfig
├── .gitattributes
├── .gitignore
├── .pre-commit-config.yaml
├── .terraform-version
├── Brewfile
├── main.tf
├── Makefile
├── outputs.tf
├── README.md
└── variables.tf
```

Project layout generated for the new module with _kitchen-terraform_ selection

```text
example-module/
├── example/
│  ├── main.tf
│  ├── outputs.tf
│  └── variables.tf
├── test/
│  └── integration/
│     └── default/
│        ├── controls/
│        │  └── example_spec.rb
│        └── inspec.yml
├── .editorconfig
├── .gitattributes
├── .gitignore
├── .pre-commit-config.yaml
├── .rubocop.yml
├── .ruby-version
├── .terraform-version
├── Brewfile
├── Gemfile
├── kitchen.yml
├── main.tf
├── Makefile
├── outputs.tf
├── README.md
└── variables.tf
```

## Post generation steps

On the generated module's root path, issue the following command

```sh
> make install
```

This will perform the following steps for you

- Initialize git repository
- Install pre-commit hooks
- Install Terraform
- Prepare testing framework

## Contribution

Found a bug? Feel free to raise an issue.
Pull requests are always welcome. Keen to review and merge asap.

## Maintainers & Author

Maintainers: [Shadow Quests](shadowquests@alaskaair.com) (Alaska Airlines E-Commerce Platform Team)  
Original Author: [sudokar](https://github.com/sudokar)

## License

MIT
