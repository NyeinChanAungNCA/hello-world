 // Edit a post
$(".close").on('click',function(e){
  location.reload();
});
$("#serviceModal").on('close',function(e){
  location.reload();
});
 $(document).on('click', '.edit-service', function() {
  $('.modal-title').text('အချက်အလက်များကို ပြင်ဆင်ခြင်း');
  $('#id_edit').val($(this).data('id'));
  $('#staff_edit').val($(this).data('staff'));

 $('#position_id_edit').val($(this).data('position_id'));
 $('#location_edit').val($(this).data('location'));
 $('#start_date_edit').val($(this).data('start_date'));
 $('#end_date_edit').val($(this).data('end_date'));
 $('#location_edit').val($(this).data('location'));
 $('#permit_edit').val($(this).data('permit'));
 $('#remark_edit').val($(this).data('remark'));

 
 id = $('#id_edit').val();
 staff_id = $('#staff_edit').val();
 $('#serviceModal').modal('show');
});

 $('.modal-footer').on('click', '.edit', function() {
   var base_url = window.location.origin;
   var url=base_url+'/P/staff/service/edit/' + id;
   alert($("#position_id_edit").val());
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
       location.reload(); 
   }
 });
 });
   // delete a post
   $(document).on('click', '.delete-service', function() {
    $('.modal-title').text('Delete!!');
    $('#id_delete').val($(this).data('id'));
    $('#deleteServiceModal').modal('show');
  });
   $('.modal-footer').on('click', '#delete_service', function() {
     var base_url = window.location.origin;
     var url=base_url+'/P/staff/service/delete';
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