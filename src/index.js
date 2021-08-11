module.exports = function toReadable(number) {
    const arr = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const arrDozens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
if(number ==0) {
        return 'zero';
     }
    else if (number < 20) {
        const word = arr[number];
        return word;
    }
    else if (number < 100) {
        if (number % 10 == 0) {
            const word = arrDozens[Math.floor(number / 10)];
            return word;
        }
        else {
            const word = arrDozens[Math.floor(number / 10)] + " " + arr[number % 10];
            return word;
        }
    }
    else if (number < 1000) {
        if (number % 100 == 0) {
            const word = arr[number / 100] + " hundred";
            return word;
}
       else if ((number % 100) < 20) {
         const word = arr[Math.floor(number / 100)] + " hundred " + arr[number % 100];
            return word;   
        }
        else if ((number % 10 == 0)) {
            const word = arr[Math.floor(number / 100)] + " hundred " + arrDozens[Math.floor((number % 100) / 10)];
            return word;
        }
        else {
        const word = arr[Math.floor(number / 100)] + " hundred " + arrDozens[Math.floor((number % 100)/10)] + " " + arr[number % 10];
            return word;
        }
  }

}

