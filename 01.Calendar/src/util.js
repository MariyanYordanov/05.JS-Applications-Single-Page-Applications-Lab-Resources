export default function displaySection(section) {
    
    document.querySelectorAll('section').forEach(s => {
        s.style.display = 'none';
    });

    if (section) {
        section.style.display = 'block';
    }
}