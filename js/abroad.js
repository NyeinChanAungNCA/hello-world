 // Edit a post
 $(document).on('click', '.edit-edu-modal', function() {
  $('.modal-title').text('Edit Education');
  $('#id_edit').val($(this).data('id'));
  $('#staff_edit').val($(this).data('staff'));
  $('#country_edit').val($(this).data('country'));
  $('#client_edit').val($(this).data('client'));
  $('#start_date_edit').val($(this).data('start_date'));
  $('#end_date_edit').val($(this).data('end_date'));
  $('#reason_edit').val($(this).data('reason'));
  $('#remark_edit').val($(this).data('remark'));
  $('#attend_class_edit').val($(this).data('attend_class'));
  $('#backing_edit').val($(this).data('backing'));
  id = $('#id_edit').val();
  staff_id = $('#staff_edit').val();
  $('#editModal').modal('show');
});

 $('.modal-footer').on('click', '.edit', function() {
   var base_url = window.location.origin;
   var url=base_url+'/NPTDC-HR/P/staff/abroad/edit/' + id;
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
      'country': $('#country_edit').val(),
      'client': $('#client_edit').val(),
      'start_date': $('#start_date_edit').val(),
      'end_date': $('#end_date_edit').val(),
      'reason': $('#reason_edit').val(),
      'remark': $('#remark_edit').val(),
      'attend_class': $('#attend_class_edit').val(),
      'backing': $('#backing_edit').val(),
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
     var url=base_url+'/NPTDC-HR/P/staff/abroad/delete';
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