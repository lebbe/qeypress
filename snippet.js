$(function() {
    $(window).qeypress('ctrl+s', function(e) {
	alert('you pressed ctrl+s');
	e.preventDefault();
	e.stopPropagation();
    }).qeypress('alt+p', function(e) {
	alert('you are awesome');
    });
});
