window.addEventListener('load', function(){

	var dropDownContent = document.getElementsByClassName('hideShow')[0];
	var dropDownMenu = document.getElementById('dropDownB');
	var shown = false;
	var backButton = document.getElementsByClassName('backButton')[0];

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
	
	backButton.addEventListener('click', function(){
		window.history.back();
	});

});