document.addEventListener("DOMContentLoaded", function () {
    const collapsibleButtons = document.querySelectorAll(".Collapse");
    const sponsorbutton = document.getElementById("sponsorbutton");
    const sponsorcontent = document.getElementById("sponsorcontent");

    collapsibleButtons.forEach((button) => {
        button.addEventListener("click", function () {
            this.classList.toggle("active");
            if (this === sponsorbutton) {
                sponsorcontent.classList.toggle("active");
            }
        });
    });
});
