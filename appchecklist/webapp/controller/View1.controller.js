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
                ]
              };

              const oModel = new JSONModel(oData);
              this.getView().setModel(oModel);
        }
    });
});