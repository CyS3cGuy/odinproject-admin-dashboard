document.querySelectorAll(".profile-wrapper").forEach(element => element.style.backgroundColor = currUser.bgColor); 

document.querySelectorAll(".profile-pic").forEach(element => {
    element.src = currUser.imgPath;
    element.alt = currUser.altText; 
}); 

document.querySelectorAll(".fullname").forEach(element => element.textContent = currUser.fullName);

document.querySelectorAll(".user-tag").forEach(element => element.textContent = currUser.userTag);