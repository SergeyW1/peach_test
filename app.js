const main = document.querySelector('.main')
const slidebar = document.querySelector('.slidebar')
const slidebarActive = document.querySelector('rectangle-active')

main.addEventListener('click', (e) => {
	if (e.target.tagName === 'A') {
		e.preventDefault()
	}
})

slidebar.addEventListener('click', () => {
	document.querySelector('.rectangle-no-active').classList.toggle('rectangle-active')
})
