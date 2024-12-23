document.getElementById('appealForm').addEventListener('submit', function(event) {
    // Пример проверки перед отправкой формы (если нужно)
    let fullname = document.getElementById('fullname').value.trim();
    let reason = document.getElementById('reason').value.trim();

    // Проверка, если поля пустые
    if (fullname === '' || reason === '') {
        event.preventDefault();  // Останавливаем отправку формы
        alert('Барлық өрістерді толтырыңыз!');
    }
});
