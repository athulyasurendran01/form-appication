$(function() {
  $("form[name='applicationForm']").validate({
    rules: {
        first_name: "required",
        degree: "required",
        state: "required",
        city: "required",
        program: "required",
      email: {
        required: true,
        email: true
      },
      phone: {
        required: true,
        minlength: 10,
        maxlength: 10
      }
    },
    // messages: {
    //   firstname: "Please enter your firstname",
    //   lastname: "Please enter your lastname",
    //   password: {
    //     required: "Please provide a password",
    //     minlength: "Your password must be at least 5 characters long"
    //   },
    //   email: "Please enter a valid email address"
    // },
    submitHandler: function(form) {
      
      $.ajax({
        method: "POST",
        url: "application.php",
        data: form.serialize(),
        success: function(){
          // form.reset();
          $("#message_box").html("Application has been sent successfully !")
        }
      })
    }
  });
});