export default function displaySection(section) {
    // Скрий всички секции в документа
    document.querySelectorAll('section').forEach(s => {
        s.style.display = 'none';
    });

    // Покажи само избраната секция
    if (section) {
        section.style.display = 'block';
    }
}