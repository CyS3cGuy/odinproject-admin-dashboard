const slides = document.querySelectorAll(".slide .summary");

slides.forEach(slide => {
    let ellipsis = new Ellipsis(slide);
    ellipsis.calc();
    ellipsis.set();   
})