document.addEventListener('turbo:load', function() {
  // This code will run when the entire document, including all resources, has loaded
  // You can place your code here that needs to run after everything has loaded
  (function ($) {
    $.fn.timeline = function() {
      var selectors = {
        id: $(this),
        item: $(this).find(".timeline-item"),
        activeClass: "timeline-item--active",
        img: ".timeline_img"
      };
      selectors.item.eq(0).addClass(selectors.activeClass);
      selectors.id.css(
        "background-image",
        "url(" +
        selectors.item
        .first()
        .find(selectors.img)
        .attr("src") +
        ")"
        );
      var itemLength = selectors.item.length;
      $(window).scroll(function() {
        var max, min;
        var pos = $(this).scrollTop();
        selectors.item.each(function(i) {
          min = $(this).offset().top;
          max = $(this).height() + $(this).offset().top;
          var that = $(this);
          if (i == itemLength - 2 && pos > min + $(this).height() / 2) {
            selectors.item.removeClass(selectors.activeClass);
            selectors.id.css(
              "background-image",
              "url(" +
              selectors.item
              .last()
              .find(selectors.img)
              .attr("src") +
              ")"
              );
            selectors.item.last().addClass(selectors.activeClass);
          } else if (pos <= max - 40 && pos >= min) {
            selectors.id.css(
              "background-image",
              "url(" +
              $(this)
              .find(selectors.img)
              .attr("src") +
              ")"
              );
            selectors.item.removeClass(selectors.activeClass);
            $(this).addClass(selectors.activeClass);
          }
        });
      });
    };
  })(jQuery);

  $("#timeline-1").timeline();
});





// document.addEventListener("DOMContentLoaded", function () {

// function timeline() {
//   var id = document.getElementById("timeline-1");
//   var items = id.querySelectorAll(".timeline-item");
//   var activeClass = "timeline-item--active";
//   var imgSelector = ".timeline_img";

//   items[0].classList.add(activeClass);
//   id.style.backgroundImage = "url(" + items[0].querySelector(imgSelector).getAttribute("src") + ")";

//   var itemLength = items.length;

//   function updateTimeline() {
//     var pos = window.scrollY

//     var max, min;
//     items.forEach(function (item, i) {
//       min = item.offsetTop;
//       max = item.offsetTop + item.offsetHeight;

//       if (i === itemLength - 2 && pos > min + item.offsetHeight / 2) {
//         items.forEach(function (el) {
//           el.classList.remove(activeClass);
//         });
//         id.style.backgroundImage = "url(" + items[itemLength - 1].querySelector(imgSelector).getAttribute("src") + ")";
//         items[itemLength - 1].classList.add(activeClass);
//       } else if (pos <= max - 40 && pos >= min) {
//         id.style.backgroundImage = "url(" + item.querySelector(imgSelector).getAttribute("src") + ")";
//         items.forEach(function (el) {
//           el.classList.remove(activeClass);
//         });
//         item.classList.add(activeClass);
//       }
//     });
//   }

//   window.addEventListener("scroll", updateTimeline);
//   updateTimeline();
// }
//   timeline();
// });
