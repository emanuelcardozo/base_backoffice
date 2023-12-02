#!/bin/bash

resource_name="$1"

# Archivo JavaScript a modificar
archivo_js="./src/routes.jsx"

# Convertir la primera letra a mayúscula
resource_name_capitalized="$(tr '[:lower:]' '[:upper:]' <<< ${resource_name:0:1})${resource_name:1}"

# Verificar si el recurso ya está presente en el archivo
if grep -q "import ${resource_name_capitalized}Routes" "$archivo_js"; then
  echo "El recurso ya está presente en el archivo."
  exit 1
fi

# Texto a agregar
new_lines="import ${resource_name_capitalized}Routes from 'features/${resource_name}/routes'"

# Agregar la línea debajo del comentario
awk '/\/\/ SCRIPT: automatic imported routes will be placed here/ {print; print "'"$new_lines"'"; next} 1' "$archivo_js" > "$archivo_js.tmp" && mv "$archivo_js.tmp" "$archivo_js"

# Agregar la línea dentro del bloque "children: ["
awk '/\/\/ SCRIPT: automatic generated routes will be placed here/ {print; print "  ...'"${resource_name_capitalized}Routes,"'"; next} 1' "$archivo_js" > "$archivo_js.tmp" && mv "$archivo_js.tmp" "$archivo_js"

echo "Líneas del recurso agregadas al archivo."
