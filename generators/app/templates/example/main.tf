provider "null" {
  version = "~> 2.1"
}

module "example_module" {
  source = "../."

  mandatory = "mandatory_string"
}
