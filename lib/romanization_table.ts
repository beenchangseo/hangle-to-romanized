const INITIALS: {[key: string]: string[]} = {
    // Consonants
    ㄱ: ['g', 'k'],
    ㄴ: ['n'],
    ㄷ: ['d'],
    ㄹ: ['r'], // 'l'를 추가해야해도 되는지 확인 필요
    ㅁ: ['m'],
    ㅂ: ['b'],
    ㅅ: ['s'],
    ㅇ: ['-'],
    ㅈ: ['j'],
    ㅊ: ['ch'],
    ㅋ: ['k'],
    ㅌ: ['t'],
    ㅍ: ['p'],
    ㅎ: ['h'],
    // Double consonants
    ㄲ: ['kk'],
    ㄸ: ['tt'],
    ㅃ: ['pp'],
    ㅆ: ['ss'],
    ㅉ: ['jj'],
};
const MEDIALS = {
    // Vowels
    ㅏ: ['a', 'ah'],
    ㅓ: ['eo', 'u', 'uh'],
    ㅗ: ['o', 'h'],
    ㅜ: ['u', 'oo'],
    ㅡ: ['eu'],
    ㅣ: ['i', /*'ee'*/],
    ㅐ: ['ae', 'ea'],
    ㅔ: ['e', 'ae', 'ea'],
    ㅚ: ['oe'],
    ㅟ: ['ui', 'wi', 'hi'],
    ㅢ: ['ui', /*'eui'*/], 
    // Vowels (y+)
    ㅑ: ['ya'],
    ㅕ: ['yeo'],
    ㅛ: ['yo'],
    ㅠ: ['yu', 'yoo'],
    ㅒ: ['yae'],
    ㅖ: ['ye'],
    // Vowels (w+)
    ㅘ: ['wa'],
    ㅝ: ['wo', 'wua'],
    ㅙ: ['wae'],
    ㅞ: ['we'],
};
const FINALS = {
    // Finals
    ㄱ: ['k'],
    ㄴ: ['n'],
    ㄷ: ['d'],
    ㄹ: ['l'],
    ㅁ: ['m'],
    ㅂ: ['b'],
    ㅅ: ['s'],
    ㅇ: ['ng'],
    ㅈ: ['j'],
    ㅊ: ['ch'],
    ㅋ: ['k'],
    ㅌ: ['t'],
    ㅍ: ['p'],
    ㅎ: ['h'],

    ㄲ: ['kk'],
    ㄵ: ['nj'],
    ㄺ: ['lg'],
    ㅄ: ['bs'],
    ㅆ: ['ss'],

    ㄳ: ['gs'],
    ㄶ: ['nh'],
    ㄻ: ['lm'],

    ㄼ: ['lb'],
    ㄽ: ['ls'],
    ㄾ: ['lt'],
    ㄿ: ['lp'],
    ㅀ: ['lh'],
};

export {INITIALS, MEDIALS, FINALS};
