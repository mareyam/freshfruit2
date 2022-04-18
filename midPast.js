 
  $(".nav-link").hover(function(){
    $(this).css("background-color", "green");
    },function() {
      $(this).css("background-color", "transparent");
    });


    $(".buttons button").hover(function(){
      $(this).css("background-color", "green");
      },function() {
        $(this).css("background-color", "transparent");
      });

  // $("#button").click(function() {
  //   $(".accordion-body").hide();
  // });

  $("#body1").hide();
  $("#food1").click(function() {
    $("#body1").show();
  });

  $("#hide1").click(function() {
    $("#body1").hide();
  });

  $('#navitem2').click(function(){
    window.location.href='practice.html';
 })


 






 
$(function() {
  loadRec();
  $("#products").on("click",".btn-danger",deleteRec);
  $("#products").on("click",".btn-warning",updateProduct);
  
  $("#addBtn").click(addProduct);
  $("#updateSave").click(function() {
         var id = $("#updateId").val();
         var name = $("#updateName").val();
         var price = $("#updatePrice").val();
         $.ajax({
             url:"https://usman-recipes.herokuapp.com/api/products/"+id,
             data:{name, price},
             method: "PUT",
             success: function(response)
             {
               console.log(response);
               loadRec();
               $("#updateModal").modal("show");
             }
         });
});
});

function loadRec() {
  console.log("hello");
  $.ajax({
    url:"https://usman-recipes.herokuapp.com/api/products/",
    method: "GET",
    success: function(response) {
      console.log("loaded");
      var productID = $("#products");
      productID.empty();

      for(var i=0; i<response.length;i++)
      {
        var responseResult = response[i];
        productID.append(
             `<div class="productsJSClass" data-id="${responseResult._id}">
            
            <div class="imgJSDiv">
            <img src="./midPastImages/img1.jpg" class="w-100 imgJS">
            </div>
            <div class="JSDivDetails">
            <h2>${responseResult.name}
            <button class="btn btn-danger delete float-end">Deletee</button>
            <button class="btn btn-warning info float-end">Edit</button>
            </h2>
            <p>${responseResult.price}</p>
            </div>
            </div>`


             
                    
        )
      }
    }
  })
}
function deleteRec() {
  var btn = $(this);
  var parentDiv = btn.closest(".productsJSClass");
  var id = parentDiv.attr("data-id");
  console.log(id);

  $.ajax({
    url:"https://usman-recipes.herokuapp.com/api/products/"+id,
    method: "DELETE",
    success: function(response) {
      console.log("deleted");
      loadRec();
    }
  })
}
function addProduct() {
  var name = $("#name").val();
  var price = $("#price").val();
  
  $.ajax({
    url:"https://usman-recipes.herokuapp.com/api/products/",
    method: "POST",
    data:{name:name, price:price},
    success: function(response) {
      console.log("added");
      console.log(response);
      loadRec();
    }
  })
}
function updateProduct() {
  console.log("in update");
  var btn = $(this);
  var parentDiv = btn.closest(".productsJSClass");
  var id = parentDiv.attr("data-id");
  console.log(id);
  $.get("https://usman-recipes.herokuapp.com/api/products/"+id,function(response) {
  $("#updateId").val(response._id);
  $("#updateName").val(response.name);
  $("#updatePrice").val(response.price);
  $("#updateModal").modal("show");
  loadRec();
  });

}


$("#buttonclose").click(function() {
  $("#updateModal").modal("hide");
})










// $(function() {
//   loadRec();
//   $("#products").on("click",".btn-danger",deleteRec);
//   $("#products").on("click",".btn-warning",updateProduct);
  
//   $("#addBtn").click(addProduct);
//   $("#updateSave").click(function() {
//          var id = $("#updateId").val();
//          var title = $("#updateTitle").val();
//          var body = $("#updateBody").val();
//          $.ajax({
//              url:"https://usman-recipes.herokuapp.com/api/recipes"+id,
//              data:{title, body},
//              method: "PUT",
//              success: function(response)
//              {
//                console.log(response);
//                loadRec();
//                $("#updateModal").modal("show");
//              }
//          });
// });
// });

// function loadRec() {
//   console.log("hello");
//   $.ajax({
//     url:"https://usman-recipes.herokuapp.com/api/recipes",
//     method: "GET",
//     success: function(response) {
//       console.log("loaded");
//       var productID = $("#products");
//       productID.empty();

//       for(var i=0; i<response.length;i++)
//       {
//         var responseResult = response[i];
//         productID.append(
//           `<div class="row">
//               <div class="productsJSClass col col-lg-4 m-4" data-id="${responseResult._id}"
//                         <h4>${responseResult.title}
//                         <button class="btn btn-danger delete float-end">Delete</button>
//                         <button class="btn btn-warning info float-end">Edit</button>
//                         </h4>
//                         <p>${responseResult.body}</p>
//                         </div>
//               </div>`
             
//         )
//       }
//     }
//   })
// }
// function deleteRec() {
//   var btn = $(this);
//   var parentDiv = btn.closest(".productsJSClass");
//   var id = parentDiv.attr("data-id");
//   console.log(id);

//   $.ajax({
//     url:"https://usman-recipes.herokuapp.com/api/recipes/"+id,
//     method: "DELETE",
//     success: function(response) {
//       console.log("deleted");
//       loadRec();
//     }
//   })
// }
// function addProduct() {
//   var title = $("#updateTitle").val();
//   var body = $("#updateBody").val();
// console.log(title,body)
//   $.ajax({
//     url:"https://usman-recipes.herokuapp.com/api/recipes",
//     method: "POST",
//     data:{title:title, body:body},
//     success: function(response) {
//       console.log("added");
//       console.log(response);
//       loadRec();
//     }
//   })
// }
// function updateProduct() {
//   console.log("in update");
//   var btn = $(this);
//   var parentDiv = btn.closest(".productsJSClass");
//   var id = parentDiv.attr("data-id");
//   console.log(id);
//   $.get("https://usman-recipes.herokuapp.com/api/recipes/"+id,function(response) {
//   $("#updateId").val(response._id);
//   $("#updateTitle").val(response.title);
//   $("#updatebody").val(response.body);
//   $("#updateModal").modal("show");
//   loadRec();
//   });

// }





// function increaseValue() {
//     var value = parseInt(document.getElementById('number').value, 10);
//     value = isNaN(value) ? 0 : value;
//     value++;
//     document.getElementById('number').value = value;
//   }
  
//   function decreaseValue() {
//     var value = parseInt(document.getElementById('number').value, 10);
//     value = isNaN(value) ? 0 : value;
//     value < 1 ? value = 1 : '';
//     value--;
//     document.getElementById('number').value = value;
//   }


// $(document).ready(function(){
//   $("button").click(function(){
//     $("h1").fadeToggle();
//     $("button").text("fade out");
//   });
// });




//    {
//     $(".h1").toggle(
//       function(){
//           $("h1").css('background-color', 'blue');
//       },
//       function(){
//           $("h1").css('background-color', 'red');
//       });​
//   })

// });


