module.exports = function toReadable (number) {
    if(number == 0) {
        return "zero"
    }
    else {
        var n = number;
        var k = ""
        if (Math.floor(number/100) > 0) {
            k = k + toReadable(Math.floor(number/100)) + ' hundred ';
        }
        n = n % 100;
        n1 = Math.floor(n/10);
        if (n1 == 2) {
            k += 'twenty '
        }
        else if (n1 == 3) {
            k += 'thirty '
        }
        else if (n1 == 4) {
            k += 'forty '
        }
        else if (n1 == 5) {
            k += 'fifty '
        }
        else if (n1 == 6) {
            k += 'sixty '
        }
        else if (n1 == 7) {
            k += 'seventy '
        }
        else if (n1 == 8) {
            k += 'eighty '
        }
        else if (n1 == 9) {
            k += 'ninety '
        }
        if (n1 == 1){
            if (n == 10) {
                k += 'ten'
            } else if (n == 11) {
                k += 'eleven'
            } else if (n == 12) {
                k += 'twelve'
            } else if (n == 13) {
                k += 'thirteen'
            } else if (n == 14) {
                k += 'fourteen'
            } else if (n == 15) {
                k += 'fifteen'
            } else if (n == 16) {
                k += 'sixteen'
            } else if (n == 17) {
                k += 'seventeen'
            } else if (n == 18) {
                k += 'eighteen'
            } else if (n == 19) {
                k += 'nineteen'
            }
        }
        else {
            n = n % 10;
            if (n == 1) {
                k += 'one'
            } else if (n == 2) {
                k += 'two'
            } else if (n == 3) {
                k += 'three'
            } else if (n == 4) {
                k += 'four'
            } else if (n == 5) {
                k += 'five'
            } else if (n == 6) {
                k += 'six'
            } else if (n == 7) {
                k += 'seven'
            } else if (n == 8) {
                k += 'eight'
            } else if (n == 9) {
                k += 'nine'
            }
        }
        return k;
    }
}
