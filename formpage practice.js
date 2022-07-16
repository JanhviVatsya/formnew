function animatedform(){
    const arrows= document.querySelectorAll(".fa-arrow-down");
    arrows.forEach(arrow =>{
        arrow.addEventListener('click',()=>{
            const input=arrow.previousElementSibling;
            const parent=arrow.parentElement;
            const nextform= parent.nextElementSibling;

            // check for validation
            if(input.type==="text" && validateuser(input)){
                nextslide(parent,nextform);
            }
            else if(input.type==="email" && validateemail(input)){
                nextslide(parent,nextform);
            }else if(input.type==="password" && validateuser(input)){
                nextslide(parent,nextform);
            }
            else{
                parent.style.animation="shake 0.5s ease";
            }
            //get rid of animation
            parent.addEventListener('animationend', ()=>{
                parent.style.animation="";
            });
        });
    });
}

function validateuser(user){
    if(user.value.length<6){
        console.log('not enough characters');
        error('rgb(189,87,87)');
    }
    else{
        error('rgb(87, 189, 130)');
        return true;
    }
}

function error(color){
    document.body.style.backgroundColor= color;
}

function nextslide(parent, nextform){
    parent.classList.add('innactive');
    parent.classList.remove('active');
    nextform.classList.add('active');
}

function validateemail(email){
    const validation= /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(validation.test(email.value)){
        error('rgb(87, 189, 130)');
        return true;
    }
    else{
        error('rgb(189,87,87)');
    }
}


animatedform();