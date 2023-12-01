#!/bin/bash

resource_name="$1"

# Archivo JavaScript a modificar
archivo_js="./src/config.js"

# Convertir la primera letra a mayúscula
resource_name_capitalized="$(tr '[:lower:]' '[:upper:]' <<< ${resource_name:0:1})${resource_name:1}"
resource_name_uppercase="$(tr '[:lower:]' '[:upper:]' <<< "$resource_name")"

new_msURL="ms${resource_name_capitalized}: {\n\
  baseUrl: import.meta.env.VITE_MS_${resource_name_uppercase}_API_URL,\n\
},"

# Verificar si el recurso ya está presente en el archivo
if grep -q "$new_msURL" "$archivo_js"; then
  echo "La url del ms ya esta presente en config.js"
  exit 1
fi

# Agregar la línea debajo del comentario
awk '/\/\/ SCRIPT: automatic generated ms url will be placed here/ {print; print "'"$new_msURL"'"; next} 1' "$archivo_js" > "$archivo_js.tmp" && mv "$archivo_js.tmp" "$archivo_js"

echo "Nuevo item agregado al SideNav."
