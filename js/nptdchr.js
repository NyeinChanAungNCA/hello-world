   $(document).ready(function(){
    setTimeout(function() {
      $('#successMessage').fadeOut('slow');
    }, 20000); 
   });
   // for printarea
   function printDiv(divName) {
    $("#onduty_length").hide();
    $("#onduty_filter").hide();
    $("#onduty_info").hide();
    $("#onduty_paginate").hide();
    $(".action").hide();
    var printContents = document.getElementById(divName).innerHTML;
    var originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;

    window.print();

    document.body.innerHTML = originalContents;
    $("#onduty_length").show();
    $("#onduty_filter").show();
    $("#onduty_info").show();
    $("#onduty_paginate").show();
    $(".action").show();
  }

  /*JS for back*/
  function goBack() {
    window.history.back();
  };
  /*date picker */
  $(document).ready(function () {  
    $('#start_date').datepicker({
     autoclose: true,
     format: 'dd-mm-yyyy',
     todayHighlight: true,
     defaultDate:false
   })
    $('#start_date_edit').datepicker({
      autoclose: true,
      format: 'dd-mm-yyyy',
      todayHighlight: true,
      defaultDate:false
    })
     $('#dob').datepicker({
      autoclose: true,
      format: 'dd-mm-yyyy',
      todayHighlight: true,
      defaultDate:false
    });

    $('#end_date').datepicker({
     autoclose: true,
     format: 'dd-mm-yyyy',
     todayHighlight: true,
     defaultDate:false
   })

    $('#end_date_edit').datepicker({
      autoclose: true,
      format: 'dd-mm-yyyy',
      todayHighlight: true,
      defaultDate:false
    })
    $('#order_date').datepicker({
     autoclose: true,
     format: 'dd-mm-yyyy',
     todayHighlight: true,
     defaultDate:false
   })

    $('#order_date_edit').datepicker({
      autoclose: true,
      format: 'dd-mm-yyyy',
      todayHighlight: true,
      defaultDate:false
    })
    $('#commission_date').datepicker({
     autoclose: true,
     format: 'dd-mm-yyyy',
     todayHighlight: true,
     defaultDate:false
   })
    $('#commission_date_edit').datepicker({
     autoclose: true,
     format: 'dd-mm-yyyy',
     todayHighlight: true,
     defaultDate:false
   })
    $('#dob_edit').datepicker({
      autoclose: true,
      format: 'dd-mm-yyyy',
      todayHighlight: true,
      defaultDate:false
    })
    /* for prize*/
    $('#get_date').datepicker({
      viewMode: "years", 
      minViewMode: "years",
      format: 'yyyy',
      autoclose: true,
      todayHighlight: true,
      defaultDate:false
    })
    $('#get_date_edit').datepicker({
      viewMode: "years", 
      minViewMode: "years",
      format: 'yyyy',
      autoclose: true,
      todayHighlight: true,
      defaultDate:false
    })
    /* Education*/
    $('#get_start_year').datepicker({
      viewMode: "years", 
      minViewMode: "years",
      format: 'yyyy',
      autoclose: true,
      todayHighlight: true,
      defaultDate:false
    })
    $('#get_end_year').datepicker({
      viewMode: "years", 
      minViewMode: "years",
      format: 'yyyy',
      autoclose: true,
      todayHighlight: true,
      defaultDate:false
    })

    $('#stop_date').datepicker({
      viewMode: "years", 
      minViewMode: "years",
      format: 'yyyy',
      autoclose: true,
      todayHighlight: true,
      defaultDate:false
    })
    $('#stop_date_edit').datepicker({
      viewMode: "years", 
      minViewMode: "years",
      format: 'yyyy',
      autoclose: true,
      todayHighlight: true,
      defaultDate:false
    })
    $('#get_month').datepicker({
      viewMode: "months", 
      minViewMode: "months",
      format: 'dd-mm-yyyy',
      autoclose: true,
      todayHighlight: true,
      defaultDate:false
    })
    $('#get_mon').datepicker({
      viewMode: "months", 
      minViewMode: "months",
      format: 'dd-mm-yyyy',
      autoclose: true,
      todayHighlight: true,
      defaultDate:false
    })

  });

  /*NRC*/
  $('select[name="region"]').on('change', function() {
    var regionID = $(this).val();
    var base_url = window.location.origin;
    var x = base_url;
    if(regionID) {
      $.ajax({
        url: x +'/ajax/' + regionID,
        type: "GET",
        dataType: "JSON",
        success:function(data) {  
          $('select[name="township"]').empty();
          $.each(data, function(key, value) {                      
            $('select[name="township"]').append('<option value="'+ key +'" {{old("township") == key ? "selected":""}}> '+ value +' </option>');
          });
        }
      });
    }else{
            // $('select[name="township"]').empty();
          }

        });
  // get Duty Position

  $('select[name="duty_select"]').on('change', function() {
    var duty_id = $(this).val();
    var base_url = window.location.origin;
    var x = base_url;
    if(duty_id) {
      $.ajax({
        url: x + '/pos/' + duty_id,
        type: "GET",
        dataType: "JSON",
        success:function(data) { 
          console.log(data);
          $('select[name="position_id"]').empty();
          $('select[name="position_id"]').append('<option value=""> ရွေးပါ </option>');
          $.each(data, function(key, value) {      

            $('select[name="position_id"]').append('<option value="'+ key +'"> '+ value +' </option>');
          });
        }
      });
    }else{
          // $('select[name="township"]').empty();
        }
      });
