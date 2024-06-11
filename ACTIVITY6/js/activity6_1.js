const button = document.getElementById('btn');

button.addEventListener('click', function() 
{
    const body = document.body;
    const isDarkMode = body.classList.contains('dark-mode');
    
    if (isDarkMode) {
        body.classList.remove('dark-mode');
        button.textContent = 'LIGHT MODE';
    } else {
        body.classList.add('dark-mode');
        button.textContent = 'DARK MODE';
    }
});