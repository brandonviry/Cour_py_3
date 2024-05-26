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

    let btn = $(e.currentTarget).find("button");
    if (btn.attr("id") == "false") {
      btn.attr("id", "true");
      btn.text(" >>> FERMER LA PARTIE <<< ");
    } else {
      btn.text(" >>> OUVRIR LA PARTIE <<< ");
      btn.attr("id", "false");
    }

  });

  $(".som").append(
    '<button class="button p-2 is-outlined" id="false"> >>> OUVRIR LA PARTIE <<< </button>'
  );
});
