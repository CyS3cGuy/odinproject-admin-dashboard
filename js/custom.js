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

// Create trending items
trendings.forEach((trending, ind) => {
    createTrending(trending.trendTitle, trending.user, ind);
})

// Animate the trending items 
animateTrendingItems(); // Start animate logic when content load
window.addEventListener("resize", () => animateTrendingItems()); // Recheck animate logic whenever resize 

// Animate trending items

function animateTrendingItems() {
    const trendingItemWidth = trendingList.querySelector(".each").offsetWidth;

    if (breakpoint.matches) {
        // Logic for desktop - disable the animation, reset position
        if (metadata.trendingIntervalID !== null ){
            clearInterval(metadata.trendingIntervalID);
            resetTrendingItems(); 
            metadata.trendingIntervalID = null;
        }
    } else {
        // Logic for mobile - enable the animation
        if (metadata.trendingIntervalID === null) {
            metadata.trendingIntervalID = setInterval(moveTrendingItems, metadata.trendingAnimationSpeed); 
        }
       
    }

    function resetTrendingItems() {
        // Reset the left styling
        trendingList.querySelectorAll(".each").forEach(each => {
            each.style.left = "0px";
        });   

        // Reset the sorting
        Array.from(trendingList.querySelectorAll(".each")).sort((prev, next) => {
            let prevOrder = +prev.getAttribute("order");
            let nextOrder = +next.getAttribute("order");

            if (prevOrder < nextOrder){
                trendingList.insertBefore(prev, next);
                return -1;
            } else {
                trendingList.insertBefore(next, prev);
                return 1; 
            }
        })
    }

    function moveTrendingItems() {
        let snapPoint = 0;  
        
        trendingList.querySelectorAll(".each").forEach((each, ind) => {

            let newLeft = Math.abs(+each.style.left.replace("px", "")) + metadata.trendingAnimationMotion;  

            // Get the width + gap of the first element. this will be the snap point that tells the first element to place itself at the back of the ul.
            if (ind === 0) {
                snapPoint = (+window.getComputedStyle(each).width.replace("px", "") + +window.getComputedStyle(each.parentElement).columnGap.replace("px", ""));   
            }

            if (newLeft <= snapPoint) {
                // Move the item to the left
                each.style.left = (-newLeft).toString() + "px"; 
            } else {
                // When reach snap point
                each.style.left = (-(Math.abs(+each.style.left.replace("px", "")) - snapPoint)).toString() + "px";
                // Move the first list item to the back for repeating animation
                if (ind === 0) {
                    trendingList.insertBefore(each, null);
                }   
            }
             
        });
    }
}


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
        if (announcements[ind].ellipsisVar !== null) {
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


// Trending DOM 

function createTrending(title, user, ind) {
    const each = document.createElement("li");
    each.classList.add("each");

    const profileWrapperDiv = document.createElement("div");
    profileWrapperDiv.classList.add("profile-wrapper");
    profileWrapperDiv.style.backgroundColor = user.bgColor;


    const profilePic = document.createElement("img");
    profilePic.src = user.imgPath;
    profilePic.altText = user.altText;

    profileWrapperDiv.appendChild(profilePic);

    const userDiv = document.createElement("div");
    userDiv.classList.add("user");

    const tagh4 = document.createElement("h4");
    tagh4.classList.add("tag");
    tagh4.textContent = user.userTag;

    const trendingTitleDiv = document.createElement("div");
    trendingTitleDiv.classList.add("title");
    trendingTitleDiv.textContent = title;

    userDiv.appendChild(tagh4);
    userDiv.appendChild(trendingTitleDiv);

    each.appendChild(profileWrapperDiv);
    each.appendChild(userDiv);

    trendingList.appendChild(each); 
    each.style.left = "0px";
    each.setAttribute("order", ind);
}