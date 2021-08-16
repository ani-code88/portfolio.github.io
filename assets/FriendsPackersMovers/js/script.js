// Contact Form Script
	  jQuery('#ContactFormSubmit').on('submit',function(e){
		e.preventDefault();
		jQuery('#msg').html('Please wait...');
		jQuery('#btnSubmit').attr('disabled',true);
		jQuery.ajax({
			url:'https://script.google.com/macros/s/AKfycbwS3fyKgetPCFjZ2jXOn33NRvdOVyjHj2KHn_fSR6KAKME7bfu3DxHLR7Wu5VfksNk/exec',
			type:'post',
			data:jQuery('#ContactFormSubmit').serialize(),
			success:function(result){
				jQuery('#ContactFormSubmit')[0].reset();
				jQuery('#msg').html('Thank You');
				jQuery('#btnSubmit').attr('disabled',false);
			}
		});
	  });
	  
	  
	  
// 	  Services Page Script
	  jQuery('#servicesForm').on('submit',function(e){
		e.preventDefault();
		jQuery('#servicesMsg').html('Please wait...');
		jQuery('#servicesBtnSubmit').attr('disabled',true);
		jQuery.ajax({
			url:'https://script.google.com/macros/s/AKfycbwNyXE4XJc-C8dmensrv3utemHY0dT27p4mCKzEENoBIeN6ETPyRXi5hxDKernl36KU/exec',
			type:'post',
			data:jQuery('#servicesForm').serialize(),
			success:function(result){
				jQuery('#servicesForm')[0].reset();
				jQuery('#servicesMsg').html('Thank You');
				jQuery('#servicesBtnSubmit').attr('disabled',false);
			}
		});
	  });
	  
	  
// 	  Home Page Get Quote Form Script
	  jQuery('#homePageGetQuoteForm').on('submit',function(e){
	      console.log("Script Started")
		e.preventDefault();
		jQuery('#homePageGetQuoteFormMsg').html('Please wait...');
		jQuery('#homePageGetQuoteFormSubmitBtn').attr('disabled',true);
		jQuery.ajax({
			url:'https://script.google.com/macros/s/AKfycbwXbNAmWraE0oD6XEoiljMtpeOi20yPPdgHuAYvsqK0CJ4Cko1k9eq8iBpJoGeB-7a9/exec',
			type:'post',
			data:jQuery('#homePageGetQuoteForm').serialize(),
			success:function(result){
				jQuery('#homePageGetQuoteForm')[0].reset();
				jQuery('#homePageGetQuoteFormMsg').html('Thank You! We will contact you shortly.');
				jQuery('#homePageGetQuoteFormSubmitBtn').attr('disabled',false);
				console.log("Script Ended")
			
			}
		});
	  });
	  