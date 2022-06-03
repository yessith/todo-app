const body = document.querySelector('#container')
const themes = ['theme-1', 'theme-2']
export const changeTheme = (theme) => {
	body.classList.remove(...themes)
	body.classList.add(theme)
}
