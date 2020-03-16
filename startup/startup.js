$(document).ready(function() {
  
  var idioma=
    {
        "sProcessing":     "Procesando...",
        "sLengthMenu":     "Mostrar _MENU_ registros",
        "sZeroRecords":    "Não encontou resultado",
        "sEmptyTable":     "Nenhum dado disponível",
        "sInfo":           "Mostrando registros de _START_ a _END_ de um total de _TOTAL_ registros",
        "sInfoEmpty":      "Mostrando registros de 0 a 0 de um total de 0 registros",
        "sInfoFiltered":   "(filtrado de um total de _MAX_ registros)",
        "sInfoPostFix":    "",
        "sSearch":         "Buscar:",
        "sUrl":            "",
        "sInfoThousands":  ",",
        "sLoadingRecords": "Caregando...",
        "oPaginate": {
            "sFirst":    "Primeiro",
            "sLast":     "Último",
            "sNext":     "Seguinte",
            "sPrevious": "Anterior"
        },
        "oAria": {
            "sSortAscending":  ": Ativar para ordenar a coluna de gerenciamento ascendente",
            "sSortDescending": ": Ativar para ordenar a coluna de gerenciamento descendente"
        },
        "buttons": {
            "copyTitle": 'Informação copiada',
            "copyKeys": 'Use o teclado ou o menu para selecionar o comando de cópia',
            "copySuccess": {
                "_": '%d filas copiadas al portapapeles',
                "1": '1 fila copiada al portapapeles'
            },

            "pageLength": {
            "_": "Mostrar %d filas",
            "-1": "Mostrar Todo"
            }
        }
    };

    $("#example").DataTable({
      aaSorting: [],
      responsive: true,
      language: idioma,
      columnDefs: [
        {
          responsivePriority: 1,
          targets: 0
        },
        {
          responsivePriority: 2,
          targets: -1
        }
      ]
    });
  
   $(".dataTables_filter input")
   .attr("placeholder", "Pesquise no StartupBase...")
   .css({
      width: "300px",
      display: "inline-block"
    });

  //$('[data-toggle="tooltip"]').tooltip();
  });
  /*
  $.getJSON('../api/data.json', function(data) {
        
    var text = `Date: ${data.name}<br>
                Time: ${data.description}<br>
                Unix time: ${data.place}`
                
    
    $(".mypanel").html(text);
});
  var people = {
   "persons" : [
    {"name":"ABC", "address":"XYZ"},
    {"name":"PQR", "address":"STO"},
    {"name":"LMN", "address":"POP"}
   ]
  };

  console.log(people);
*/
  
//https://cdn.startupbase.com.br/uploads/hack-pocket/abstartups-data.json
  $.getJSON('../api/data.json', function(response) {
        
    //var text = `Date: ${data.name}<br>
      //          Time: ${data.description}<br>
       //         Unix time: ${data.place}`
    //var people = { "persons": [data] };
    //people.persons = data;
    //$.each(people, function(index, data){
    //console.log(data);
    var inHTML = "";
    $.each(response, function(index){
      //console.log(response);
      var newItem = '<tr>'+
        '<td>'+
          '<a href="#">'+
            '<div class="d-flex align-items-center">'+
              '<div class="avatar avatar-blue mr-3"><img src="'+((response[index].profile_image)? response[index].profile_image : "avatar.png")+'" width="48px" height="48px" alt="Imagem de Perfil"></div>'+
              '<div>'+
                '<p class="font-weight-bold mb-0">'+response[index].name+'</p>'+
                '<p class="text-muted mb-0 description">'+response[index].description+'</p>'+
              '</div>'+
            '</div>'+
          '</a>'+
        '</td>'+
        '<td>'+response[index].created_at+'</td>'+
        '<td>'+response[index].employees+'</td>'+
        '<td>'+response[index].place+'</td>'+
        '<td>'+
          ((response[index].business_phase !== 'Fora de Operação')? '<div class="badge badge-success badge-success-alt">Ativo</div>' : '<div class="badge badge-light badge-light-alt">Inativo</div>')+
        '</td>'+
        '<td>'+
          '<div>'+
              '<a href="./profile/index.html?name='+response[index].name+'&description='+response[index].description+'&avatar='+response[index].profile_image+'&status='+response[index].business_phase+'"><i class="bx bx-link-external"></i> Clique Aqui</a>'+
            '</div>'+
          '</div>'+
        '</td>'+
      '</tr>'
      inHTML += newItem;  
    });
    $("tbody#dynamicTable").html(inHTML); //add generated tr html to corresponding table
    //});
    //$(".mypanel").html(text);
});
/*
$.ajax({
  type: "GET",
  contentType: "application/json; charset=utf-8",
  url: '../api/person.json',
  async: false,
  dataType: 'json',
  success: function (response) {
      $.each(response, function(value){
          //alert(value)
          console.log(response);
      });
  }
})

  var inHTML = "";
  
  $.each(people, function(index, value){
      var newItem = '<tr>'+
        '<td>'+
          '<a href="#">'+
            '<div class="d-flex align-items-center">'+
              '<div class="avatar avatar-blue mr-3">'+value.name+'</div>'+
              '<div>'+
                '<p class="font-weight-bold mb-0">Ethan Black</p>'+
                '<p class="text-muted mb-0">ethan-black@example.com</p>'+
              '</div>'+
            '</div>'+
          '</a>'+
        '</td>'+
        '<td>(784) 667 8768</td>'+
        '<td>Designer</td>'+
        '<td>09/04/1996</td>'+
        '<td>'+
          '<div class="badge badge-success badge-success-alt">Enabled</div>'+
        '</td>'+
        '<td>'+
          '<div class="dropdown">'+
            '<button class="btn btn-sm btn-icon" type="button" id="dropdownMenuButton2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">'+
                '<i class="bx bx-dots-horizontal-rounded" data-toggle="tooltip" data-placement="top" title="Actions"></i>'+
                '</button>'+
            '<div class="dropdown-menu" aria-labelledby="dropdownMenuButton2">'+
              '<a class="dropdown-item" href="#"><i class="bx bxs-pencil mr-2"></i> Edit Profile</a>'+
              '<a class="dropdown-item text-danger" href="#"><i class="bx bxs-trash mr-2"></i> Remove</a>'+
            '</div>'+
          '</div>'+
        '</td>'+
      '</tr>'
      inHTML += newItem;  
  });
  
  $("tbody#dynamicTable").html(inHTML); //add generated tr html to corresponding table
  */