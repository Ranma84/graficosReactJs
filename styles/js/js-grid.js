(function($) {
  'use strict';
  $(function() {


    if ($("#js-grid").length) {
      $("#js-grid").jsGrid({
        height: "500px",
        width: "100%",
        filtering: true,
        editing: true,
        inserting: true,
        sorting: true,
        paging: true,
        autoload: true,
        pageSize: 15,
        pageButtonCount: 5,
        deleteConfirm: "Do you really want to delete the client?",
        data: db.clients,
        fields: [{
            name: "RUC",
            type: "text",
            width: 150
          },
          {
            name: "Razon",
            type: "text",
            width: 50
          },
          {
            name: "Contacto",
            type: "text",
            width: 200
          },
          {
            name: "Mail",
            type: "text",
            width: 200
          },
          {
            name: "Telefono",
            type: "text",
            width: 200
          },
          {
            name: "auditoria",
            type: "select",
            items: db.tipo_auditoria,
            valueField: "Id",
            textField: "Name"
          },
          {
            type: "control"
          }
        ]
      });
    }

    if ($("#js-grid2").length) {
      $("#js-grid2").jsGrid({
        height: "500px",
        width: "100%",
        filtering: true,
        editing: true,
        inserting: true,
        sorting: true,
        paging: true,
        autoload: true,
        pageSize: 15,
        pageButtonCount: 5,
        deleteConfirm: "Do you really want to delete the client?",
        data: db.preguntas,
        fields: [{
            name: "Pregunta",
            type: "text",
            width: 150
          },
          {
            type: "control"
          }
        ]
      });
    }



    if ($("#sort").length) {
      $("#sort").on("click", function() {
        var field = $("#sortingField").val();
        $("#js-grid-sortable").jsGrid("sort", field);
      });
    }

  });
})(jQuery);