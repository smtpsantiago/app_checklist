sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], (Controller, JSONModel) => {
    "use strict";

    return Controller.extend("appchecklist.appchecklist.controller.View1", {
        onInit() {
          const oData = {
            DatosNumericos: [
              {
                Actividad: "Mediciones eléctricas del motor",
                Tarea: "Medición resistencia entre bobinas",
                Bornes: "U - V",
                Medicion: "10 Ω",
                MedicionAnterior: "12 Ω"
              },
              {
                Actividad: "Mediciones eléctricas del motor",
                Tarea: "Medición resistencia entre bobinas",
                Bornes: "U - W",
                Medicion: "11 Ω",
                MedicionAnterior: "11 Ω"
              },
              {
                Actividad: "Mediciones eléctricas del motor",
                Tarea: "Medición resistencia entre bobinas",
                Bornes: "V - W",
                Medicion: "9 Ω",
                MedicionAnterior: "8 Ω"
              },
              {
                Actividad: "Mediciones eléctricas del motor",
                Tarea: "Medición resistencia entre bobinas",
                Bornes: "U - TIERRA",
                Medicion: "0 Ω",
                MedicionAnterior: "0 Ω"
              },
              {
                Actividad: "Mediciones eléctricas del motor",
                Tarea: "Medición resistencia entre bobinas",
                Bornes: "V - TIERRA",
                Medicion: "0 Ω",
                MedicionAnterior: "6 Ω"
              },
              {
                Actividad: "Mediciones eléctricas del motor",
                Tarea: "Medición resistencia entre bobinas",
                Bornes: "W - TIERRA",
                Medicion: "0 Ω",
                MedicionAnterior: "0 Ω"
              },
              {
                Actividad: "Mediciones eléctricas en alimentadores",
                Tarea: "Medición resistencia entre bobinas",
                Bornes: "L1-L2",
                Medicion: "0 Ω",
                MedicionAnterior: "10 Ω"
              },
              {
                Actividad: "Mediciones eléctricas en alimentadores",
                Tarea: "Medición resistencia entre bobinas",
                Bornes: "L1-L3",
                Medicion: "0 Ω",
                MedicionAnterior: "10 Ω"
              },
              {
                Actividad: "Mediciones eléctricas en alimentadores",
                Tarea: "Medición resistencia entre bobinas",
                Bornes: "L2-L3",
                Medicion: "0 Ω",
                MedicionAnterior: "50 Ω"
              },
              {
                Actividad: "Mediciones eléctricas en alimentadores",
                Tarea: "Medición resistencia entre bobinas",
                Bornes: "L1-TIERRA",
                Medicion: "0 Ω",
                MedicionAnterior: "10 Ω"
              },
              {
                Actividad: "Mediciones eléctricas en alimentadores",
                Tarea: "Medición resistencia entre bobinas",
                Bornes: "L2-TIERRA",
                Medicion: "0 Ω",
                MedicionAnterior: "10 Ω"
              },
              {
                Actividad: "Mediciones eléctricas en alimentadores",
                Tarea: "Medición resistencia entre bobinas",
                Bornes: "L3-TIERRA",
                Medicion: "0 Ω",
                MedicionAnterior: "10 Ω"
              },
              {
                Actividad: "Mediciones puesta a tierra",
                Tarea: "Valor maximo 5 Ω",
                Bornes: "TIERRA",
                Medicion: "0 Ω",
                MedicionAnterior: "4 Ω"
              },
              {
                Actividad: "Mediciones puesta a tierra",
                Tarea: "Valor maximo 5 Ω",
                Bornes: "TIERRA",
                Medicion: "0 Ω",
                MedicionAnterior: "4 Ω"
              }
            ],
            CheckList: [
              {
                Actividad: "Calificación Diseño",
                Tarea: "Vida útil del instrumento/obsolescencia",
                Estado: "Aprueba",
                Observaciones: ""
              },
              {
                Actividad: "Calificación Diseño",
                Tarea: "Resistencia a golpes y vibraciones hasta 4G",
                Estado: "No Aprueba",
                Observaciones: ""
              },
              {
                Actividad: "Calificación Diseño",
                Tarea: "Equipo cumple con clasificación UL seguridad intrínseca",
                Estado: "No Aplica",
                Observaciones: ""
              },
              {
                Actividad: "Calificación Diseño",
                Tarea: "Equipo cumple para trabajo en atmósfera explosiva ATEX",
                Estado: "Aprueba",
                Observaciones: ""
              },
              {
                Actividad: "Calificación Instalación",
                Tarea: "Correcta ubicación y orientación del equipo",
                Estado: "Aprueba",
                Observaciones: ""
              },
              {
                Actividad: "Calificación Instalación",
                Tarea: "Montaje del instrumento con espacio libre para evitar darios mecanicos",
                Estado: "Aprueba",
                Observaciones: ""
              },
              {
                Actividad: "Calificación Instalación",
                Tarea: "Acceso y visibili dad del instrumento",
                Estado: "Aprueba",
                Observaciones: ""
              },
              {
                Actividad: "Calificación Instalación",
                Tarea: "Revision de sujeción de conectores gland",
                Estado: "Aprueba",
                Observaciones: ""
              },
              {
                Actividad: "Calificación Instalación",
                Tarea: "Instrumento y caja de conexiones se encuentra hermeticamente sellado",
                Estado: "Aprueba",
                Observaciones: ""
              },
              {
                Actividad: "Calificación Instalación",
                Tarea: "Inspección y reposición de amarras cables",
                Estado: "Aprueba",
                Observaciones: ""
              },
              {
                Actividad: "Calificación Instalación",
                Tarea: "Deterioro fisico del equipo (sulfatación, corrosión)",
                Estado: "Aprueba",
                Observaciones: ""
              },
              {
                Actividad: "Calificación Instalación",
                Tarea: "Estado de conexiones a tierra (limpieza, cortadas, no instaladas)",
                Estado: "Aprueba",
                Observaciones: ""
              },
              {
                Actividad: "Calificación Instalación",
                Tarea: "Revisión de elementos mecánicos de sujeción tornillos, pernos (instalados)",
                Estado: "Aprueba",
                Observaciones: ""
              },
              {
                Actividad: "Calificación Instalación",
                Tarea: "Instrumento esta correctamente identificado en campo 'tag' (rotulado)",
                Estado: "Aprueba",
                Observaciones: ""
              },
              {
                Actividad: "Calificación Operación",
                Tarea: "Limpieza e inspeccion visual del equipo",
                Estado: "Aprueba",
                Observaciones: ""
              },
              {
                Actividad: "Calificación Operación",
                Tarea: "Reconexion de todos los terminales y verificacion de apriete de los mismos",
                Estado: "Aprueba",
                Observaciones: ""
              },
              {
                Actividad: "Calificación Operación",
                Tarea: "Comprobacion tension de alimentacion del equipo 24 vdc",
                Estado: "Aprueba",
                Observaciones: ""
              },
              {
                Actividad: "Calificación Operación",
                Tarea: "Revisar el filtro de la linea base y en caso de que no lo tenga, reponer.(manual del fabricante) ",
                Estado: "Aprueba",
                Observaciones: ""
              },
              {
                Actividad: "Calificación Operación",
                Tarea: "Revisar parametros de configuracion del equipo (unidad de ingenieria etcetera) ",
                Estado: "Aprueba",
                Observaciones: ""
              },
              {
                Actividad: "Calificación Operación",
                Tarea: "Revisar deterioro fisico interno en caja de conexiones del detector (sulfatacion, corrosion, componentes)",
                Estado: "Aprueba",
                Observaciones: ""
              },
              {
                Actividad: "Calificación Operación",
                Tarea: "Engrase de tornilleria exterior y sellado ",
                Estado: "Aprueba",
                Observaciones: ""
              },
              {
                Actividad: "Calificación Desempeño",
                Tarea: "Comprobar indicador LED (verde) del detector en estado pasivo ",
                Estado: "Aprueba",
                Observaciones: ""
              },
              {
                Actividad: "Calificación Desempeño",
                Tarea: "Ajuste del punto Zero atmosferico",
                Estado: "Aprueba",
                Observaciones: ""
              },
              {
                Actividad: "Calificación Desempeño",
                Tarea: "Ajuste del SPAN con gas patron certificado por el fabricante (Sensibilidad) ",
                Estado: "Aprueba",
                Observaciones: ""
              },
              {
                Actividad: "Calificación Desempeño",
                Tarea: "Comprobar estado de luces LED del detector durante los ajustes de sensibilidad y zero atmosferico ",
                Estado: "Aprueba",
                Observaciones: ""
              },
              {
                Actividad: "Calificación Desempeño",
                Tarea: "Detector funciona consistentemente y entrega reproducibilidad en sistema de control ",
                Estado: "Aprueba",
                Observaciones: ""
              },
              {
                Actividad: "Calificación Desempeño",
                Tarea: "Corroborar normalizacion del estado de alarma en sistema de control ",
                Estado: "Aprueba",
                Observaciones: ""
              },
              {
                Actividad: "Calificación Desempeño",
                Tarea: "Requiere calibracion",
                Estado: "Aprueba",
                Observaciones: ""
              }
            ],
            Estado: [
              { Select: "Aprueba" },
              { Select: "No Aprueba" },
              { Select: "No Aplica" }

            ]
          };
    
          // Crear modelo JSON único
          const oModel = new JSONModel(oData);
          // Asignar el modelo combinado a la vista
          this.getView().setModel(oModel);
        }
    });
});