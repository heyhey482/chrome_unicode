function trans(){
	var str = document.getElementById("hangul-val").value;

	document.getElementById("unicode-val").value = replaceAll(escape(str),"%","\\");
}

function detrans(){
	var str = document.getElementById("unicode2-val").value;

	document.getElementById("hangul2-val").value = unescape(replaceAll(str,"\\","%"));
}
function replaceAll(strTemp, strValue1, strValue2){

    while(1){
        if( strTemp.indexOf(strValue1) != -1 )
            strTemp = strTemp.replace(strValue1, strValue2);
        else
            break;
    }
    return strTemp;
}

document.getElementById("transBtn").addEventListener("click",trans);
document.getElementById("detransBtn").addEventListener("click",detrans);
