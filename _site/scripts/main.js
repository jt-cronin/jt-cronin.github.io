window.addEventListener('load', function(){

	var dropDownContent = document.getElementsByClassName('hideShow')[0];
	var dropDownMenu = document.getElementById('dropDownB');
	var shown = false;

	dropDownMenu.addEventListener('click', function(){
		if (shown == false){
			dropDownContent.style.display = "block";
			shown = true;
		}
		else {
			dropDownContent.style.display = "none";
			shown = false;

		}
		
	});

});