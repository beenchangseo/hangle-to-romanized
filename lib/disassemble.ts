import * as alpha from './alphabet';

function disassemble(str: string): string[][] {
    return str.split('').map(disassembleChar);
}

function disassembleChar(char: string): string[] {
    // Return vowels and consonants as is
    if (alpha.isVowel(char) || alpha.isConsonant(char)) {
        return [char];
    }

    // Work on unicode code
    if (!isComplexChar(char)) {
        return [char];
    }

    return breakComplexChar(char);
}

function isComplexChar(char: string): boolean {
    var code = char.charCodeAt(0);
    return code >= alpha.UNICODE_START && alpha.UNICODE_END >= code;
}

function breakComplexChar(char: string): string[] {
    var charCode = char.charCodeAt(0);
    var code = charCode - alpha.UNICODE_START;

    var final = code % 28;
    var medial = ((code - final) / 28) % 21;
    var intial = ((code - final) / 28 - medial) / 21;

    return [alpha.INITIALS[intial], alpha.MEDIALS[medial], alpha.FINALS[final]];
}

export {disassemble};
