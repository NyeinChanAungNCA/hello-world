 // Edit a post
 $(document).on('click', '.edit-edu-modal', function() {
  $('.modal-title').text('Edit Education');
  $('#id_edit').val($(this).data('id'));
  $('#staff_edit').val($(this).data('staff'));
  $('#degree_id_edit').val($(this).data('degree_id'));
  $('#specialization_id_edit').val($(this).data('specialization_id'));
  $('#institute_id_edit').val($(this).data('institute_id'));
  $('#get_date_edit').val($(this).data('get_date'));
  $('#stop_date_edit').val($(this).data('stop_date'));
  $('#qualified_edit').val($(this).data('qualified'));
  
  id = $('#id_edit').val();
  staff_id = $('#staff_edit').val();
  $('#editModal').modal('show');
});

 $('.modal-footer').on('click', '.edit', function() {
   var base_url = window.location.origin;
   var url=base_url+'/P/staff/education/edit/' + id;
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
      'degree_id': $("#degree_id_edit").val(),
      'institute_id': $('#institute_id_edit').val(),
      'specialization_id': $('#specialization_id_edit').val(),
      'start_date': $('#get_date_edit').val(),
      'end_date': $('#stop_date_edit').val(),
      'qualified': $('#qualified_edit').val(),
      
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
     var url=base_url+'/P/staff/education/delete';
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