// var mem = null;
// function changer(id) {
//   let elem = $("#Button" + id).attr("class");
//   // .split(/\s+/)[0];
//   if (elem == "button-on") {
//     $("#Button" + id).removeClass("button-on");
//     $("#Button" + id).addClass("button-off");
//     $("#P" + id).show();
//     if (mem != id) {
//       for (let i = 1; i <= $(".faq-element-1").length; i++) {
//         if (i == id) {
//           continue;
//         } else {
//           $("#Button" + i).addClass("button-on");
//           $("#Button" + i).removeClass("button-off");
//           $("#P" + i).hide();
//         }
//       }
//     }
//   } else {
//     $("#Button" + id).addClass("button-on");
//     $("#Button" + id).removeClass("button-off");
//     $("#P" + id).hide();
//     if (mem != id) {
//       for (let i = 1; i <= $(".faq-element-1").length; i++) {
//         if (i == id) {
//           continue;
//         } else {
//           $("#Button" + i).removeClass("button-on");
//           $("#Button" + i).addClass("button-off");
//           $("#P" + i).show();
//         }
//       }
//     }
//   }
//   mem = id;
// }

var mem = null;

function changer(id) {
  var elem = $("#Button" + id).attr("class");

  if (elem == "button-on") {
    $("#Button" + id)
      .removeClass("button-on")
      .addClass("button-off");
    $("#P" + id).show();

    if (mem != id) {
      for (var i = 1; i <= $(".faq-element-1").length; i++) {
        if (i != id) {
          $("#Button" + i)
            .addClass("button-on")
            .removeClass("button-off");
          $("#P" + i).hide();
        }
      }
    }
  } else {
    $("#Button" + id)
      .addClass("button-on")
      .removeClass("button-off");
    $("#P" + id).hide();

    if (mem != id) {
      for (var i = 1; i <= $(".faq-element-1").length; i++) {
        if (i != id) {
          $("#Button" + i)
            .removeClass("button-on")
            .addClass("button-off");
          $("#P" + i).show();
        }
      }
    }
  }

  mem = id;
}
