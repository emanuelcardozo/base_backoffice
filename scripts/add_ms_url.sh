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

echo "Nuevo item agregado al Config."

# Archivo JavaScript a modificar
archivo_env_js=".env"

read -p "Ingresa la url del MS que irá en el .env: " ms_url
new_ENV_URL_line="VITE_MS_${resource_name_uppercase}_API_URL = '${ms_url}'"

# Verificar si el recurso ya está presente en el archivo
if grep -q "$new_ENV_URL_line" "$archivo_env_js"; then
  echo "La url del ms ya esta presente en .env"
  exit 1
fi

# Agregar la línea debajo del comentario
awk '/# SCRIPT: automatic generated API URL will be placed here/ {print; print "'"$new_ENV_URL_line"'"; next} 1' "$archivo_env_js" > "$archivo_env_js.tmp" && mv "$archivo_env_js.tmp" "$archivo_env_js"

echo "Nuevo item agregado al ENV."
