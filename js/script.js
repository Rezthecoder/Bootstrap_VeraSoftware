//replace text
const checkReplace = document.querySelector('.replace-me')
if (checkReplace !== null) {
    const replace = new ReplaceMe(checkReplace, {
        animation: 'animated FadeIn',
        speed: 2000,
        separator: ',',
        loopCount: 'infinite',
        autoRun: true
    })

}



function useScroll() {
    const navbar = document.querySelector('.navbar')
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('bg-dark')
            navbar.classList.add('border-bottom')
            navbar.classList.add('bg-secondary')
            navbar.classList.add('navbar-sticky')

        } else {
            navbar.classList.remove('bg-dark')
            navbar.classList.remove('border-bottom')
            navbar.classList.remove('bg-secondary')
            navbar.classList.remove('navbar-sticky')
        }
    })
}





document.addEventListener('DOMContentLoaded', useScroll())


// video modal
const videoBtn = document.querySelector('.video-btn');
const videoModal = document.querySelector('#videoModal');
const video = document.querySelector('#video');
let videoSrc = '';

if (videoBtn) {
    videoBtn.addEventListener('click', () => {
        videoSrc = videoBtn.getAttribute('data-bs-src') || '';
    });
}

if (videoModal) {
    videoModal.addEventListener('shown.bs.modal', () => {
        if (videoSrc) {
            // Ensure YouTube embed format and use correct parameters
            // videoSrc = videoSrc.replace('youtu.be/', 'www.youtube.com/embed/');
            video.setAttribute('src', videoSrc + '?autoplay=1&mute=1&modestbranding=1&rel=0');
        }
    });

    videoModal.addEventListener('hidden.bs.modal', () => {
        // Stop video by clearing the src attribute
        video.setAttribute('src', '');
    });
}
