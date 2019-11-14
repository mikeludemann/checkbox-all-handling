# checkbox all handling

Some methods with plain JavaScript and jQuery for checking all checkbox with 100 % functionality.

## Examples

### Plain JavaScript

```HTML
<label>
	<input type="checkbox" name="sample" id="all"/>Select all
</label>
<div id="checkboxlist">
	<label><input type="checkbox" class="custom--checkbox" name="sample[]"/>checkbox1</label><br/>
	<label><input type="checkbox" class="custom--checkbox" name="sample[]"/>checkbox2</label><br />
	<label><input type="checkbox" class="custom--checkbox" name="sample[]"/>checkbox3</label><br />
	<label><input type="checkbox" class="custom--checkbox" name="sample[]"/>checkbox4</label><br />
</div>
```

```JS
var all = document.getElementById("all");
var checkboxes = document.getElementsByClassName("custom--checkbox");

all.addEventListener("change", function(){

	if(this.checked == true){

		for(var i = 0; i < checkboxes.length; i++){

			checkboxes[i].checked = true;

		}

	} else {

		for(var i = 0; i < checkboxes.length; i++){

			checkboxes[i].checked = false;

		}

	}

});

window.onchange = function(){

	var ln = 0;

	for(var i=0; i< checkboxes.length; i++) {

		if(checkboxes[i].checked){

			ln++

		}

	}

	if(checkboxes.length == ln){

		all.checked = true;

	} else {

		all.checked = false;

	}

}
```

### jQuery

```HTML
<label>
  <input type="checkbox" name="sample" class="all"/>Select all
</label>

<div id="checkboxlist">
	<label><input type="checkbox" class="custom--checkbox" name="sample[]"/>checkbox1</label><br/>
	<label><input type="checkbox" class="custom--checkbox" name="sample[]"/>checkbox2</label><br />
	<label><input type="checkbox" class="custom--checkbox" name="sample[]"/>checkbox3</label><br />
	<label><input type="checkbox" class="custom--checkbox" name="sample[]"/>checkbox4</label><br />
</div>
```

```JS
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
```

#### Multipe Checkbox

```HTML
<ul>
	<li><label><input type="checkbox" class="all" data-group="1" /> Select all</label>
		<ul>
			<li><label><input type="checkbox" class="item" data-group="1" /> item 1</label></li>
			<li><label><input type="checkbox" class="item" data-group="1" /> item 2</label></li>
			<li><label><input type="checkbox" class="item" data-group="1" /> item 3</label></li>
		</ul>
	</li>
	<li><label><input type="checkbox" class="all" data-group="2" /> Select all</label>
		<ul>
			<li><label><input type="checkbox" class="item" data-group="2"/> item 1</label></li>
			<li><label><input type="checkbox" class="item" data-group="2"/> item 2</label></li>
			<li><label><input type="checkbox" class="item" data-group="2"/> item 3</label></li>
		</ul>
	</li>
	<li><label><input type="checkbox" class="all" data-group="3" /> Select all</label>
		<ul>
			<li><label><input type="checkbox" class="item" data-group="3"/> item 1</label></li>
			<li><label><input type="checkbox" class="item" data-group="3"/> item 2</label></li>
			<li><label><input type="checkbox" class="item" data-group="3"/> item 3</label></li>
		</ul>
	</li>
</ul>
```

```CSS
ul {
	list-style: none;
	margin-bottom: 10px;
}
label {
	display:block;
	padding:5px 10px;
}
label:first-child {
}
label:nth-child(n+2) {
	margin-left:1em;
}
input[type="checkbox"] {
	transform: scale(1.5);
	-webkit-transform: scale(1.5);
}
```

```JS
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
```