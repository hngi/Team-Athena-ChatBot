/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var TeamController2 = function () {

    this.arr_content = [];
    this.view = new TeamView2();

    this.start = function () {
        var self = this; 
        
                
        var btn = document.getElementById('send');

        btn.onclick = function (e) {

            e.preventDefault();
            
            var comment = document.getElementById('content').value;
            
            self.addComment(comment);
            
           document.getElementById('content').innerHTML = "";

        };
    };

    this.addComment = function (comment) {
        
            this.arr_content.push(comment);
            
            console.log("addComment --> adding cotent");

            this.showComments();
    };

    this.showComments = function () {
        var self = this;

        self.view.render(this.arr_content);
        console.log("showComments() --> showing comment");

    };

    this.removeComment = function () {

    };

    this.removeAllComments = function () {

    };
};

