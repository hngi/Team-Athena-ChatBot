/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//controller for the comment assignment
var Comment_Controller=function(){

  this.comment=[];

this.createTodo = function(comment){
        // this.todo_list.push(todo);
        this.comments.push(comment);
         console.log(comment);
        Broadcaster.notify('Comment Added',comment);
};

};

