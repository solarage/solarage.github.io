document.body.onload = function() {
	console.log('Welcome!!!');
	alert('Welcome!!!');
}


//footer nav

(function() {
	var container = document.querySelector(".footer-first");

	container.onclick = function(event) {
		if (!event.target.classList.contains('title')) return;

		event.target.nextElementSibling.classList.toggle('show');
	}
}())


//Converter

var first = document.getElementById('first');
			var second = document.getElementById('second');
			var form = document.querySelector('.form');
			var calculate = document.getElementById('calculate');
			var change = document.getElementById('change');

			rates = {};


			document.body.onload = (function(){
				// Загружаем курсы валют
				var getJSON = function(url, callback) {
					var xhr = new XMLHttpRequest();
					xhr.open('GET', url, true);
					xhr.responseType = 'json';
					xhr.onload = function() {
					  var status = xhr.status;
					  if (status == 200) {
						callback(xhr.response);
					  }
					};
					xhr.send();
				};

				// использование
				getJSON('../libs/json/latestUSD_0327.json',
				function(data){
					rates = data.rates;
				});
				
				calculate.onclick = function() calc();
				
				function calc() {

					var result, vfrom, vto, vcash;
					
					// Получаем сумму, которую нужно перевести
					vcash = document.getElementById('cash').value;

					// смена select при задействии кнопки change
					if (first === form.firstElementChild) {

						vfrom = document.getElementById('from').value;
						vto = document.getElementById('to').value; 

					} else {

						vfrom = document.getElementById('to').value;
						vto = document.getElementById('from').value;
					}
 
					// Заменяем в значении переводимой валюты одни символы на другие
					vcash = vcash.replace(',', '\.')
								 .replace(' ', '')
								 .replace(' ', '');
					
					//key "base" from latestCurrency.json

					if (rates[vfrom] === undefined) {
						rates[vfrom] = 1;
					} 

					// Вычисляем результат

					result = rates[vto] * vcash / rates[vfrom];

					
					// Переводим
					result = result.toFixed(2)
								   .toString()
								   .replace('\.', ',');
 
					result = 'Результат перевода: ' + result + '&nbsp;' + vto;
					console.log(result);
					// Выводим результат
					document.getElementById('result').innerHTML = result;
					
				};

				//кнопка change

				document.getElementById('change').onclick = function() {

					var firstLabel = document.querySelector('.first label');
					var secondLabel = document.querySelector('.second label');
				
					if (first === form.firstElementChild) {
						form.insertBefore(second, first);
						form.appendChild(first);
						firstLabel.textContent = 'Расчётная валюта: ';
						secondLabel.textContent = 'Исходная валюта: ';
						calc();       

					} else {
						form.insertBefore(first, second);
						form.appendChild(second);
						firstLabel.textContent = 'Исходная валюта: ';
						secondLabel.textContent = 'Расчётная валюта: ';
						calc();    

					}

				};
				
			}());



//modal converter

(function() {
	var modal = document.getElementById('modal');
	var btnConvertModal = document.getElementById('convert-modal');
	var btnCloseModal = document.querySelector('.modal-close');

	btnConvertModal.onclick = function() {
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
}())


// $('body').fadeOut();