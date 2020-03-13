let side = 'left';
let h = $(document).height() - 100;
let w = $(document).width() - 100;
let x;
let y;

function checkGoal() {
    if (
        (y <= h / 2 + 50) && (y >= h / 2 - 50) &&
        (x <= 80 || x >= w - 80)
    ) {
        setTimeout(function () {
            $('<div>', {class: 'popup', text: 'Гоооооол!!!'}).appendTo('.football');
        }, 600);
        setTimeout(function () {
            $('.popup').remove();
        }, 1100);
    }
}

$('.ball').on('click', function () {
    if (side === 'left') {
        x = Math.floor(Math.random() * w / 2 + w / 2);
        y = Math.floor(Math.random() * h);
        $('.ball').animate({
            top: y,
            left: x
        }, 500);
        checkGoal();
        side = 'right';
    } else {
        x = Math.floor(Math.random() * w / 2);
        y = Math.floor(Math.random() * h);
        $('.ball').animate({
            top: y,
            left: x
        }, 500);
        checkGoal();
        side = 'left';
    }
});
$('.hand').on('click', function () {
    if (side === 'left') {
        x = w;
        y = h / 2;
        $('.ball').animate({
            top: y,
            left: x
        }, 500);
        checkGoal();
        side = 'right';
    } else {
        x = 0;
        y = h / 2;
        $('.ball').animate({
            top: y,
            left: x
        }, 500);
        checkGoal();
        side = 'left';
    }
});