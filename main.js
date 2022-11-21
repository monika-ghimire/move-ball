let ball=document.getElementById('ball');
let moveBy=10;

window.addEventListener('load',()=>{
    ball.style.position='absolute';
    ball.style.left="100px";
    ball.style.top="100px";

})
window.addEventListener('keyup',(e)=>{
switch(e.key){
    case 'ArrowLeft':
        ball.style.left=parseInt(ball.style.left)-moveBy+"px"
        break
       
       case 'd':
        ball.style.left=parseInt(ball.style.left)+moveBy+"px"
        break

        case 'ArrowUp':
            ball.style.top=parseInt(ball.style.top)-moveBy+"px"
            break

            case 's':
                ball.style.top=parseInt(ball.style.top)+moveBy+"px"
                break
       }

})