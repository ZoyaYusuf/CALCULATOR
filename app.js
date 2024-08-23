let result= " ";
let btn=document.querySelectorAll('.numb');

Array.from(btn).forEach(function(b){
    b.addEventListener('click',(e)=>{
        if(e.target.innerHTML=='='){
            result=eval(result);
            document.querySelector('input').value=result;
        }
        else if(e.target.innerHTML == "C"){
            result=" ";
            document.querySelector('input').value=result;
        }
        else if(e.target.innerHTML == "D"){
            result=result.replace(/.$/,'');
            document.querySelector('input').value=result;
        }
        else{
            result=result+(e.target.innerHTML);
            document.querySelector('input').value=result;
        }
    })
})   


