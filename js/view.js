
// for printarea
function printDiv(divName) {
	var printContents = document.getElementById(divName).innerHTML;
	var originalContents = document.body.innerHTML;

	document.body.innerHTML = printContents;

	window.print();

	document.body.innerHTML = originalContents;
}

// for fun_edit
function fun_edit(id)
{
	var view_url = $("#hidden_view").val();
	$.ajax({
		url: view_url,
		type:"GET", 
		data: {"id":id}, 
		success: function(result){
          //console.log(result);
          $("#edit_id").val(result.id);
          $("#edit_status_id").val(result.status_id);
          $("#edit_remark").val(result.remark);
          
      }
  });
}
$(document).ready(function () {
	$("#approve_date").datepicker();
	$("#loan_start_date").datepicker();
	$("#loan_end_date").datepicker();
	$("#extend_confirm_date").datepicker();
});
