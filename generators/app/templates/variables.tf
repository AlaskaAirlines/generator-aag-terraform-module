variable "mandatory" {
<% if (tfVersion == '11') { %>  type        = "string"<% } %><% if (tfVersion == '13') { %>  type        = string<% } %>
  description = "this field is mandatory"
}

variable "optional" {
<% if (tfVersion == '11') { %>  type        = "string"<% } %><% if (tfVersion == '13') { %>  type        = string<% } %>
  default     = "default_value"
  description = "this field is optional"
}

variable "input" {
<% if (tfVersion == '11') { %>  type        = "string"<% } %><% if (tfVersion == '13') { %>  type        = string<% } %>
  default     = "default_value"
  description = "module input variable"
}
