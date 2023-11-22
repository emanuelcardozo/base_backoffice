#!/bin/bash

resource_name="$1"

# Archivo JavaScript a modificar
archivo_js="../src/i18n.js"

# Convertir la primera letra a mayúscula
resource_name_capitalized="$(tr '[:lower:]' '[:upper:]' <<< ${resource_name:0:1})${resource_name:1}"

new_import_translation_resource="import es${resource_name_capitalized}JSON from 'features/${resource_name_capitalized}/locale/es.json'\n\
import en${resource_name_capitalized}JSON from 'features/${resource_name_capitalized}/locale/en.json'"

new_translation_resource="i18n.addResourceBundle('es', 'features', {\n\
  ${resource_name_capitalized}: es${resource_name_capitalized}JSON,\n\
})\n\
\n\
i18n.addResourceBundle('en', 'features', {\n\
  ${resource_name_capitalized}: en${resource_name_capitalized}JSON,\n\
})\n\
"

# Verificar si el recurso ya está presente en el archivo
if grep -q "$new_translation_resource" "$archivo_js"; then
  echo "Las traducciones para este recurso ya existen."
  exit 1
fi

# Agregar la línea debajo del comentario "// add more"
awk '/\/\/ add more resources here/ {print; print "'"$new_translation_resource"'"; next} 1' "$archivo_js" > "$archivo_js.tmp" && mv "$archivo_js.tmp" "$archivo_js"

# Agregar la línea debajo del comentario "// features"
awk '/\/\/ Features/ {print; print "'"$new_import_translation_resource"'"; next} 1' "$archivo_js" > "$archivo_js.tmp" && mv "$archivo_js.tmp" "$archivo_js"

echo "Traducciones de ${resource_name} configurada."
