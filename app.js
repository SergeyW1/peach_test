const main = document.querySelector('.main')

main.addEventListener('click', (e) => {
	if (e.target.tagName === 'A') {
		e.preventDefault()
	}
})