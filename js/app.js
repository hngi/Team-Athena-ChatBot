$(document).ready(function () {
    $(".btn-question").on('click', function (e) {
        e.preventDefault();
        const question = $("#question").val().trim();

        if (question.length) {
            $("#question").val('');

            /*paste question on the view */
            var question_chatbot = '<div class="chat-bubble outgoing-chat"><div class="sender-details">';
            question_chatbot += '<img class="sender-avatar img-xs rounded-circle" src="images/avatar1.png" alt="profile image"></div>';
            question_chatbot += '<div class="chat-message" style="margin-top: -10px"> <p>' + question + '</p></div> </div>';
            $('#chat').append(question_chatbot);
            console.log(determineAnswer(question));
            
            /* send reply */
            var answer = '<div class="chat-bubble incoming-chat"> <div class="sender-details">';
            answer += '<img class="sender-avatar img-xs rounded-circle" src="images/avatar.png" alt="profile image"></div>';
            answer += '<div class="chat-message" style="display: inline-block; margin-bottom: 5px; margin-top: -100px">';
            answer += ' <p> ' + determineAnswer(question) +'</p> </div>';

            /* empty input */
            setTimeout(function() {
                $('#chat').append(answer);
            }, 800);
        }
    });
});

function determineAnswer(question) {
    if(question == "hi" || question == "sup" || question == "hello" || question == "chairman" || question == "bro" || question == "hey") {
        return 'Hi how can i help you';
    }
    return "Sorry the network is turning blue. I hope you are not a chealsea fan";
}