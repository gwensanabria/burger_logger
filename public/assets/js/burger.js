// wait to attach handlers until DOM is fullt loaded
$(function() {
    
    $(".change-eaten").on("click", function(event) {
        const id = $(this).data("id")
        const newEaten = $(this).data("newEaten")

        const newEatenState = {
            eaten: newEaten
        }

        // PUT request
        $.ajax("/api/burgers" + id, {
            type: "PUT",
            data: newEatenState
        }).then(
            function() {
                console.log("changed eaten state to" + newEaten)
                location.reload()
            }
        )

    })
})

$(".create-form").on("submit", function(event) {
    event.preventDefault()

    const newBurger = {
        type: $("#brg").val().trim(),
        eaten: 0
    }
    console.log(newBurger)

    // send post
    $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
    }).then(
        function() {
            console.log("Added new burger")
            location.reload()
        }
    )
})

$(".delete-burger").on("click", function (event) {
    const id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/burgers/" + id, {
        type: "DELETE"
    }).then(
        function () {
            console.log("deleted burger", id);
            location.reload();
        }
    );
});