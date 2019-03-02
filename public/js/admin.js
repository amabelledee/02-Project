$("#accept").on("click", function() {
    $.ajax({
        headers: {
          "Content-Type": "application/json"
        },
        type: "POST",
        url: "/api/examples",
        data: JSON.stringify(example)
      });
})

$("#deny").on("click", function(id) {
    
        $.ajax({
          url: "/api/requests/" + id,
          type: "DELETE"
        });
      })
   