$(document).ready(function () {
			validateEmail();
			function validateEmail(txtEmail) {
	// body...
	var filter = /^[^0-9][a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[@][a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,4}$/;
	// var filter=/[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/igm;
	if (filter.test(txtEmail)) {
		return true;
	}
	return false;
}
function validateText(txtText) {
	// body...
	var filter=/^[a-zA-Z0-9- ]*$/;
	if(filter.test(txtText)) return true;
	return false;
}

$("#login").on('submit', function () {
	if ($("#name").val() == '' || validateText($("#name").val())) {
	addClass('#name');	
		return false;
	}
	if ($("#pass").val() == '' || validateText($("#pass").val())  ) {
		addClass('#pass');
		return false;
	}
	return true;
});

function validatePhone(txtPhone) {
	var filter = /^[0-9-+]+$/;
	if (filter.test(txtPhone + "") && txtPhone.length >= 10 && txtPhone.length < 12) {
		return true;
	}
	else {
		return false;
	}
}

function addClass(selector) {
            	// body...
            	$(selector).toggleClass('red');
            }

            $("#dangki").on('submit', function () {

            	if ($("#firstName").val() == ''|| !validateText($("#firstName").val())) {
            		addClass('#firstName');
            		return false;
            	}
            	if ($("#lastName").val() =='' || !validateText($("#lastName").val())) {
            		addClass('#lastName');
            		return false;
            	}
            	if ($("#sdt").val() == '' || !validatePhone($("#sdt").val()) ) {
            		addClass('#sdt');
            		return false;
            	}
            	if ($("#passmoi").val() == '' || !validateText($("#passmoi").val())) {
            		addClass('#passmoi');
            		return false;
            	}
            	if ($("#email").val() == '' || !validateEmail($("#email").val()) ) {
            		addClass('#email');
            		return false;
            	}
            	return true;
            })
        });