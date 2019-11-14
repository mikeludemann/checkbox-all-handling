(function($){

	$('.item').change(function(){

		var group = $(this).data('group'),
		checkall = $('.all[data-group="'+group+'"]');

		var checkSome = $('.item[data-group="'+group+'"]:checkbox:checked').length > 0;
		var uncheckSome = $('.item[data-group="'+group+'"]:checkbox:not(:checked)').length > 0;

		checkall.prop("indeterminate", checkSome && uncheckSome);
		checkall.prop("checked", checkSome || !uncheckSome);

	}).change();

	$('.all').click(function() {

		var group = $(this).data('group');

		$('.item[data-group="'+group+'"]').prop('checked', this.checked).change(); 

	});

}(window.jQuery));
