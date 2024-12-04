document.addEventListener('DOMContentLoaded', () => {
	const scrollBtn = document.querySelector('.scroll-top-btn');
	const navList = document.querySelectorAll('.header__menu-item');
	const menuToggle = document.querySelector('.header__menu-toggle');
	const nav = document.querySelector('.header__nav');

	menuToggle.addEventListener('click', () => {
		nav.classList.toggle('is-open');
		menuToggle.classList.toggle('is-active');
	});
	navList.forEach((item) => {
		item.addEventListener('click', () => {
			nav.classList.remove('is-open');
			menuToggle.classList.remove('is-active');
		});
	});
	scrollBtn.addEventListener("click", () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	})
	window.onscroll = () => {
		if (document.body.scrollTop > 110 || document.documentElement.scrollTop > 110) {
			scrollBtn.style.display = 'flex';
		} else {
			scrollBtn.style.display = 'none';
		}
	};
});