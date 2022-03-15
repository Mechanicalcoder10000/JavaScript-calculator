let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
       
        if (buttonText == 'X') {
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText == 'C') {
            screenValue = "";
            screen.value = screenValue;
        }
        else if (buttonText == '=') {
            screen.value = eval(screenValue);
            screenValue=screenValue;
        }
        else if(buttonText=='sq'){
            screenValue=screenValue*screenValue;
            screen.value=screenValue;
            
        }
        else if(buttonText=='1/x') {
       screenValue=(1/screenValue);
       screen.value=screenValue;

        }
        else if(buttonText=='-/+'){
            screenValue=-1*screenValue;
            screen.value=screenValue;
        }
        else if(buttonText=='Sqrt'){
            screenValue=Math.sqrt(screenValue);
            screen.value=screenValue;
        }
        else if(buttonText=='tan'){
            screenValue=Math.tan(screenValue*Math.PI/180);
            screen.value=screenValue;
        }
        else if(buttonText=='sin'){
            screenValue=Math.sin(screenValue*Math.PI/180);
            screen.value=screenValue;
        }
        else if(buttonText=='cos'){
            screenValue=Math.cos(screenValue*Math.PI/180);
            screen.value=screenValue;
        }
        else if(buttonText=='sec'){
            screenValue=1/Math.cos(screenValue*Math.PI/180);
            screen.value=screenValue;
        }
        else if(buttonText=='cosec'){
            screenValue=1/Math.sin(screenValue*Math.PI/180);
            screen.value=screenValue;
        }
        
        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }

    })
}

