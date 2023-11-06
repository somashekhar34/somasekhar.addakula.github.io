    $(document).ready(function() {
            $('#common-content').load('common_html.html');
            $('#common-contentb').load('commonb_html.html');
        });

    document.addEventListener("DOMContentLoaded", function () {
        var projectsLink = document.querySelector("a[href='#projects']");
        var projectsSection = document.getElementById("projects");
      if (projectsLink && projectsSection) {
        projectsLink.addEventListener("click", function (event) {
            event.preventDefault();

            if (projectsSection) {
                projectsSection.scrollIntoView({ behavior: "smooth" });
            }
        });
      }

        const pages = document.querySelectorAll(".page");
        const nextButton = document.querySelector(".next");

        nextButton.addEventListener("click", function(event) {
            event.preventDefault();

            // Find the currently active page
            const activePage = document.querySelector(".page.active");
            const activePageIndex = Array.from(pages).indexOf(activePage);

            // Calculate the index of the next page
            const nextPageIndex = activePageIndex + 1;
            if (nextPageIndex < pages.length) {
            activePage.classList.remove("active");
            pages[nextPageIndex].classList.add("active");
            nextButton.href = pages[nextPageIndex].href;
            const nextPageURL = pages[nextPageIndex].href;
            window.location.href = nextPageURL;
        } else {
            const firstPageIndex = 0;
            activePage.classList.remove("active");
            pages[firstPageIndex].classList.add("active");
            nextButton.href = pages[firstPageIndex].href;
            const nextPageURL = pages[nextPageIndex].href;
            window.location.href = nextPageURL;
        }
        });





    });