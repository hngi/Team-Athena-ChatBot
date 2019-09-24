$(document).ready(function () {
    $(".btn-question").on('click', function (e) {
        var question = $("#question").val();
        if(question.length) {
            $("#question").val('');
        }
    });
});