module.exports = function toReadable (number) {
    const readableNumbers = {   
        0: 'zero', 
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety',
        100: 'hundred'
    };

    let humanReadbleNumber = ''

    if (Math.floor(number/100) > 0 && number%100 === 0) {
        return readableNumbers[Math.floor(number/100)] + ' ' + readableNumbers[100];
    } else if (Math.floor(number/100) > 0) {
        humanReadbleNumber += readableNumbers[Math.floor(number/100)]  + ' ' + readableNumbers[100] + ' ';
        number = number % 100;
    }

    if (number <= 20 || number%10 === 0) {
        humanReadbleNumber += readableNumbers[number];
    } else  {
        humanReadbleNumber += readableNumbers[Math.floor(number - number%10)] + ' ';
        number = number % 10;
        humanReadbleNumber += readableNumbers[number];
    }
    
    return humanReadbleNumber
}
