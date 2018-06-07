$(function () {
    $(document).on("click", ".delete-restaurant", function (event) {
        $.ajax({
            url: "/api/restaurants/" + $(this).data("id"),
            method: "DELETE"
        }).done(function(response) {
            console.log(response)
            location.reload();
        });
    });

    $(document).on("click", ".rate-restaurant", function (event) {
        var updateObj = {};
        updateObj.visited = true;
        updateObj.liked = ($(this).data("liked") === "true");
        console.log(updateObj);
        $.ajax({
            url: "/api/restaurants/" + $(this).data("id"),
            data: updateObj,
            method: "PUT"
        }).done(function(response) {
            console.log(response)
            location.reload();
        });
    });
});