
document.querySelectorAll('.goToTop').forEach((el, key, num) => {
    el.addEventListener('click', (ev) => {
        ev.preventDefault();
        window.scroll(0, 0);
        return false;
    });
});

document.querySelector('.mobileNavToggle').addEventListener('click', (ev) => {
    let navMenuEl = document.querySelector('.navMenu');
    if(navMenuEl.classList.contains('mobileVisible'))
    {
        // Smooth hide the menu (with css)
        navMenuEl.style.height = navMenuEl.scrollHeight + 'px';
        setTimeout(() => {
            navMenuEl.style.height = 0;
            setTimeout(() => {
                navMenuEl.classList.remove('mobileVisible');
                navMenuEl.style.height = '';
                console.log('closed');
            }, 250);
        }, 0);
    }
    else
    {
        // Smooth show the menu (with css)
        navMenuEl.style.height = 0;
        navMenuEl.style.height = navMenuEl.scrollHeight + 'px';
        navMenuEl.classList.add('mobileVisible');
        setTimeout(() => {
            navMenuEl.style.height = '';
            console.log('open');
        }, 250);
    }
});
