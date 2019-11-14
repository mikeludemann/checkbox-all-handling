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