// end Duty Position



// end Duty Position

// get name
$('select[name="position_id"]').on('change', function() {
  var position_id = $(this).val();
  var base_url = window.location.origin;
  var x = base_url;

  if(position_id) {
    $.ajax({
      url: x +'/name/'+position_id,
      type: "GET",
      dataType: "JSON",
      success:function(data) { 
       console.log(data);
       $('select[name="name_select"]').empty();
       $('select[name="name_select"]').append('<option value=""> ရွေးပါ </option>');
       $.each(data, function(key, value) {      
        $('select[name="name_select"]').append('<option value="'+ key +'"> '+ value +' </option>');
      });
     }
   });
  }else{
          // $('select[name="township"]').empty();
        }

      });

// get name 

// get dept

$('select[name="name_select"]').on('change', function() {
  var name = $(this).val();
  var base_url = window.location.origin;
  var x = base_url;

  if(name) {
    $.ajax({
      url: x + '/dept/'+name,
      type: "GET",
      dataType: "JSON",
      success:function(data) { 

        $('select[name="dept_select"]').empty();
        
        $.each(data, function(key, value) {      
          $('select[name="dept_select"]').append('<option  value="'+ key +'"> '+ value +' </option>');
        });
      }
    });
  }else{

  }

});

// get dept-position
$('select[name="name_sel"]').on('change', function() {

  var id = $(this).val();
  var base_url = window.location.origin;
  var x = base_url;

  if(id) {
    $.ajax({
      url: x + '/deptpos/'+id,
      type: "GET",
      dataType: "JSON",
      success:function(data) { 
       console.log(data);
       $('select[name="dept_sel"]').empty();
       $.each(data, function(key, value) {   
        $('select[name="dept_sel"]').append('<option value="'+ key +'"> '+ value+' </option>');
      });
     }
   });
  }else{
  }

});

// get total salary
$('select[name="dept"]').on('change', function(e) {
  var mon = $("#get_month").val();
  var id = $(this).val();
  var base_url = window.location.origin;
  var x = base_url;

  if(id) {
    $.ajax({
      url: x + '/total-salary/'+id + '/' + mon,
      type: "GET",
      dataType: "JSON",
      success:function(data) { 
        $("#total_salary").val(data);
        e.preventDefault();
        $(this).val('');
      }
    });
  }else{
  }
});

// get salary functionary
  $('select[name="staff_id"]').on('change', function() {
   
    var id = $(this).val();
    var mon = $("#get_month").val();
    var base_url = window.location.origin;
    var x = base_url;

    if(id) {
      $.ajax({
        url: x + '/getsal/'+id + '/' + mon,
        type: "GET",
        dataType: "JSON",
        success:function(data) {
         console.log(data[0]);
            $("#salary_a").val(data[0]);
            $("#salary_b").val(data[1]);

  
        }
      });
    }else{

    }

  });
// end get salary functionary

// get salary personnel

  $('select[name="name"]').on('change', function() {
   
    var id = $(this).val();
    var base_url = window.location.origin;
    var x = base_url;

    if(id) {
      $.ajax({
        url: x + '/getsalpersonnel/'+id,
        type: "GET",
        dataType: "JSON",
        success:function(data) { 
          console.log(data);
            $("#salary_a").val(data[0]);
            $("#salary_c").val(data[1]);
        }
      });
    }else{

    }

  });
// end get salary personnel
 
