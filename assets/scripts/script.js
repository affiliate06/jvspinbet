const boxes = document.querySelectorAll(".item");
const popup = document.querySelector(".popup");

boxes.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.add("active");
        const image = item.querySelector('img');
        image.src = 'assets/images/winBox.png';

        setTimeout(() => {
            popup.classList.add("opened");
        }, 700);
    });
});
