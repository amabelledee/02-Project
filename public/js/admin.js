$("#accept").on("click", function() {
    console.log("im working")
    $.ajax({
        headers: {
            "Content-Type": "application/json"
        },
        type: "Get",
        url: "/api/requests",
        data: JSON.stringify(request)
    }).then(function(){

        $.ajax({
        
            headers: {
              "Content-Type": "application/json"
            },
            type: "POST",
            url: "/api/examples",
            data: JSON.stringify(example)
          });
    })
    })
    

$(".delete").on("click", function(event) {
    
    
        $.ajax({
          url: "/api/requests/" + event.currentTarget.id,
          type: "DELETE"
        })
       .then(function() {
           location.reload();
       }) 
      })
   