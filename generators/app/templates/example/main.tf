provider "null" {}

module "example_module" {
  source = "../."

  mandatory = "mandatory_string"
<% if (tfVersion == '11') { %>  input     = "${var.input}"<% } %><% if (tfVersion == '13') { %>  input     = var.input<% } %>
}
