let un, em, tc, bgc;

let form = document.querySelector("#hashtag-form");
form.onsubmit = function(e){
    e.preventDefault();
    username = form.username.value;
    email = form.email.value;
    textcolor = form.textcolor.value;
    bgcolor = form.bgcolor.value;
    
    localStorage.setItem('username', username);
    un = localStorage.getItem('username');
    
    localStorage.setItem('email', email);
    em = localStorage.getItem('email');

    localStorage.setItem('textcolor', textcolor);
    tc = localStorage.getItem('textcolor');

    localStorage.setItem('bgcolor', bgcolor);
    bgc = localStorage.getItem('bgcolor');

    //location.reload();

    coloringIn();

    
    
}

function coloringIn(){
    document.querySelector('body').style.backgroundColor = bgc;
    document.querySelector('body').style.color = tc;
}