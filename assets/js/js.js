const notiNum = document.querySelector('header h1 span');
const mark = document.querySelector('.mark');
const unread = document.querySelectorAll('.unread');
const unreadNum = Array.from(unread).length > 0 ? Array.from(unread).length : '0';
notiNum.innerHTML = unreadNum;
mark.addEventListener('click', () => {
    unread.forEach(un => {
        un.classList.remove('unread');
        notiNum.innerHTML = '0';
    })
});
