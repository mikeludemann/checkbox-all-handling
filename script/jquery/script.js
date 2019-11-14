$('.all').click(function() {

	if ($(this).is(':checked')) {

		$('input:checkbox').prop('checked', true);

	} else {

		$('input:checkbox').prop('checked', false);

	}

});

$("input[type='checkbox'].custom--checkbox").change(function(){

	var a = $("input[type='checkbox'].custom--checkbox");

	if(a.length == a.filter(":checked").length){

		$('.all').prop('checked', true);

	} else {

		$('.all').prop('checked', false);

	}

});
