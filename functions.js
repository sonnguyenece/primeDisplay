function checkPrime(N) {
    if(N<2)return false;
    else if(N==2||N==3)return true;
    else{
        for(let i=2;i<=(N/2);i++){
        if(N%i==0)return false;
        }
        return true;
    }
}
function display() {
    let i = 2;
    let count = 0;
    let temp=' ';
    while (i >= 2) {
        if (checkPrime(i)) {
            temp+=i+' ';
            if (count == 19) break;
            count++;
        }
        i++;
    }
document.getElementById('DisplayResult').innerHTML="20 so nguyen to dau tien la: " +temp ;
}
