const hoverBox = document.getElementById('hover-info');
const hoverImg = document.getElementById('hover-img');
const hoverText = document.getElementById('hover-text');
const gameItems = document.querySelectorAll('.game-list li');

gameItems.forEach(item => {
    item.addEventListener('mouseenter', (e) => {
        hoverImg.src = item.getAttribute('data-img');
        hoverText.innerText = item.getAttribute('data-detail');
        hoverBox.style.display = 'flex';
    });

    item.addEventListener('mousemove', (e) => {
        hoverBox.style.left = e.pageX + 20 + 'px'; 
        hoverBox.style.top = e.pageY + 20 + 'px';
    });

    item.addEventListener('mouseleave', () => {
        hoverBox.style.display = 'none';
    });
});

