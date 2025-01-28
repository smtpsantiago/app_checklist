sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/model/json/JSONModel"
], (Controller, JSONModel) => {
  "use strict";

  return Controller.extend("appchecklist.appchecklist.controller.View1", {
    onInit() {
      const oData = {
        tipoCheckList: {
          id: "gas"
        },

        DatosGenerales: {

        },
        Operaciones: [
          {
            Operacion: "0001",
            SubOperacion: "INT-OPE",
            PuestoTrabajo: "INT-OPE",
            DescripcionOperacion: "Permiso",
            Trabajo: "0.0"
          },
          {
            Operacion: "0020",
            SubOperacion: "INT-CTR",
            PuestoTrabajo: "INT-CTR",
            DescripcionOperacion: "ITO",
            Trabajo: "1"
          },
          {
            Operacion: "0030",
            SubOperacion: "CON-F&G",
            PuestoTrabajo: "CON-F&G",
            DescripcionOperacion: "Contratista",
            Trabajo: "4"
          }
        ],
        CheckList: [
          {
            Actividad: "Calificación instalacion",
            Tarea: "Correcta ubicación y orientación del equipo",
            Estado: "",
            Observaciones: "", Notificar: false
          },
          {
            Actividad: "Calificación instalacion",
            Tarea: "El equipo tiene libre acceso y no se encuentra obstruido",
            Estado: "",
            Observaciones: "", Notificar: false
          },
          {
            Actividad: "Calificación instalacion",
            Tarea: "Correcto estado sellos de seguridad y cumplimiento áreas clasificadas",
            Estado: "",
            Observaciones: "", Notificar: false
          },
          {
            Actividad: "Calificación instalacion",
            Tarea: "Equipo esta correctamente identificado en campo (TAG)",
            Estado: "",
            Observaciones: "", Notificar: false
          },
          {
            Actividad: "Calificación instalacion",
            Tarea: "Soportación y fijaciones en buen estado",
            Estado: "",
            Observaciones: "", Notificar: false
          },
          {
            Actividad: "Calificación instalacion",
            Tarea: "Correcta instalación de puesta a tierra del equipo (Gland, Equipo, Estructura)",
            Estado: "",
            Observaciones: "", Notificar: false
          },
          {
            Actividad: "Calificación Operación",
            Tarea: "Inspección visual y limpieza del equipo",
            Estado: "",
            Observaciones: "", Notificar: false
          },
          {
            Actividad: "Calificación Operación",
            Tarea: "Realizar limpieza de sensor",
            Estado: "",
            Observaciones: "", Notificar: false
          },
          {
            Actividad: "Calificación Operación",
            Tarea: "Realizar limpieza y reaprete de borneras",
            Estado: "",
            Observaciones: "", Notificar: false
          },
          {
            Actividad: "Calificación Operación",
            Tarea: "Engrase de tornillería exterior (Conexiones a tierra, pernos de fijación, etc)",
            Estado: "",
            Observaciones: "", Notificar: false
          },
          {
            Actividad: "Calificación Operación",
            Tarea: "Comprobación tensión de alimentación del equipo",
            Estado: "",
            Observaciones: "", Notificar: false
          },
          {
            Actividad: "Calificación Operación",
            Tarea: "Verificación de pre alarma",
            Estado: "",
            Observaciones: "", Notificar: false
          },
          {
            Actividad: "Calificación Operación",
            Tarea: "Verificación de alarma",
            Estado: "",
            Observaciones: "", Notificar: false
          },
          {
            Actividad: "Calificación Operación",
            Tarea: "Verificación de alarma de falla",
            Estado: "",
            Observaciones: "", Notificar: false
          },
          {
            Actividad: "Calificación instalacion",
            Tarea: "Inspección y reposición de amarras de cables",
            Estado: "",
            Observaciones: "", Notificar: false
          },
          {
            Actividad: "Calificación Desempeño",
            Tarea: "Pruebas funcionales",
            Estado: "",
            Observaciones: "", Notificar: false
          },
          {
            Actividad: "Calificación Desempeño",
            Tarea: "Calibración de equipo",
            Estado: "",
            Observaciones: "", Notificar: false
          }
        ],
        DatosNumericos: [
          {
            Actividad: "Mediciones eléctricas del motor",
            Tarea: "Medición resistencia entre bobinas",
            Bornes: "U - V",
            Medicion: "10 Ω",
            MedicionAnterior: "12 Ω",
            Notificar: false
          },
          {
            Actividad: "Mediciones eléctricas del motor",
            Tarea: "Medición resistencia entre bobinas",
            Bornes: "U - W",
            Medicion: "11 Ω",
            MedicionAnterior: "11 Ω",
            Notificar: false
          },
          {
            Actividad: "Mediciones eléctricas del motor",
            Tarea: "Medición resistencia entre bobinas",
            Bornes: "V - W",
            Medicion: "9 Ω",
            MedicionAnterior: "8 Ω",
            Notificar: false
          },
          {
            Actividad: "Mediciones eléctricas del motor",
            Tarea: "Medición resistencia entre bobinas",
            Bornes: "U - TIERRA",
            Medicion: "0 Ω",
            MedicionAnterior: "0 Ω",
            Notificar: false
          },
          {
            Actividad: "Mediciones eléctricas del motor",
            Tarea: "Medición resistencia entre bobinas",
            Bornes: "V - TIERRA",
            Medicion: "0 Ω",
            MedicionAnterior: "6 Ω",
            Notificar: false
          },
          {
            Actividad: "Mediciones eléctricas del motor",
            Tarea: "Medición resistencia entre bobinas",
            Bornes: "W - TIERRA",
            Medicion: "0 Ω",
            MedicionAnterior: "0 Ω",
            Notificar: false
          },
          {
            Actividad: "Mediciones eléctricas en alimentadores",
            Tarea: "Medición resistencia entre bobinas",
            Bornes: "L1-L2",
            Medicion: "0 Ω",
            MedicionAnterior: "10 Ω",
            Notificar: false
          },
          {
            Actividad: "Mediciones eléctricas en alimentadores",
            Tarea: "Medición resistencia entre bobinas",
            Bornes: "L1-L3",
            Medicion: "0 Ω",
            MedicionAnterior: "10 Ω",
            Notificar: false
          },
          {
            Actividad: "Mediciones eléctricas en alimentadores",
            Tarea: "Medición resistencia entre bobinas",
            Bornes: "L2-L3",
            Medicion: "0 Ω",
            MedicionAnterior: "50 Ω",
            Notificar: false
          },
          {
            Actividad: "Mediciones eléctricas en alimentadores",
            Tarea: "Medición resistencia entre bobinas",
            Bornes: "L1-TIERRA",
            Medicion: "0 Ω",
            MedicionAnterior: "10 Ω",
            Notificar: false
          },
          {
            Actividad: "Mediciones eléctricas en alimentadores",
            Tarea: "Medición resistencia entre bobinas",
            Bornes: "L2-TIERRA",
            Medicion: "0 Ω",
            MedicionAnterior: "10 Ω",
            Notificar: false
          },
          {
            Actividad: "Mediciones eléctricas en alimentadores",
            Tarea: "Medición resistencia entre bobinas",
            Bornes: "L3-TIERRA",
            Medicion: "0 Ω",
            MedicionAnterior: "10 Ω",
            Notificar: false
          },
          {
            Actividad: "Mediciones puesta a tierra",
            Tarea: "Valor maximo 5 Ω",
            Bornes: "TIERRA",
            Medicion: "0 Ω",
            MedicionAnterior: "4 Ω",
            Notificar: false
          },
          {
            Actividad: "Mediciones puesta a tierra",
            Tarea: "Valor maximo 5 Ω",
            Bornes: "TIERRA",
            Medicion: "0 Ω",
            MedicionAnterior: "4 Ω",
            Notificar: false
          },
          {
            Actividad: "Mediciones equipo",
            Tarea: "Valores de Corriente Campo a 4 mA",
            Bornes: "mA",
            Medicion: "0",
            MedicionAnterior: "0",
            Notificar: false
          },
          {
            Actividad: "Mediciones equipo",
            Tarea: "Valores de Corriente Campo a 8 mA",
            Bornes: "mA",
            Medicion: "0",
            MedicionAnterior: "0",
            Notificar: false
          }
        ]
        ,
        CheckList2: [
          {
            Actividad: "Calificación Diseño",
            Tarea: "Vida útil del instrumento/obsolescencia",
            Estado: "Aprueba",
            Observaciones: "", Notificar: false
          },
          {
            Actividad: "Calificación Diseño",
            Tarea: "Resistencia a golpes y vibraciones hasta 4G",
            Estado: "No Aprueba",
            Observaciones: "", Notificar: false
          },
          {
            Actividad: "Calificación Diseño",
            Tarea: "Equipo cumple con clasificación UL seguridad intrínseca",
            Estado: "No Aplica",
            Observaciones: "", Notificar: false
          },
          {
            Actividad: "Calificación Diseño",
            Tarea: "Equipo cumple para trabajo en atmósfera explosiva ATEX",
            Estado: "Aprueba",
            Observaciones: "", Notificar: false
          },
          {
            Actividad: "Calificación Instalación",
            Tarea: "Correcta ubicación y orientación del equipo",
            Estado: "Aprueba",
            Observaciones: "", Notificar: false
          },
          {
            Actividad: "Calificación Instalación",
            Tarea: "Montaje del instrumento con espacio libre para evitar darios mecanicos",
            Estado: "Aprueba",
            Observaciones: "", Notificar: false
          },
          {
            Actividad: "Calificación Instalación",
            Tarea: "Acceso y visibili dad del instrumento",
            Estado: "Aprueba",
            Observaciones: "", Notificar: false
          },
          {
            Actividad: "Calificación Instalación",
            Tarea: "Revision de sujeción de conectores gland",
            Estado: "Aprueba",
            Observaciones: "", Notificar: false
          },
          {
            Actividad: "Calificación Instalación",
            Tarea: "Instrumento y caja de conexiones se encuentra hermeticamente sellado",
            Estado: "Aprueba",
            Observaciones: "", Notificar: false
          },
          {
            Actividad: "Calificación Instalación",
            Tarea: "Inspección y reposición de amarras cables",
            Estado: "Aprueba",
            Observaciones: "", Notificar: false
          },
          {
            Actividad: "Calificación Instalación",
            Tarea: "Deterioro fisico del equipo (sulfatación, corrosión)",
            Estado: "Aprueba",
            Observaciones: "", Notificar: false
          },
          {
            Actividad: "Calificación Instalación",
            Tarea: "Estado de conexiones a tierra (limpieza, cortadas, no instaladas)",
            Estado: "Aprueba",
            Observaciones: "", Notificar: false
          },
          {
            Actividad: "Calificación Instalación",
            Tarea: "Revisión de elementos mecánicos de sujeción tornillos, pernos (instalados)",
            Estado: "Aprueba",
            Observaciones: "", Notificar: false
          },
          {
            Actividad: "Calificación Instalación",
            Tarea: "Instrumento esta correctamente identificado en campo 'tag' (rotulado)",
            Estado: "Aprueba",
            Observaciones: "", Notificar: false
          },
          {
            Actividad: "Calificación Operación",
            Tarea: "Limpieza e inspeccion visual del equipo",
            Estado: "Aprueba",
            Observaciones: "", Notificar: false
          },
          {
            Actividad: "Calificación Operación",
            Tarea: "Reconexion de todos los terminales y verificacion de apriete de los mismos",
            Estado: "Aprueba",
            Observaciones: "", Notificar: false
          },
          {
            Actividad: "Calificación Operación",
            Tarea: "Comprobacion tension de alimentacion del equipo 24 vdc",
            Estado: "Aprueba",
            Observaciones: "", Notificar: false
          },
          {
            Actividad: "Calificación Operación",
            Tarea: "Revisar el filtro de la linea base y en caso de que no lo tenga, reponer.(manual del fabricante) ",
            Estado: "Aprueba",
            Observaciones: "", Notificar: false
          },
          {
            Actividad: "Calificación Operación",
            Tarea: "Revisar parametros de configuracion del equipo (unidad de ingenieria etcetera) ",
            Estado: "Aprueba",
            Observaciones: "", Notificar: false
          },
          {
            Actividad: "Calificación Operación",
            Tarea: "Revisar deterioro fisico interno en caja de conexiones del detector (sulfatacion, corrosion, componentes)",
            Estado: "Aprueba",
            Observaciones: "", Notificar: false
          },
          {
            Actividad: "Calificación Operación",
            Tarea: "Engrase de tornilleria exterior y sellado ",
            Estado: "Aprueba",
            Observaciones: "", Notificar: false
          },
          {
            Actividad: "Calificación Desempeño",
            Tarea: "Comprobar indicador LED (verde) del detector en estado pasivo ",
            Estado: "Aprueba",
            Observaciones: "", Notificar: false
          },
          {
            Actividad: "Calificación Desempeño",
            Tarea: "Ajuste del punto Zero atmosferico",
            Estado: "Aprueba",
            Observaciones: "", Notificar: false
          },
          {
            Actividad: "Calificación Desempeño",
            Tarea: "Ajuste del SPAN con gas patron certificado por el fabricante (Sensibilidad) ",
            Estado: "Aprueba",
            Observaciones: "", Notificar: false
          },
          {
            Actividad: "Calificación Desempeño",
            Tarea: "Comprobar estado de luces LED del detector durante los ajustes de sensibilidad y zero atmosferico ",
            Estado: "Aprueba",
            Observaciones: "", Notificar: false
          },
          {
            Actividad: "Calificación Desempeño",
            Tarea: "Detector funciona consistentemente y entrega reproducibilidad en sistema de control ",
            Estado: "Aprueba",
            Observaciones: "", Notificar: false
          },
          {
            Actividad: "Calificación Desempeño",
            Tarea: "Corroborar normalizacion del estado de alarma en sistema de control ",
            Estado: "Aprueba",
            Observaciones: "", Notificar: false
          },
          {
            Actividad: "Calificación Desempeño",
            Tarea: "Requiere calibracion",
            Estado: "Aprueba",
            Observaciones: "", Notificar: false
          }
        ],
        Mediciones: [
          {
            PuntoMedida: "602",
            Descripcion: "Tolerancia GGH-03005",
            ValorMedido: ""

          }
        ],

        Estado: [

          {
            Select: "Selecione"
          },
          {
            Select: "Aprueba"
          },
          {
            Select: "No Aprueba"
          },
          {
            Select: "No Aplica"
          }

        ],
        UnidadMedida: [
          {
            Select: "Selecione"
          },
          {
            Select: "U - V"
          },
          {
            Select: "U - W"
          },
          {
            Select: "V - W"
          },
          {
            Select: "U - Tierra"
          },
          {
            Select: "V - Tierra"
          }

        ],
        Motivos: {
          SelectedMotivo: "0000", // Motivo seleccionado por defecto
          Lista: [ // Lista de motivos
            { key: "0000", text: "0000 - Seleccione motivo" },
            { key: "0001", text: "0001 - Sin Desviación" },
            { key: "0002", text: "0002 - Sin ventana operacional" },
            { key: "0003", text: "0003 - Factor climático" },
            { key: "0004", text: "0004 - Falta disponibilidad de Person" },
            { key: "0005", text: "0005 - Falta Herramienta o equipo" },
            { key: "0006", text: "0006 - Sin Stock de materiales" },
            { key: "0007", text: "0007 - Retrabajo" },
            { key: "0008", text: "0008 - Subestimación de HH" }
          ]
        }
      };

      // Crear modelo JSON único
      const oModel = new JSONModel(oData);
      // Asignar el modelo combinado a la vista
      this.getView().setModel(oModel);
    }
  });
});