/*Sub Department, Mini Department*/
$(document).ready(function() {
  $('select[name="department_id"]').on('change', function() {

    var deptID = $(this).val();
    var base_url = window.location.origin;
    var x = base_url;
    if(deptID) {
      $.ajax({
        url: x +'/get_subdept_list/' + deptID,
        type: "GET",
        dataType: "JSON",
        success:function(data) {  
          console.log("sub_dept",data);
          $('select[name="sub_department_id"]').empty();
          $('select[name="sub_department_id"]').append('<option value="">ဌာနခွဲရွေးရန်</option>');
          $.each(data, function(key, value) {                      
            $('select[name="sub_department_id"]').append('<option value="'+ key +'"> '+ value +' </option>');
          });
        }
      });
    }else{
      $('select[name="sub_department_id"]').empty();
    }
  });

  $('select[name="sub_department_id"]').on('change', function() {
    var subID = $(this).val();
    var base_url = window.location.origin;
    var x = base_url;
    if(subID) {
      $.ajax({
        url: x +'/get_minidept_list/' + subID,
        type: "GET",
        dataType: "JSON",
        success:function(data) {  
          console.log("mini_dept",data);
          $('select[name="mini_department_id"]').empty();
          $('select[name="mini_department_id"]').append('<option value="">ဌာနစုရွေးရန်</option>');
          $.each(data, function(key, value) {                      
            $('select[name="mini_department_id"]').append('<option value="'+ key +'"> '+ value +' </option>');
          });
        }
      });
    }else{
      $('select[name="mini_department_id"]').empty();
    }
  });
  $('select[name="mini_department_id"]').on('change', function() {
    var subID = $(this).val();
    var base_url = window.location.origin;
    var x = base_url;
    if(subID) {
      $.ajax({
        url: x +'/get_microdept_list/' + subID,
        type: "GET",
        dataType: "JSON",
        success:function(data) {  
          console.log("micro_dept",data);
          $('select[name="micro_department_id"]').empty();
          $('select[name="micro_department_id"]').append('<option value="">ဌာနစိတ်ရွေးရန်</option>');
          $.each(data, function(key, value) {                      
            $('select[name="micro_department_id"]').append('<option value="'+ key +'"> '+ value +' </option>');
          });
        }
      });
    }else{
      $('select[name="micro_department_id"]').empty();
    }
  });
  $('select[name="micro_department_id"]').on('change', function() {
    var subID = $(this).val();
    var base_url = window.location.origin;
    var x = base_url;
    if(subID) {
      $.ajax({
        url: x +'/get_nanodept_list/' + subID,
        type: "GET",
        dataType: "JSON",
        success:function(data) {  
          console.log("nano_dept",data);
          $('select[name="nano_department_id"]').empty();
          $('select[name="nano_department_id"]').append('<option value=""> ဌာနခွဲငယ်ရွေးရန်</option>');
          $.each(data, function(key, value) {                      
            $('select[name="nano_department_id"]').append('<option value="'+ key +'"> '+ value +' </option>');
          });
        }
      });
    }else{
      $('select[name="nano_department_id"]').empty();
    }
  });
  $('select[name="nano_department_id"]').on('change', function() {
    var subID = $(this).val();
    var base_url = window.location.origin;
    var x = base_url;
    if(subID) {
      $.ajax({
        url: x +'/get_picodept_list/' + subID,
        type: "GET",
        dataType: "JSON",
        success:function(data) {  
          console.log("pico_dept",data);
          $('select[name="pico_department_id"]').empty();
          $('select[name="pico_department_id"]').append('<option value="">ဌာနခွဲငယ်စိတ်ရွေးရန်</option>');
          $.each(data, function(key, value) {                      
            $('select[name="pico_department_id"]').append('<option value="'+ key +'"> '+ value +' </option>');
          });
        }
      });
    }else{
      $('select[name="pico_department_id"]').empty();
    }
  });
});

/*########################For Promotion Position##############################*/

$('select[name="department_id"]').on('change', function() {
  var deptID = $(this).val();
  var base_url = window.location.origin;
  var x = base_url;
  if(deptID) {
    $.ajax({
      url: x +'/dept_position/' + deptID,
      type: "GET",
      dataType: "JSON",
      success:function(data) {  
        $('select[name="position_control_id"]').empty();
        $('select[name="position_control_id"]').append('<option value="">ရာထူးများရွေးရန်</option>');
        $.each(data, function(key, value) {                      
          $('select[name="position_control_id"]').append('<option value="'+ key +'"> '+ value +' </option>');
        });
      }
    });
  }else{
    $('select[name="position_control_id"]').empty();
  }
});

