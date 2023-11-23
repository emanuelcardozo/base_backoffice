#!/bin/bash

resource_name_plural="$1"
resource_name_singular="$2"

resource_name_plural_capitalized="$(tr '[:lower:]' '[:upper:]' <<< ${resource_name_plural:0:1})${resource_name_plural:1}"
resource_name_singular_capitalized="$(tr '[:lower:]' '[:upper:]' <<< ${resource_name_singular:0:1})${resource_name_singular:1}"

# Inicializar arrays para almacenar los campos y sus tipos
fields=()

# Función para obtener el tipo de campo a partir del número ingresado por el usuario
get_field_type() {
    case "$1" in
        1) echo "number" ;;
        2) echo "string" ;;
        3) echo "bool" ;;
        4) echo "date" ;;
        5) echo "time" ;;
        6) echo "datetime" ;;
        7) echo "object" ;;
        8) echo "array" ;;
        *) echo "unknown" ;;
    esac
}

# Solicitar nombres de campos y tipos hasta que se presione Enter sin ingresar texto
while true; do
    read -p "Ingrese un nombre de campo (presione Enter para finalizar): " field
    if [ -z "$field" ]; then
        break
    else
        read -p "Ingrese elija el tipo del campo (1-Number, 2-String, 3-Boolean, 4-Date, 5-Time, 6-DateTime, 7-Object, 8-Array): " field_type_number
        field_type=$(get_field_type "$field_type_number")
        fields+=("{\"name\":\"$field\",\"type\":\"$field_type\"}")
    fi
done

# Construir el JSON usando un formato de cadena heredoc
json=$(cat <<EOF
{
    "resource_name_plural": "$resource_name_plural_capitalized",
    "resource_name_singular": "$resource_name_singular_capitalized",
    "__fields": [
EOF
)

# Agregar cada campo con su tipo, tabulación y un salto de línea después de "},"
for ((i = 0; i < ${#fields[@]}; i++)); do
    json+=$'\n'"        ${fields[$i]}"
    if [ $i -lt $(( ${#fields[@]} - 1 )) ]; then
        json+=","
    fi
done

json+=$'\n'"    ]"$'\n'"}"

# Guardar el JSON en un archivo
echo "$json" > ../src/features/cookiecutter.json

echo "Proceso completado. JSON guardado en archivo.json."
