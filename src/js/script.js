console.log('Init!');

const validation = new JustValidate('.contacts__form');

validation
  .addField('.input-name', [
	{
	  rule: 'minLength',
	  value: 2,
	},
	{
	  rule: 'maxLength',
	  value: 30,
	},
	{
	  rule: 'required',
	  value: true,
	  errorMessage: 'Enter your name!'
	}
  ])
  .addField('.input-policy', [
	{
	  rule: 'required',
	  value: true,
	  errorMessage: 'Please agree'
	}
  ])
  .addField('.input-mail', [
	{
	  rule: 'required',
	  value: true,
	  errorMessage: 'Enter your E-mail',
	},
	{
	  rule: 'email',
	  value: true,
	  errorMessage: 'Enter correct E-mail',
	},
  ]).onSuccess((event) => {
	console.log('Validation passes and form submitted', event);

	let formData = new FormData(event.target);

	console.log(...formData);

	let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
		if (xhr.readyState === 4) {
		  if (xhr.status === 200) {
			alert('Sent');
		  }
		}
	  }

	xhr.open('POST', 'mail.php', true);
	xhr.send(formData);

	event.target.reset();
  });









  const text = document.querySelector('.promo__title');

  const splitText = (el) => {
	  el.innerHTML = el.textContent.replace(/(\S*)/g, m => {
	return `<div class="word">` +
			  m.replace(/(-|#|@)?\S(-|#|@)?/g, "<div class='letter'>$&</div>") +
			  `</div>`;
	  });
	  return el;
  };
  
  const split = splitText(text);
  
  function random(min, max){
	return (Math.random() * (max - min)) + min;
  }
  
  Array.from(split.querySelectorAll('.letter')).forEach((el, idx) => {
	  TweenMax.from(el, 1.5, {
		  opacity: 0,
		  scale: .1,
		  x: random(-500, 500),
		  y: random(-500, 500),
		  z: random(-500, 500),
		  delay: idx * 0.02,
		  repeat: 0,
	  })
  });  










const hamburger = document.querySelector('.hamburger'),
	menu = document.querySelector('.menu'),
	closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
	menu.classList.add('active'),
	hamburger.classList.add('rotate');
});

closeElem.addEventListener('click', () => {
	menu.classList.remove('active'),
	hamburger.classList.remove('rotate');
});

const counters = document.querySelectorAll('.skills__ratings-counter'),
	lines = document.querySelectorAll('.skills__ratings-line span');

counters.forEach((item, i) => {
	lines[i].style.width = item.innerHTML;
});

$(document).ready(function(){

	$(window).scroll(function() {
		if ($(this).scrollTop() > 1000) {
			$('.pageup').fadeIn();
		} else {
			$('.pageup').fadeOut();
		}
	});
	
	$("a[href^='#']").click(function(){
		const _href = $(this).attr("href");
		$("html, body").animate({scrollTop: $(_href).offset().top+"px"});
		return false;
	});

	$("a[href^='#']").click(function(){
		const _href = $(this).attr("href");
		$("html, body").animate({scrollTop: $(_href).offset().top+"px"});
		return false;
	});
});




