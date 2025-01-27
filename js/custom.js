const BASE_FONT_SIZE = "70rem";

// Use matchMedia with the calculated value
const breakpoint = window.matchMedia(`(min-width: ${BASE_FONT_SIZE})`);
// Create announcement items
announcements.forEach(announcement => {
    createAnnouncement(announcement.date, announcement.title, announcement.summary);
})

// Set ellipsis for announcements
announcementList.querySelectorAll(".each .summary").forEach((item, ind) => {
    setEllipsis(item, ind);

})

window.addEventListener("resize", () => {
    // Set ellipsis for announcements
    announcementList.querySelectorAll(".each .summary").forEach((item, ind) => {
        setEllipsis(item, ind);
    })
})

// Create project items
projects.forEach(project => {
    createProject(project.title, project.summary);
})

// Set ellipsis for projects
projectList.querySelectorAll(".each .summary").forEach(item => {
    let ellipsis = new Ellipsis(item);
    ellipsis.calc();
    ellipsis.set();
})

// Announcement DOM
function createAnnouncement(date, title, summary) {
    const each = document.createElement("li");
    each.classList.add("each");

    const dateDiv = document.createElement("div");
    dateDiv.classList.add("date");
    dateDiv.textContent = date;

    const titleDiv = document.createElement("h3");
    titleDiv.textContent = title;

    const summaryDiv = document.createElement("div");
    summaryDiv.classList.add("summary");

    const summaryPara = document.createElement("p");
    summaryPara.textContent = summary;

    each.appendChild(dateDiv);
    each.appendChild(titleDiv);

    summaryDiv.appendChild(summaryPara);
    each.appendChild(summaryDiv);
    announcementList.appendChild(each);
}

function setEllipsis(item, ind) {
    if (breakpoint.matches) {
        let ellipsis = new Ellipsis(item);
        announcements[ind].ellipsisVar = ellipsis;
        announcements[ind].ellipsisVar.calc();
        announcements[ind].ellipsisVar.set();
    } else {
        if (announcements[ind].ellipsisVar !== null ){
            announcements[ind].ellipsisVar.destroy();
        }
    }
}


// Project DOM
function createProject(title, summary) {
    const clickables = [
        {
            imgPath: "./images/svg/star-plus.svg",
            altText: "Favourite",
        },

        {
            imgPath: "./images/svg/eye-plus.svg",
            altText: "Watchlist",
        },

        {
            imgPath: "./images/svg/share.svg",
            altText: "Share",
        },
    ]


    const each = document.createElement("li");
    each.classList.add("each");

    // Create project details structure
    const projectDetailsDiv = document.createElement("div");
    projectDetailsDiv.classList.add("project-details");
    const projectDetailsTitleDiv = document.createElement("h3");
    projectDetailsTitleDiv.textContent = title;

    const projectDetailsSummaryDiv = document.createElement("div");
    projectDetailsSummaryDiv.classList.add("summary");

    const projectDetailsSummaryPara = document.createElement("p");
    projectDetailsSummaryPara.textContent = summary;
    projectDetailsSummaryDiv.appendChild(projectDetailsSummaryPara);

    projectDetailsDiv.appendChild(projectDetailsTitleDiv);
    projectDetailsDiv.appendChild(projectDetailsSummaryDiv);

    // Create clickable structure
    const projectClickableDiv = document.createElement("div");
    projectClickableDiv.classList.add("project-clickables");

    clickables.forEach(clickable => {
        const imgIcon = document.createElement("img");
        imgIcon.src = clickable.imgPath;
        imgIcon.altText = clickable.altText;
        imgIcon.classList.add("icon-small");
        projectClickableDiv.append(imgIcon);
    })

    // Combine all into an "li" item
    each.appendChild(projectDetailsDiv);
    each.appendChild(projectClickableDiv);

    projectList.appendChild(each);
}
