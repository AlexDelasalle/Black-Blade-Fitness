
function timeline() {
  var id = document.getElementById("timeline-1");
  var items = id.querySelectorAll(".timeline-item");
  var activeClass = "timeline-item--active";
  var imgSelector = ".timeline_img";

  items[0].classList.add(activeClass);
  id.style.backgroundImage = "url(" + items[0].querySelector(imgSelector).getAttribute("src") + ")";

  var itemLength = items.length;

  function updateTimeline() {
    var pos = window.scrollY || window.pageYOffset;

    var max, min;
    items.forEach(function (item, i) {
      min = item.offsetTop;
      max = item.offsetTop + item.offsetHeight;

      if (i === itemLength - 2 && pos > min + item.offsetHeight / 2) {
        items.forEach(function (el) {
          el.classList.remove(activeClass);
        });
        id.style.backgroundImage = "url(" + items[itemLength - 1].querySelector(imgSelector).getAttribute("src") + ")";
        items[itemLength - 1].classList.add(activeClass);
      } else if (pos <= max - 40 && pos >= min) {
        id.style.backgroundImage = "url(" + item.querySelector(imgSelector).getAttribute("src") + ")";
        items.forEach(function (el) {
          el.classList.remove(activeClass);
        });
        item.classList.add(activeClass);
      }
    });
  }

  window.addEventListener("scroll", updateTimeline);
  updateTimeline();
}

timeline();
