var menu_button = document.querySelector('.menu-button');
var menu = document.querySelector('.navigator');

menu_button.addEventListener('click', show);

function show() {
	if (menu.style.display == 'block') {
		menu.style.display = 'none';
		}else{
		menu.style.display = 'block';
	}
}

window.addEventListener('resize', function () {
		if (document.body.scrollWidth > 599) {
		menu.style.display = 'block';
		}else{
		menu.style.display = 'none';
		};
})