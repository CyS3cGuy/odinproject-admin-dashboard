// Create announcement items
announcements.forEach(announcement => {
    createAnnouncement(announcement.date, announcement.title, announcement.summary);
})  

// Set ellipsis
announcementList.querySelectorAll(".each .summary").forEach(item => {
    let ellipsis = new Ellipsis(item);
    ellipsis.calc();
    ellipsis.set();
})


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
