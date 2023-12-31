const INITIALS: {[key: string]: string} = {
    // Consonants
    ㄱ: 'g',
    ㄴ: 'n',
    ㄷ: 'd',
    ㄹ: 'r',
    ㅁ: 'm',
    ㅂ: 'b',
    ㅅ: 's',
    ㅇ: '-',
    ㅈ: 'j',
    ㅊ: 'ch',
    ㅋ: 'k',
    ㅌ: 't',
    ㅍ: 'p',
    ㅎ: 'h',
    // Double consonants
    ㄲ: 'kk',
    ㄸ: 'tt',
    ㅃ: 'pp',
    ㅆ: 'ss',
    ㅉ: 'jj',
};
const MEDIALS: {[key: string]: string} = {
    // Vowels
    ㅏ: 'a',
    ㅓ: 'eo',
    ㅗ: 'o',
    ㅜ: 'u',
    ㅡ: 'eu',
    ㅣ: 'i',
    ㅐ: 'ae',
    ㅔ: 'e',
    ㅚ: 'oe',
    ㅟ: 'wi',
    ㅢ: 'ui',
    // Vowels (y+)
    ㅑ: 'ya',
    ㅕ: 'yeo',
    ㅛ: 'yo',
    ㅠ: 'yu',
    ㅒ: 'yae',
    ㅖ: 'ye',
    // Vowels (w+)
    ㅘ: 'wa',
    ㅝ: 'wo',
    ㅙ: 'wae',
    ㅞ: 'we',
};
const FINALS: {[key: string]: string} = {
    // Finals
    ㄱ: 'g',
    ㄴ: 'n',
    ㄷ: 'd',
    ㄹ: 'l',
    ㅁ: 'm',
    ㅂ: 'b',
    ㅅ: 's',
    ㅇ: 'ng',
    ㅈ: 'j',
    ㅊ: 'ch',
    ㅋ: 'k',
    ㅌ: 't',
    ㅍ: 'p',
    ㅎ: 'h',

    ㄲ: 'kk',
    ㄵ: 'nj',
    ㄺ: 'lg',
    ㅄ: 'bs',
    ㅆ: 'ss',

    ㄳ: 'gs',
    ㄶ: 'nh',
    ㄻ: 'lm',

    ㄼ: 'lb',
    ㄽ: 'ls',
    ㄾ: 'lt',
    ㄿ: 'lp',
    ㅀ: 'lh',
};

export {INITIALS, MEDIALS, FINALS};
