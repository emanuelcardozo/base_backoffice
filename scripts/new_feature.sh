#!/bin/bash

read -p "Ingrese el nombre del recurso en SINGULAR: " resource_name_singular
read -p "Ingrese el nombre del recurso en PLURAL: " resource_name_plural

resource_name_singular_lowercase="$(tr '[:upper:]' '[:lower:]' <<< "$resource_name_singular")"
resource_name_plural_lowercase="$(tr '[:upper:]' '[:lower:]' <<< "$resource_name_plural")"

./add_resource_model_to_cookiecutter.sh "$resource_name_plural_lowercase" "$resource_name_singular_lowercase"
if [ $? -ne 0 ]; then
    echo "Error al crear el archivo JSON."
    exit 1
fi

./add_ms_url.sh "$resource_name_plural_lowercase"
if [ $? -ne 0 ]; then
    echo "Error al agregar el item al SideNav."
    exit 1
fi

./add_routes.sh "$resource_name_plural_lowercase"
if [ $? -ne 0 ]; then
    echo "Error al agregar las rutas."
    exit 1
fi

./add_menu_items.sh "$resource_name_plural_lowercase"
if [ $? -ne 0 ]; then
    echo "Error al agregar el item al SideNav."
    exit 1
fi

./add_translation.sh "$resource_name_plural_lowercase"
if [ $? -ne 0 ]; then
    echo "Error al agregar las traducciones."
    exit 1
fi

cd ../src/features
cookiecutter . --no-input
cd ../..

echo "Formateando todo el proyecto."
npm run lint:fix

echo "Proceso completado exitosamente."
