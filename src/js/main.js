hljs.initHighlightingOnLoad();
// $(document).ready(function () {
//   $(".navbar-burger").click(function () {
//     $(".navbar-burger").toggleClass("is-active");
//     $(".navbar-menu").toggleClass("is-active");
//   });
// });
$(".section-content").hide();
$(document).ready(function () {
  $(".hero").click((e) => {
    $("#" + $(e.currentTarget).attr("id") + "-content").toggle();
  });
  $(".som ").append(
    '<button class="button  p-2 is-outlined"> >>> OUVRIR LA PARTIE <<< </button>'
  );
});
