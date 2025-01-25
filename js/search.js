let lastElementClicked = null;

document.addEventListener("mousedown", e => {
    lastElementClicked = e.target;
    if (lastElementClicked.id === "header-search-icon") {
        // Prevent clicking search icon from stealing the focus of input
        e.preventDefault();
    }
})

searchBox.addEventListener("focus", () => {
    header.classList.add("searching");
});

searchBox.addEventListener("blur", e => {
    header.classList.remove("searching");
});

searchBox.addEventListener("keydown", event => {
    if (event.key === "Enter") {
        // Start Search
        let query = searchBox.value;
        let searched = searchProjects(query);

        // To be replaced
        console.log(searched);
    }
})

searchIcon.addEventListener("click", () => {
    if (header.classList.contains("searching")) {
        // Start search
        let query = searchBox.value;
        let searched = searchProjects(query);

        // To be replaced
        console.log(searched);
    } else {
        header.classList.add("searching"); 
        searchBox.focus(); 
    }
    
})


function searchProjects(query) {
    let trimmedQuery = query.trim().toLowerCase();
    if (trimmedQuery === "") {
        return projects;
    }

    return projects.filter(project => project.title.toLowerCase().includes(trimmedQuery) || project.summary.toLowerCase().includes(trimmedQuery));
}