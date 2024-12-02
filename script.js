var btnOpen = document.querySelector('.center')
var modal = document.querySelector('.modal')
const video = document.getElementById('birthdayVideo');
var audioBackground = document.querySelector('.backgroundAudio')
function toggleModal() {
    modal.classList.toggle('hide');
    // Nếu modal đang đóng, dừng video và reset lại thời gian
    if (modal.classList.contains('hide')) {
        video.pause();  // Dừng video khi đóng modal
        video.currentTime = 0;  // Reset lại thời gian video về đầu
    } else {
        video.play();  // Nếu modal mở, phát video
    }
}
btnOpen.addEventListener('click', toggleModal)
modal.addEventListener('click', toggleModal)