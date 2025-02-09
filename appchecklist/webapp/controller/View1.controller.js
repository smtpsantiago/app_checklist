sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/model/json/JSONModel",
  "sap/ui/model/odata/v2/ODataModel",
  "sap/m/MessageToast",
  "appchecklist/appchecklist/util/formatter",
  "sap/ui/core/Fragment",
  "sap/m/plugins/UploadSetwithTable"
], function (Controller, JSONModel, ODataModel, MessageToast, formatter, Fragment, UploadSetwithTable) {
  "use strict";

  return Controller.extend("appchecklist.appchecklist.controller.View1", {
    formatter: formatter,
    onInit: function () {
      var oComponentData = this.getOwnerComponent().getComponentData();
      var oStartupParams = (oComponentData && oComponentData.startupParameters) ? oComponentData.startupParameters : {};
      var sOrderId = null;

      // Obtener OrderId o establecer ID de prueba
      if (oStartupParams.OrderId && oStartupParams.OrderId.length > 0) {
        sOrderId = oStartupParams.OrderId[0];
        console.log(" Orden recibida en Aplicación A:", sOrderId);
      } else {
        console.warn(" No se recibió ningún OrderId en la navegación. Usando ID de prueba.");
        sOrderId = "400027717";
      }

      // Obtener otros parámetros y almacenarlos en variables
      var isChecklist = oStartupParams.IsChecklist ? oStartupParams.IsChecklist[0] === "true" : false;
      var isNumericlist = oStartupParams.IsNumericlist ? oStartupParams.IsNumericlist[0] === "true" : false;
      var textChecklist = oStartupParams.TextChecklist ? oStartupParams.TextChecklist[0] : "Sin especificar";

      console.log(" Parámetros de inicio recibidos:", {
        OrderId: sOrderId,
        IsChecklist: isChecklist,
        IsNumericlist: isNumericlist,
        TextChecklist: textChecklist
      });

      // Inicializar el modelo OData
      var oModel = this.getOwnerComponent().getModel();
      this.getView().setModel(oModel);

      // Inicializar modelo JSON con los valores recibidos
      var oData = {
        OrderId: sOrderId,
        IsChecklist: isChecklist,
        IsNumericlist: isNumericlist,
        TextChecklist: textChecklist,
        FechaInicio: "",
        FechaFin: "",
        UbicacionTecnica: "",
        Equipo: "",
        OT: "",
        HoraInicio: "",
        HoraFin: "",
        generalData: [],
        measurements: [],
        operations: [],
        checkList: [],
        numericData: [],
        workReceipt: [],
        uploadedFiles: [],
        Motivos: {
          SelectedMotivo: "",
          Lista: []
        }
      };

      var oJsonModel = new JSONModel(oData);
      this.getView().setModel(oJsonModel, "viewModel");

      // Cargar datos solo si hay un OrderId válido
      if (sOrderId) {
        this._loadData(sOrderId);
      } else {
        sap.m.MessageToast.show(" No se recibió un ID de orden válido.");
      }
    },

    /**
     * Realiza una solicitud POST para obtener los datos filtrados
     */
    _loadData: function (sOrderId) {
      var oModel = this.getView().getModel();
      var oJsonModel = this.getView().getModel("viewModel");
      var that = this;

      if (!oModel) {
        console.error("Error: El modelo OData no está disponible.");
        sap.m.MessageBox.error("El servicio OData no está disponible.");
        return;
      }

      // **Construcción del payload para la llamada POST**
      var oPayload = {
        Property: "CHECKLIST",
        Sign: "I",
        Option: "EQ",
        Low: sOrderId,
        generalData: [],
        measurements: [],
        operations: [],
        checkList: [],
        numericData: [],
        workReceipt: []
      };

      // **Mostrar indicador de carga**
      sap.ui.core.BusyIndicator.show(0);

      // **Llamada POST al servicio OData**
      oModel.create("/filtersSet", oPayload, {
        success: function (oData) {
          console.log("Datos obtenidos desde OData:", oData);

          // **Actualizar el modelo con los datos obtenidos**
          oJsonModel.setProperty("/generalData", oData.generalData.results || []);
          oJsonModel.setProperty("/measurements", oData.measurements.results || []);
          oJsonModel.setProperty("/operations", oData.operations.results || []);
          oJsonModel.setProperty("/checkList", oData.checkList.results || []);
          oJsonModel.setProperty("/numericData", oData.numericData.results || []);
          oJsonModel.setProperty("/workReceipt", oData.workReceipt.results || []);

          // **Asignar datos generales**
          if (oData.generalData && oData.generalData.results.length > 0) {
            var oGeneral = oData.generalData.results[0];
            oJsonModel.setProperty("/UbicacionTecnica", oGeneral.Ubicacion || "");
            oJsonModel.setProperty("/Equipo", oGeneral.Equipo || "");
            oJsonModel.setProperty("/OT", oGeneral.Aufnr || "");
            oJsonModel.setProperty("/FechaInicio", oGeneral.Fechainicio || "");
            oJsonModel.setProperty("/FechaFin", oGeneral.Fechafin || "");
            oJsonModel.setProperty("/HoraInicio", oGeneral.Horainicio || "");
            oJsonModel.setProperty("/HoraFin", oGeneral.Horafin || "");
          }
          oJsonModel.refresh(true);

          // **Ocultar indicador de carga**
          sap.ui.core.BusyIndicator.hide();
        },
        error: function (oError) {
          console.error("Error en la llamada POST a /filtersSet", oError);
          sap.m.MessageBox.error("Error al cargar los datos de la orden.");
          sap.ui.core.BusyIndicator.hide();
        }
      });
    },

    /**
     * Cancelar acción
     */
    onPressCancel: function () {
      MessageToast.show("Operación cancelada");
    },
    /**
  * Guardar acción
  */
    onPressSave: function () {

    },
    /**
      * onAttachFile acción #############onAttachFile####################################
      */
    onAttachFile: function () {
      var oView = this.getView();

      // Cargar el fragmento solo si no existe
      if (!this._oFileUploaderDialog) {
        Fragment.load({
          id: oView.getId(),
          name: "appchecklist.appchecklist.view.fragments.FileUploader",
          controller: this
        }).then(function (oDialog) {
          oView.addDependent(oDialog);
          this._oFileUploaderDialog = oDialog;
          this._oFileUploaderDialog.open();
        }.bind(this));
      } else {
        this._oFileUploaderDialog.open();
      }
    },

    onCloseFileUploaderDialog: function () {
      if (this._oFileUploaderDialog) {
        this._oFileUploaderDialog.close();
      }
    },
    /**
        * onFileSelected acción ##########onFileSelected#########################################
        */


    onFileSelected: function (oEvent) {
      var aFiles = oEvent.getParameter("files");
      var oViewModel = this.getView().getModel("viewModel");

      if (!aFiles || aFiles.length === 0) {
        MessageToast.show(" No se seleccionó ningún archivo.");
        return;
      }

      var aAttachments = oViewModel.getProperty("/attachments") || [];

      aFiles.forEach(function (oFile) {
        var reader = new FileReader();
        reader.onload = function (e) {
          var sFileContent = e.target.result.split(",")[1];

          var oAttachment = {
            fileName: oFile.name,
            fileSize: oFile.size,
            fileType: oFile.type,
            fileContent: sFileContent
          };

          aAttachments.push(oAttachment);
          oViewModel.setProperty("/attachments", aAttachments);
        };

        reader.readAsDataURL(oFile);
      });

      // Cerrar el diálogo después de la selección de archivos
      this.onCloseFileUploaderDialog();
    },
    /**
         * onPreviewFile acción ##########onPreviewFile#######################
         */


    onPreviewFile: function (oEvent) {
      var oItem = oEvent.getSource();
      var sFileContent = oItem.getCustomData()[0].getValue();
      var sFileType = oItem.getCustomData()[1].getValue();

      if (sFileContent) {
        var sDataUri = `data:${sFileType};base64,${sFileContent}`;
        window.open(sDataUri, "_blank");
      } else {
        MessageToast.show(" No se puede previsualizar el archivo.");
      }
    },


    /**
         * onSaveFiles acción ##########onSaveFiles#######################
         */
    onSaveFiles: function () {
      var oModel = this.getView().getModel();
      var oViewModel = this.getView().getModel("viewModel");
      var sOrderId = oViewModel.getProperty("/OrderId");
      var aAttachments = oViewModel.getProperty("/attachments") || [];

      if (!sOrderId) {
        MessageBox.error(" No se ha definido un ID de orden.");
        return;
      }

      if (aAttachments.length === 0) {
        MessageBox.warning(" No hay archivos para guardar.");
        return;
      }

      aAttachments.forEach(function (oAttachment) {
        var sSlug = `ORDER;${sOrderId};${oAttachment.fileName}`;

        oModel.create("/filesSet", {}, {
          headers: {
            "Slug": sSlug,
            "Content-Type": oAttachment.fileType
          },
          data: oAttachment.fileContent,
          success: function () {
            MessageToast.show(`Archivo cargado: ${oAttachment.fileName}`);
          },
          error: function (oError) {
            console.error(" Error al cargar el archivo:", oError);
            MessageBox.error(`Error al cargar el archivo: ${oAttachment.fileName}`);
          }
        });
      });

      // Limpiar la lista después de guardar
      oViewModel.setProperty("/attachments", []);
    },

    // ###############################
    // #### FOTO
    //####################################
    onFragmentPhoto: function () {
      var that = this;

      // Verificar si el fragmento ya está cargado
      if (!this._oPhotoDialog) {
        Fragment.load({
          id: this.getView().getId(),
          name: "appchecklist.appchecklist.view.fragments.UploadPhotos", // Ruta correcta del fragmento
          controller: this
        }).then(function (oDialog) {
          this.getView().addDependent(oDialog);
          this._oPhotoDialog = oDialog;
          this._oPhotoDialog.open();
        }.bind(this)).catch(function (error) {
          console.error("❌ Error al cargar el fragmento:", error);
        });
      } else {
        this._oPhotoDialog.open();
      }
    },
    onUploadAll: function (file) {
      var oUploadSet = this.byId("uploadSetPhotos");
  
      if (!oUploadSet) {
          console.error("❌ No se encontró el UploadSet. Verifica que el fragmento está cargado.");
          return;
      }
  
      // Si se recibe un archivo (cuando se toma una foto)
      if (file) {
          var oItem = new sap.m.UploadSetItem({
              fileName: file.name,
              mediaType: file.type,
              file: file
          });
  
          oUploadSet.addItem(oItem);
          sap.m.MessageToast.show("✅ Foto agregada: " + file.name);
      }
  
      // Obtener todos los archivos del UploadSet
      var aItems = oUploadSet.getItems();
      
      if (aItems.length === 0) {
          sap.m.MessageBox.warning("⚠️ No hay fotos para subir.");
          return;
      }
  
      // Simulación de subida de archivos (reemplázalo con la lógica real de OData)
      aItems.forEach(function (oItem) {
          console.log("📤 Subiendo archivo:", oItem.getFileName());
  
          // Simulación de subida exitosa
          setTimeout(function () {
              sap.m.MessageToast.show(`✅ Archivo subido: ${oItem.getFileName()}`);
          }, 1000);
      });
  
      // Cerrar el fragmento después de guardar
      if (this._oPhotoFragment) {
          this._oPhotoFragment.close();
      }
  },
  
    onBeforeUpload: function (oEvent) {
      let oItem = oEvent.getParameter("item");
      oEvent.getParameter("request").setUrl("/sap/opu/odata/sap/ZPM01_SRV/filesSet");
    },
    onUploadCompleted: function (oEvent) {
      let status = oEvent.getParameter("status");
      if (status === 200) {
        sap.m.MessageBox.success("Foto subida correctamente");
      } else {
        sap.m.MessageBox.error("Error al subir la foto");
      }
    },


    onCapturePhoto: function () {
      var that = this;
  
      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: true })
            .then(function (stream) {
                let video = document.createElement("video");
                video.srcObject = stream;
                video.play();
    
                let canvas = document.createElement("canvas");
                video.addEventListener("canplay", function () {
                    canvas.width = video.videoWidth;
                    canvas.height = video.videoHeight;
                    canvas.getContext("2d").drawImage(video, 0, 0);
    
                    // Convertir la imagen a Base64
                    let base64Image = canvas.toDataURL("image/png"); // Formato Base64
    
                    // Crear un archivo a partir de la imagen Base64
                    fetch(base64Image)
                        .then(res => res.blob()) // Convertir Base64 a Blob
                        .then(blob => {
                            let file = new File([blob], "foto_" + Date.now() + ".png", { type: "image/png" });
    
                            // Llamar a la función para agregar el archivo al UploadSet
                            that._addFileToUploadSet(file);
    
                            // Detener la transmisión de la cámara
                            stream.getTracks().forEach(track => track.stop());
                        });
                });
            })
            .catch(function (error) {
                sap.m.MessageBox.error("Error al acceder a la cámara: " + error.message);
            });
    } else {
        sap.m.MessageBox.error("La cámara no está disponible en este dispositivo.");
    }
  },
  _addFileToUploadSet: function (oEvent) {
    let status = oEvent.getParameter("status");
    if (status === 200) {
      sap.m.MessageBox.success("Foto subida correctamente");
    } else {
      sap.m.MessageBox.error("Error al subir la foto");
    }
  },
  onClosePhotoDialog: function () {
    if (this._oPhotoDialog) {
      this._oPhotoDialog.close();
    }
  },
  



   



  



  });
});