$(function(){
  var calculatedValueShown = false;

  var arg1 = ""
  var operator = ""
  var arg2 = ""

  $(".calculator-number").click(function() {
    if ($.inArray($("#calculator-display").val(), ['*', '+', '-', '/']) >= 0 || calculatedValueShown) {
      $("#calculator-display").val("");
      calculatedValueShown = false
    }
    
    $("#calculator-display").val($("#calculator-display").val() + $(this).val());
  })


  $(".calculator-operator").click(function() {
    arg1 = $("#calculator-display").val();
    $("#calculator-display").val($(this).val());
    operator = $("#calculator-display").val();
  })

  $("#calculator-clear").click(function() {
    arg1 = "";
    operator = "";
    arg2 = "";
    $("#calculator-display").val("");
  })



  $("#calculator-equal").click(function() {
    
    arg2 = $("#calculator-display").val();

    var data = JSON.stringify({
      arg1: arg1,
      arg2: arg2,
      operator: operator,
    })

    $.ajax({
      type: "POST",
      url: "/calculate",
      data: data,
      headers: {
        "Content-Type": "application/json"
      },
      success: function(result) {
        console.log("result: " + result['calculated_value']);
        $("#calculator-display").val(result['calculated_value']);
      },
      error: function(result) {
        console.log("error: " + result);
        $("#calculator-display").val('error');
      }
    });

    calculatedValueShown = true;
    arg1 = ""
    operator = ""
    arg2 = ""
  })

  $("#calculator-reverse").click(function() {
    
    arg1 = $("#calculator-display").val();

    var data = JSON.stringify({
      arg1: arg1,
      arg2: "",
      operator: "",
    })

    $.ajax({
      type: "POST",
      url: "/reverse",
      data: data,
      headers: {
        "Content-Type": "application/json"
      },
      success: function(result) {
        console.log("result: " + result['calculated_value']);
        $("#calculator-display").val(result['calculated_value']);
      },
      error: function(result) {
        console.log("error: " + result);
        $("#calculator-display").val('error');
      }
    });

    calculatedValueShown = true;
    arg1 = ""
    operator = ""
    arg2 = ""
  })

  $("#calculator-sort").click(function() {
    
    arg1 = $("#calculator-display").val();

    var data = JSON.stringify({
      arg1: arg1,
      arg2: "",
      operator: "",
    })

    $.ajax({
      type: "POST",
      url: "/sort",
      data: data,
      headers: {
        "Content-Type": "application/json"
      },
      success: function(result) {
        console.log("result: " + result['calculated_value']);
        $("#calculator-display").val(result['calculated_value']);
      },
      error: function(result) {
        console.log("error: " + result);
        $("#calculator-display").val('error');
      }
    });

    calculatedValueShown = true;
    arg1 = ""
    operator = ""
    arg2 = ""
  })

  $("#calculator-palindrome").click(function() {
    
    arg1 = $("#calculator-display").val();

    var data = JSON.stringify({
      arg1: arg1,
      arg2: "",
      operator: "",
    })

    $.ajax({
      type: "POST",
      url: "/palindrome",
      data: data,
      headers: {
        "Content-Type": "application/json"
      },
      success: function(result) {
        console.log("result: " + result['calculated_value']);
        $("#calculator-display").val(result['calculated_value']);
      },
      error: function(result) {
        console.log("error: " + result);
        $("#calculator-display").val('error');
      }
    });

    calculatedValueShown = true;
    arg1 = ""
    operator = ""
    arg2 = ""
  })

  $("#calculator-prime").click(function() {
    
    arg1 = $("#calculator-display").val();

    var data = JSON.stringify({
      arg1: arg1,
      arg2: "",
      operator: "",
    })

    $.ajax({
      type: "POST",
      url: "/prime",
      data: data,
      headers: {
        "Content-Type": "application/json"
      },
      success: function(result) {
        console.log("result: " + result['calculated_value']);
        $("#calculator-display").val(result['calculated_value']);
      },
      error: function(result) {
        console.log("error: " + result);
        $("#calculator-display").val('error');
      }
    });

    calculatedValueShown = true;
    arg1 = ""
    operator = ""
    arg2 = ""
  })
});