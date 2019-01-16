 // Edit a post
 $(document).on('click', '.edit-modal', function() {
  $('.modal-title').text('Edit');
  $('#id_edit').val($(this).data('id'));
  $('#staff_edit').val($(this).data('staff'));
  $('#prize_type_id_edit').val($(this).data('prize_type_id'));
  $('#get_date_edit').val($(this).data('get_date'));
  $('#remark_edit').val($(this).data('remark'));
  id = $('#id_edit').val();
  staff_id = $('#staff_edit').val();
  $('#editModal').modal('show');
});

 $('.modal-footer').on('click', '.edit', function() {
   var base_url = window.location.origin;
   var url=base_url+'/P/staff/prize/edit/' + id;
   var gen = $('#gender_edit').val();
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
      'staff_id': $("#staff_edit").val(),
      'prize_type_id': $("#prize_type_id_edit").val(),
      'get_date': $('#get_date_edit').val(),
      'remark': $('#remark_edit').val(),
    },
    success: function(data) {
      
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
     var url=base_url+'/P/staff/prize/delete';
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