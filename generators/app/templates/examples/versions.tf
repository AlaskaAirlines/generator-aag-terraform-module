terraform {
  required_providers {
    null = {
      source  = "hashicorp/null"
      version = "~> 2.1"
    }
  }

<% if (tfVersion == '11') { %>  required_version = "< 0.12"<% } %><% if (tfVersion == '13') { %>  required_version = ">= 0.13"<% } %>
}
