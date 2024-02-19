let num = +prompt("Введіть число");
/*if (num > 0) {
    alert("Ваше число більше 0");
}
else if (num <0) {
    alert("Ваше число менше 0");
}
else if (num ==0) {
    alert("Ваше число 0");
}*/

switch (num) {
    case 0: 
     alert("Ваше число більше 0.Ми використали світч");
     break;
    case num < 0: 
        alert("Ваше число менше 0");
        break;
    case num > 0:
        alert("Ваше число більше 0");
        break;
}