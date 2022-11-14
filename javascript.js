const captcha=document.querySelector('.captcha');
reloadBtn=document.querySelector('.reload-btn');
inputField=document.querySelector('input')
checkBtn=document.querySelector('.check-btn')
statusTxt=document.querySelector('.status-txt')

let allCharac=['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O',
'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd',
'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
't', 'u', 'v', 'w', 'x', 'y', 'z', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
function getCaptcha() {
    for(let i=0;i<7;i++){
        let randomChar=allCharac[Math.floor(Math.random() * allCharac.length)]
        captcha.innerText+=`${randomChar}`
            
    }
    
}
getCaptcha()
reloadBtn.addEventListener('click',()=>{
    captcha.innerText=''
    getCaptcha()
})
checkBtn.addEventListener('click',e=>{
e.preventDefault();
statusTxt.style.display='block';
let inputV= inputField.value.split('').join('');
if(inputV==captcha.innerText){
    statusTxt.style.color='Green';
    
    statusTxt.innerText='Captcha Matched.'; 
    setTimeout(()=>{
        statusTxt.innerText='';
        inputField.value='';
        captcha.innerText='';
        getCaptcha();
    },4000)
}else{
    statusTxt.style.color='Red';
    statusTxt.innerText='Captcha Not Correct try again!!';
    setTimeout(()=>{
        statusTxt.innerText='';
        inputField.value='';
        captcha.innerText='';
        getCaptcha();
    },4000)

}
})


