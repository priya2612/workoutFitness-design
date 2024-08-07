document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".container");
  const rows = document.querySelectorAll(".row-content");

  rows.forEach((row) => {
    row.addEventListener("mouseover", function () {
      if (row.classList.contains("yoga")) {
        container.style.backgroundImage = "url('../images/yoga.jfif')";
      } else if (row.classList.contains("hiit")) {
        container.style.backgroundImage = "url('../images/hiit.jfif')";
      } else if (row.classList.contains("ride")) {
        container.style.backgroundImage = "url('../images/ride.jfif')";
      }
    });

    row.addEventListener("mouseout", function () {
      container.style.backgroundImage = "url('../images/image1.jfif')"; // Original background image
    });
  });
});
