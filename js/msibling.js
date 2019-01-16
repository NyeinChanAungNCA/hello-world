 // Edit a post
 $(document).on('click', '.edit-modal', function() {
  $('.modal-title').text('Edit');
  $('#id_edit').val($(this).data('id'));
  $('#staff_edit').val($(this).data('staff'));
  $('#gender_edit').val($(this).data('gender'));
  $('#name_edit').val($(this).data('name'));
  $('#nationality_edit').val($(this).data('nationality'));
  $('#occupation_edit').val($(this).data('occupation'));
  $('#religion_edit').val($(this).data('religion'));
  $('#nrcno_edit').val($(this).data('nrcno'));
  $('#native_edit').val($(this).data('native'));
  $('#address_edit').val($(this).data('address'));
  id = $('#id_edit').val();
  staff_id = $('#staff_edit').val();
  $('#editModal').modal('show');
});
 $('.modal-footer').on('click', '.edit', function() {
   var base_url = window.location.origin;
   var url=base_url+'/P/staff/msibling/edit/' + id;
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
      'name': $('#name_edit').val(),
      'gender_id': $('#gender_edit').val(),
      'nrc_no': $('#nrcno_edit').val(),
      'nationality': $('#nationality_edit').val(),
      'religion': $('#religion_edit').val(),
      'occupation':$('#occupation_edit').val(),
      'native': $('#native_edit').val(),
      'address': $('#address_edit').val(),
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
     var url=base_url+'/P/staff/msibling/delete';
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