// Korean
const INITIALS = ['ㄱ', 'ㄲ', 'ㄴ', 'ㄷ', 'ㄸ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅃ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅉ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'];
const MEDIALS = ['ㅏ', 'ㅐ', 'ㅑ', 'ㅒ', 'ㅓ', 'ㅔ', 'ㅕ', 'ㅖ', 'ㅗ', 'ㅘ', 'ㅙ', 'ㅚ', 'ㅛ', 'ㅜ', 'ㅝ', 'ㅞ', 'ㅟ', 'ㅠ', 'ㅡ', 'ㅢ', 'ㅣ'];
const FINALS = ['', 'ㄱ', 'ㄲ', 'ㄳ', 'ㄴ', 'ㄵ', 'ㄶ', 'ㄷ', 'ㄹ', 'ㄺ', 'ㄻ', 'ㄼ', 'ㄽ', 'ㄾ', 'ㄿ', 'ㅀ', 'ㅁ', 'ㅂ', 'ㅄ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'];

// Korean unicode range
const UNICODE_START = 0xac00;
const UNICODE_END = 0xd7a3;

function isVowel(char: string): boolean {
    return isMedial(char);
}

function isConsonant(char: string): boolean {
    return isInitial(char) || isFinal(char);
}

function isInitial(char: string): boolean {
    return has(INITIALS, char);
}

function isMedial(char: string): boolean {
    return has(MEDIALS, char);
}

function isFinal(char: string): boolean {
    return has(FINALS, char);
}

function has(array: string[], item: string): boolean {
    return array.indexOf(item) !== -1;
}

export {INITIALS, MEDIALS, FINALS, isVowel, isConsonant, isInitial, isMedial, isFinal, UNICODE_START, UNICODE_END};
