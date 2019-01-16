 // Edit a post
 $(document).on('click', '.edit-modal', function() {
  $('.modal-title').text('Edit');
  $('#id_edit').val($(this).data('id'));
  $('#staff_edit').val($(this).data('staff'));
  $('#personalize_no_edit').val($(this).data('personalize_no'));
  $('#lesson_no_edit').val($(this).data('lesson_no'));
  $('#reason_edit').val($(this).data('reason'));
  $('#serve_army_edit').val($(this).data('serve_army'));
  $('#crime_edit').val($(this).data('crime'));
  $('#salary_edit').val($(this).data('salary'));
  $('#start_date_edit').val($(this).data('start_date'));
  $('#end_date_edit').val($(this).data('end_date'));
    $('#commission_date_edit').val($(this).data('commission_date'));
  id = $('#id_edit').val();
  staff_id = $('#staff_edit').val();
  $('#editModal').modal('show');
});

 $('.modal-footer').on('click', '.edit', function() {
   var base_url = window.location.origin;
   var url=base_url+'/P/staff/cadet/edit/' + id;
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
      'personalize_no': $('#personalize_no_edit').val(),
      'lesson_no': $('#lesson_no_edit').val(),
      'reason': $('#reason_edit').val(),
      'serve_army': $('#serve_army_edit').val(),
      'crime': $('#crime_edit').val(),
      'salary': $('#salary_edit').val(),
      'start_date': $('#start_date_edit').val(),
      'end_date': $('#end_date_edit').val(),
      'commission_date' : $('#commission_date_edit').val(),
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
     var url=base_url+'/P/staff/cadet/delete';
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