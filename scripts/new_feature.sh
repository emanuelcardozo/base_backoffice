#!/bin/bash

# Solicitar el nombre del recurso
read -p "Ingrese el nombre del recurso en SINGULAR: " resource_name_singular
read -p "Ingrese el nombre del recurso en PLURAL: " resource_name_plural

resource_name_singular_lowercase="$(tr '[:upper:]' '[:lower:]' <<< "$resource_name_singular")"
resource_name_plural_lowercase="$(tr '[:upper:]' '[:lower:]' <<< "$resource_name_plural")"

# Ejecutar el primer script y verificar si tuvo éxito
./add_resource_model_to_cookiecutter.sh "$resource_name_plural_lowercase" "$resource_name_singular_lowercase"
if [ $? -ne 0 ]; then
    echo "Error al crear el archivo JSON."
    exit 1
fi

# Ejecutar el segundo script y verificar si tuvo éxito
./add_routes.sh "$resource_name_plural_lowercase"
if [ $? -ne 0 ]; then
    echo "Error al agregar las rutas."
    exit 1
fi

# Ejecutar el tercer script y verificar si tuvo éxito
./add_menu_items.sh "$resource_name_plural_lowercase"
if [ $? -ne 0 ]; then
    echo "Error al agregar el item al SideNav."
    exit 1
fi

cd ../src/features
cookiecutter . --no-input
# prettier --write ./"$resource_name_plural"
eslint ./"$resource_name_plural" --ext js,jsx --fix

# prettier --write ../layouts/MainLayout/config.jsx
eslint ../layouts/MainLayout/config.jsx --ext js,jsx --fix

# prettier --write ../routes.jsx
eslint ../routes.jsx --ext js,jsx --fix

cd ../..

echo "Proceso completado exitosamente."
