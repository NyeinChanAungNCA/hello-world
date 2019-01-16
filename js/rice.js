 // Edit a post
 $(document).on('click', '.edit-modal', function() {
  $('.modal-title').text('Edit');
  $('#id_edit').val($(this).data('id'));

 $('#remark_edit').val($(this).data('remark'));
 id = $('#id_edit').val();
 $('#editModal').modal('show');
});

 $('.modal-footer').on('click', '.edit', function() {
   var base_url = window.location.origin;
   var url=base_url+'/R/rice/edit/' + id;
   $.ajaxSetup({
    headers: {
      'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    }
  })
   $.ajax({
    type: 'post',
    url: url,
    data: {
      '_token': $('input[name=_token]').val(),
      'id': $("#id_edit").val(),
      'remark': $('#remark_edit').val(),
    },
    success: function(data) {
      //console.log(data);
       location.reload(); 
   }
 });
 });
   // delete a post
   $(document).on('click', '.delete-modal', function() {
    $('.modal-title').text('Delete');
    $('#id_delete').val($(this).data('id'));
    $('#deleteModal').modal('show');
  });
   $('.modal-footer').on('click', '.delete', function() {
     var base_url = window.location.origin;
     var url=base_url+'/R/rice/delete';
     $.ajaxSetup({
      headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
      }
    })
     $.ajax({
      type: 'DELETE',
      url: url,
      data: {
        '_token': $('input[name=_token]').val(),
        'id': $('#id_delete').val(),
      },
      success: function(data) {
       location.reload();
       
      }
    });
   });