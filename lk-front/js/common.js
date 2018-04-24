
//popup

(function() {
	var tacticsBar = document.querySelector('.tactics-bar');
	var notification = document.querySelector('#notify');

	tacticsBar.addEventListener('mouseover', function(e) {
		notification.classList.toggle('show');
	});
	
})();


//modal 

(function() {
	var modal = document.getElementById('modal');
	var callback = document.getElementById('callback');
	var btnCloseModal = document.querySelector('.modal-close');

	callback.onclick = function() {
		modal.style.display = 'block';
	}

	btnCloseModal.onclick = function() {
		modal.style.display = "none";
	}

	window.onclick = function(event) {
		if (event.target == modal) {
			modal.style.display = "none";
		}
	}
})();
