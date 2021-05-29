// ---------------------------------------------------------------
// Change Background Color Of Top Bar on Scroll 
// ---------------------------------------------------------------
window.onscroll = function() {changeTopBarBg()};
	function changeTopBarBg() {
		if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
			document.getElementById("top-navigation").classList.add("changeHeaderBgOnScroll");
		}
		else{
			document.getElementById("top-navigation").classList.remove("changeHeaderBgOnScroll");
		}
	}