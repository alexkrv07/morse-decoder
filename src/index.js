const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    const regExMask = /.{10}/g;

    let result = expr.match(regExMask);

    result = result.map((word) => {
         return decodeSymbol(word);
    });

    function decodeSymbol(symbol) {
        const codeWhiteSpace = '**********';
        const whitespace = ' ';

        if (symbol === codeWhiteSpace) {
            return whitespace;
        }

        const regExEmpty = /00/g;        
        const regExDot = /10/g;
        const regExDash = /11/g;
        const EMPTY = '';
        const DOT = '.';
        const DASH = '-';

        let result = symbol.replace(regExEmpty, EMPTY);
        result = result.replace(regExDot, DOT);
        result = result.replace(regExDash, DASH);
        
        return MORSE_TABLE[result];
    }

    return  result.join('');
}

module.exports = {
    decode
}

