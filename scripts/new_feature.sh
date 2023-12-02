#!/bin/bash

# Obtener la ubicación del directorio del script actual
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

read -p "Ingrese el nombre del recurso en SINGULAR: " resource_name_singular
read -p "Ingrese el nombre del recurso en PLURAL: " resource_name_plural

resource_name_singular_lowercase="$(tr '[:upper:]' '[:lower:]' <<< "$resource_name_singular")"
resource_name_plural_lowercase="$(tr '[:upper:]' '[:lower:]' <<< "$resource_name_plural")"

# Utilizar rutas relativas al directorio del script
"$SCRIPT_DIR/add_resource_model_to_cookiecutter.sh" "$resource_name_plural_lowercase" "$resource_name_singular_lowercase"
if [ $? -ne 0 ]; then
    echo "Error al crear el archivo JSON."
    exit 1
fi

"$SCRIPT_DIR/add_ms_url.sh" "$resource_name_plural_lowercase"
if [ $? -ne 0 ]; then
    echo "Error al agregar el item al SideNav."
    exit 1
fi

"$SCRIPT_DIR/add_routes.sh" "$resource_name_plural_lowercase"
if [ $? -ne 0 ]; then
    echo "Error al agregar las rutas."
    exit 1
fi

"$SCRIPT_DIR/add_menu_items.sh" "$resource_name_plural_lowercase"
if [ $? -ne 0 ]; then
    echo "Error al agregar el item al SideNav."
    exit 1
fi

"$SCRIPT_DIR/add_translation.sh" "$resource_name_plural_lowercase"
if [ $? -ne 0 ]; then
    echo "Error al agregar las traducciones."
    exit 1
fi

# Utilizar rutas relativas al directorio del script
cookiecutter "$SCRIPT_DIR" --no-input --output-dir "./src/features"

echo "Formateando todo el proyecto."
npm run lint:fix

# Utilizar rutas relativas al directorio del script
rm "$SCRIPT_DIR/cookiecutter.json"

echo "Proceso completado exitosamente."
