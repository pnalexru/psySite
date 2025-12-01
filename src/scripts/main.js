import '../styles/main.scss'

// Мобильное меню
document.addEventListener('DOMContentLoaded', function () {
	console.log('Сайт психолога загружен')

	// Активация текущей страницы в навигации
	const currentPage = window.location.pathname.split('/').pop() || 'index.html'
	const navLinks = document.querySelectorAll('.nav__link')

	navLinks.forEach((link) => {
		const linkHref = link.getAttribute('href')
		if (
			linkHref === currentPage ||
			(currentPage === '' && linkHref === 'index.html')
		) {
			link.classList.add('active')
		} else {
			link.classList.remove('active')
		}
	})

	// Обработчик для кнопок записи
	const appointmentBtns = document.querySelectorAll(
		'.btn--primary, .btn--large'
	)

	appointmentBtns.forEach((btn) => {
		btn.addEventListener('click', function (e) {
			if (this.getAttribute('href') === '#') {
				e.preventDefault()
				alert('Форма записи будет реализована позже!')
			}
		})
	})

	// Простая валидация форм (если будут формы)
	const forms = document.querySelectorAll('form')
	forms.forEach((form) => {
		form.addEventListener('submit', function (e) {
			e.preventDefault()
			alert(
				'Форма отправлена! В реальном проекте здесь будет отправка на сервер.'
			)
		})
	})
})
