document.addEventListener('DOMContentLoaded', function() {
    const chibi = document.querySelector('.fixed-image'); // Обрабатываем чибика
    const dialog = document.getElementById('dialog');

    chibi.addEventListener('click', function() {
        // Показываем диалог и меняем выражение лица на 3 секунды
        dialog.classList.remove('hidden');
        chibi.src = 'D:\\тами1.png'; // Новое изображение чибика с улыбкой

        setTimeout(function() {
            dialog.classList.add('hidden');
            chibi.src = 'D:\\тами.png'; // Возвращаем исходное изображение
        }, 3000);
    });
});
