class {{cookiecutter.resource_name_singular}} {
  constructor(
    {% for field in cookiecutter.__fields %}
    {{field.name}},
    {% endfor %}
  ) {
    {% for field in cookiecutter.__fields %}
    this.{{field.name}} = {{field.name}}
    {% endfor %}
  }

  static fromAPI(data = {}) {
    return new {{cookiecutter.resource_name_singular}}(data)
  }
}

export default {{cookiecutter.resource_name_singular}}
