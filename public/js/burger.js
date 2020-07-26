// wait to attach handlers until DOM is fullt loaded
$(function() {
    $(".eat").on("click", function(event) {
        const id = $(this).data("id")
        const newEat = $(this).data("newEast")

        const newEatState = {
            eat: newEat
        }

        // PUT request
        $.ajax("/api/burgers" + id, {
            type: "PUT",
            data: newEatState
        }).then(
            function() {
                console.log("changed eaten state to" + newEat)
                location.reload()
            }
        )

    })
})

$(".create-form").on("submit", function(event) {
    event.preventDefault()

    const newBurger = {
        type: $("#eat").val().trim()
    }

    // send post
    $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
    }).then(
        function() {
            console.log("Added ne burger")
            location.reload()
        }
    )
})