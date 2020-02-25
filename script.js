function sliderIsm () {

	var next = document.getElementById('next');
	var prev = document.getElementById('prev');
	var slider = document.getElementById('slider');
	var carrusel = document.getElementById('carrusel');
	var dotWrap = document.getElementById('dot-wrap');
	var children = slider.children.length;
	var counter = 0;

		function addChildren () {
			function createCircle(){
				var dot = document.createElement('div');
				dot.classList.add("dot");
				dotWrap.appendChild(dot);
			}

			for (var i=0; i<children; i++) {
				createCircle()
			}
		}

		addChildren ();
		var dots = document.getElementsByClassName('dot');
		dots[0].classList.add('active');

		next.addEventListener('click',function(){
			if (counter < children * 100 - 100) {
				counter+=100;
				slider.style.transform = 'translateX(-'+counter+'%)';
				dots[ counter / 100 ].classList.add("active");
				dots[ counter / 100 - 1 ].classList.remove("active");
			} else {
				dots[0].classList.add('active');
				dots[children - 1].classList.remove("active");
				counter = 0
				slider.style.transform = 'translateX(-'+counter+'%)';
			}
		});

		prev.addEventListener('click',function(){
			if (counter > 0) {
				counter-=100;
				slider.style.transform = 'translateX(-'+counter+'%)';
				dots[ counter / 100 ].classList.add("active");
				dots[ counter / 100 + 1 ].classList.remove("active");
			} else if (counter === 0) {
				counter = children * 100 - 100;
				slider.style.transform = 'translateX(-'+counter+'%)';
				dots[0].classList.remove('active');
				dots[children-1].classList.add('active');
			} else {
				return;
			}
		})

}

sliderIsm ();

