  const mainBtn = document.getElementById("mainSwatchBtn");
      const stickyBar = document.getElementById("stickyBar");
      const stickyBtn = document.getElementById("stickyBtn");

      stickyBtn.addEventListener("click", (e) => {
        e.preventDefault();
        mainBtn.click();
        mainBtn.classList.add("ring-4", "ring-blue-300");
        setTimeout(() => mainBtn.classList.remove("ring-4", "ring-blue-300"), 400);
      });

      //Intersection Observer
      const observer = new IntersectionObserver(
        (shows) => {
          shows.forEach((show) => {
            if (show.isIntersecting) {
               stickyBar.classList.add("hidden");
            } else {
               stickyBar.classList.remove("hidden");
            }
          });
        },
        {
          root: null, 
          threshold: 0.1,
        }
      );

      observer.observe(mainBtn);