

let eyeIcon = document.getElementById('eyeIcon');
let password = document.getElementById('password');

eyeIcon.onclick =   function(){
    if(password.type    == 'password'){
            password.type   =   'text';
            eyeIcon.src = "images/eye-open.png";

            setTimeout(() => {
                password.type   =   'password';
                eyeIcon.src = "images/eye-close.png";
            }, 700);
        
    }else{
        password.type   =   'password';
        eyeIcon.src = "images/eye-close.png"
    }
};

