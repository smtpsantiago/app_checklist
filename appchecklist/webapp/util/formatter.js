sap.ui.define([
    "sap/ui/core/format/DateFormat",
    "sap/base/Log" // Para manejar errores de manera más eficiente
], function (DateFormat, Log) {
    "use strict";

    return {
        /**
         * Formatea una fecha en el formato deseado.
         * @param {string} sDate - La fecha en formato ISO (YYYY-MM-DD) o cualquier formato válido para `new Date()`.
         * @returns {string} - La fecha formateada o una cadena vacía si la fecha no es válida.
         */
        formatDate: function (sDate) {
            try {
                // Validar si la fecha es nula, indefinida o una cadena vacía
                if (!sDate) {
                    return "";
                }

                // Crear un objeto Date
                var oDate = new Date(sDate);

                // Validar si la fecha es inválida (por ejemplo, "Invalid Date")
                if (isNaN(oDate.getTime())) {
                    Log.warning("Fecha no válida proporcionada: " + sDate);
                    return "";
                }

                // Obtener una instancia de DateFormat con el patrón deseado
                var oDateFormat = DateFormat.getDateInstance({
                    pattern: "dd-MM-yyyy HH:mm a" // Define el patrón de formato
                });

                // Formatear la fecha
                return oDateFormat.format(oDate);
            } catch (oError) {
                // Manejar cualquier error inesperado
                Log.error("Error al formatear la fecha: " + oError.message);
                return "";
            }
        },
        convertToBoolean: function (sValue) {
            return sValue === "X" || sValue === "true"; // Convierte "X" o "true" en booleano true
        },
        isTableVisible: function (aItems) {
            return Array.isArray(aItems) && aItems.length > 0;
        }
        
        
    };
});