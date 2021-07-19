$(document).ready(function () {

    jQuery('#get-quote-form').on('submit', function (e) {
        e.preventDefault();
        jQuery('#msg').html('Please wait...');
        jQuery('#btnSubmit').attr('disabled', true);
        jQuery.ajax({
          url: 'https://script.google.com/macros/s/AKfycbwQ7pVgCo2cuWFLHv-uVK5f8sRdTGEgl5A77bcbkuKrNmBRP4OwsvJujSH5DX6B86zHAw/exec',
          type: 'post',
          data: jQuery('#get-quote-form').serialize(),
          success: function (result) {
            jQuery('#get-quote-form')[0].reset();
            jQuery('#msg').html('Thank You! Your data has received. We will contact you shortly.');
            jQuery('#btnSubmit').attr('disabled', false);
          }
        });
      });
      
});
