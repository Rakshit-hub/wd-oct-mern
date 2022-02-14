//Write a JavaScript function which accepts a string as input and swap the case of each character. For example, if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.

//Sample - swapCase('The Quick Brown Fox');

//Output - tHE qUICK bROWN fOX'

function swapCase(a){
    let result = ''
    for (i = 0; i<a.length; i++){
        if (a[i] == a[i].toUpperCase()) {
            result=result+a[i].toLowerCase()
        }else{result=result+a[i].toUpperCase()}
    }return result
}
    console.log(swapCase('The Quick Brown Fox'))

    function six(a){
        let result=''
        for(i=0;i<a.length;i++){
            if(a[i]==a[i].toLowerCase()){
                result=result+a[i].toUpperCase()
            }else{
                result=result+a[i].toLowerCase()
            }
        }return result
    }
    console.log(six('The Quick Brown Fox'))