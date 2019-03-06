import { request } from "http";

$("#accept").on("click", function () {
  console.log("im working")

  $.ajax({
    url: "/api/examples",
    type: "POST",
    data: request
  })






$(".delete").on("click", function (event) {


  $.ajax({
    url: "/api/requests/" + event.currentTarget.id,
    type: "DELETE"
  })
    .then(function () {
      location.reload();
    })
})
