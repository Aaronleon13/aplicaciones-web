const selectedTheme = document.querySelector('#theme');
const body = document.querySelector('body');

const savedTheme = localStorage.getItem('theme');

const innitialTheme = () => {
    if (savedTheme === 'dark') {
        body.classList.add('dark-theme');
        selectedTheme.value = 'dark';
    }
    if (savedTheme === 'light') {
        body.classList.remove('dark-theme');
        selectedTheme.value = 'light';
    }
};

innitialTheme();

selectedTheme.addEventListener('change', (event) => {
    const theme = event.target.value;
    console.log(theme);
    
    if (theme === 'dark') {
        body.classList.add('dark-theme');
        localStorage.setItem('theme', 'dark');
    }

    if (theme === 'light') {
        body.classList.remove('dark-theme');
        localStorage.setItem('theme', 'light');
    }

});

