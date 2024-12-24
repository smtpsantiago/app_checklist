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
              }
            ]
          };
    
          // Crear modelo JSON único
          const oModel = new JSONModel(oData);
          // Asignar el modelo combinado a la vista
          this.getView().setModel(oModel);
        }
    });
});