$('select[name="sub_department_id"]').on('change', function() {
  var deptID = $(this).val();
  var base_url = window.location.origin;
  var x = base_url;
  if(deptID) {
    $.ajax({
      url: x +'/subdept_position/' + deptID,
      type: "GET",
      dataType: "JSON",
      success:function(data) {  
        $('select[name="position_control_id"]').empty();
        $('select[name="position_control_id"]').append('<option value="">ရာထူးများရွေးရန်</option>');
        $.each(data, function(key, value) {                      
          $('select[name="position_control_id"]').append('<option value="'+ key +'"> '+ value +' </option>');
        });
      }
    });
  }else{
    $('select[name="position_control_id"]').empty();
  }
});
$('select[name="mini_department_id"]').on('change', function() {
  var deptID = $(this).val();
  var base_url = window.location.origin;
  var x = base_url;
  if(deptID) {
    $.ajax({
      url: x +'/minidept_position/' + deptID,
      type: "GET",
      dataType: "JSON",
      success:function(data) {  
        $('select[name="position_control_id"]').empty();
        $('select[name="position_control_id"]').append('<option value="">ရာထူးများရွေးရန်</option>');
        $.each(data, function(key, value) {                      
          $('select[name="position_control_id"]').append('<option value="'+ key +'"> '+ value +' </option>');
        });
      }
    });
  }else{
    $('select[name="position_control_id"]').empty();
  }
});
$('select[name="micro_department_id"]').on('change', function() {
  var deptID = $(this).val();
  var base_url = window.location.origin;
  var x = base_url;
  if(deptID) {
    $.ajax({
      url: x +'/microdept_position/' + deptID,
      type: "GET",
      dataType: "JSON",
      success:function(data) {  
        $('select[name="position_control_id"]').empty();
        $('select[name="position_control_id"]').append('<option value="">ရာထူးများရွေးရန်</option>');
        $.each(data, function(key, value) {                      
          $('select[name="position_control_id"]').append('<option value="'+ key +'"> '+ value +' </option>');
        });
      }
    });
  }else{
    $('select[name="position_control_id"]').empty();
  }
});

$('select[name="nano_department_id"]').on('change', function() {
  var deptID = $(this).val();
  var base_url = window.location.origin;
  var x = base_url;
  if(deptID) {
    $.ajax({
      url: x +'/nanodept_position/' + deptID,
      type: "GET",
      dataType: "JSON",
      success:function(data) {  
        $('select[name="position_control_id"]').empty();
        $('select[name="position_control_id"]').append('<option value="">ရာထူးများရွေးရန်</option>');
        $.each(data, function(key, value) {                      
          $('select[name="position_control_id"]').append('<option value="'+ key +'"> '+ value +' </option>');
        });
      }
    });
  }else{
    $('select[name="position_control_id"]').empty();
  }
});
$('select[name="pico_department_id"]').on('change', function() {
  var deptID = $(this).val();
  var base_url = window.location.origin;
  var x = base_url;
  if(deptID) {
    $.ajax({
      url: x +'/picodept_position/' + deptID,
      type: "GET",
      dataType: "JSON",
      success:function(data) {  
        $('select[name="position_control_id"]').empty();
        $('select[name="position_control_id"]').append('<option value="">ရာထူးများရွေးရန်</option>');
        $.each(data, function(key, value) {                      
          $('select[name="position_control_id"]').append('<option value="'+ key +'"> '+ value +' </option>');
        });
      }
    });
  }else{
    $('select[name="position_control_id"]').empty();
  }
});

/*######################### End Position #######################*/

if(!ace.vars['touch']) {
  $('.chosen-select').chosen({allow_single_deselect:true}); 
          //resize the chosen on window resize
          
          $(window)
          .off('resize.chosen')
          .on('resize.chosen', function() {
            $('.chosen-select').each(function() {
              var $this = $(this);
              $this.next().css({'width': $this.parent().width()});
            })
          }).trigger('resize.chosen');
          //resize chosen on sidebar collapse/expand
          $(document).on('settings.ace.chosen', function(e, event_name, event_val) {
            if(event_name != 'sidebar_collapsed') return;
            $('.chosen-select').each(function() {
              var $this = $(this);
              $this.next().css({'width': $this.parent().width()});
            })
          });
          
          
          $('#chosen-multiple-style .btn').on('click', function(e){
            var target = $(this).find('input[type=radio]');
            var which = parseInt(target.val());
            if(which == 2) $('#form-field-select-4').addClass('tag-input-style');
            else $('#form-field-select-4').removeClass('tag-input-style');
          });
        }
// only number allow
$("input[type='number']").on('keydown',function(e){
  var key   = e.keyCode ? e.keyCode : e.which;
  if (!( [8, 9, 13, 27, 46, 110, 190].indexOf(key) !== -1 ||
   (key == 65 && ( e.ctrlKey || e.metaKey  ) ) || 
   (key >= 35 && key <= 40) ||
   (key >= 48 && key <= 57 && !(e.shiftKey || e.altKey)) ||
   (key >= 96 && key <= 105)
   )) e.preventDefault();

});