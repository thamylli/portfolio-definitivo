let darkMode = localStorage.getItem('dark-mode') 
const mudancaDeTema = document.getElementById('mudanca-tema');
const habilitarDarkMode = () => {
    document.body.classList.add('dark-mode')
    localStorage.setItem('dark-mode', 'ativo')
    
}
const desabilitarDarkMode = () => {
    document.body.classList.remove('dark-mode')
    localStorage.setItem('dark-mode', null)
    
}
if (darkMode === "ativo") habilitarDarkMode()

mudancaDeTema.addEventListener('click', () => {
    darkMode = localStorage.getItem('dark-mode');
    darkMode != "ativo" ? habilitarDarkMode() : desabilitarDarkMode()
})