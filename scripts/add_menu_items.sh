#!/bin/bash

resource_name="$1"

# Archivo JavaScript a modificar
archivo_js="../src/layouts/MainLayout/config.jsx"

# Convertir la primera letra a mayúscula
resource_name_capitalized="$(tr '[:lower:]' '[:upper:]' <<< ${resource_name:0:1})${resource_name:1}"

new_item="{\n\
  name: '${resource_name_capitalized}',\n\
  path: '/${resource_name}',\n\
  icon: (\n\
    <SvgIcon fontSize='small'>\n\
      <TagIcon />\n\
    </SvgIcon>\n\
  ),\n\
},"

# Verificar si el recurso ya está presente en el archivo
if grep -q "$new_item" "$archivo_js"; then
  echo "El item ya está presente en el SideNav."
  exit 1
fi

# Agregar la línea debajo del comentario "//routes"
awk '/\/\/ automatic generated menu items/ {print; print "'"$new_item"'"; next} 1' "$archivo_js" > "$archivo_js.tmp" && mv "$archivo_js.tmp" "$archivo_js"

echo "Nuevo item agregado al SideNav."
