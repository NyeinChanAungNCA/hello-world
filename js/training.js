 // Edit a post
 $(document).on('click', '.edit-training', function() {
  $('.modal-title').text($(this).data('name') + ' ၏အချက်အလက်များကို ပြင်ဆင်ခြင်း');
  $('#id_edit').val($(this).data('id'));
  $('#staff_edit').val($(this).data('staff'));

 $('#name_edit').val($(this).data('name'));
 $('#location_edit').val($(this).data('location'));
 $('#start_date_edit').val($(this).data('start_date'));
 $('#end_date_edit').val($(this).data('end_date'));
 $('#qualify_edit').val($(this).data('qualify'));
 id = $('#id_edit').val();
 staff_id = $('#staff_edit').val();
 $('#trainingModal').modal('show');
});

 $('.modal-footer').on('click', '.edit', function() {
   var base_url = window.location.origin;
   var url=base_url+'/P/staff/training/edit/' + id;
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
      'location': $('#location_edit').val(),
      'start_date': $('#start_date_edit').val(),
      'end_date': $('#end_date_edit').val(),
      'qualify': $('#qualify_edit').val(),
    },
    success: function(data) {
      //console.log(data);
       location.reload(); 
   }
 });
 });
   // delete a post
   $(document).on('click', '.delete-training', function() {
    $('.modal-title').text('Delete!!');
    $('#id_delete').val($(this).data('id'));
    $('#deleteTrainingModal').modal('show');
  });
   $('.modal-footer').on('click', '#delete_training', function() {
     var base_url = window.location.origin;
     var url=base_url+'/P/staff/training/delete';
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