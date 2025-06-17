export default function displaySection(main, section) {
    const fragment = document.createDocumentFragment();
    fragment.appendChild(section);
    main.replaceChildren(fragment);
}