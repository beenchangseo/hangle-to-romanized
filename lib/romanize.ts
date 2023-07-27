import {disassemble} from './disassemble';
import * as table from './romanization_table';
import {getAllCombinations} from './util';

// 한글이름 -> 영문이름 변환 함수
function romanize(sentence: string): string[] {
    return [...new Set(sentence.split(' ').map(romanizeWord)[0])];
}

// 로마식 표현으로 변환 후 예외처리(된소리, 센소리, 기타)
function romanizeWord(word: string): string[] {
    const arr = disassemble(word).map(romanizeChar);

    const firstName = arr[0];
    const middleNameArr = arr.slice(1, -1);
    const middleName = getAllCombinations<string>(middleNameArr).map((x) => x.join(''));
    const lastName = arr[arr.length - 1];

    return getAllCombinations<string>([firstName, middleName, lastName]).map(
        (x) =>
            x
                .join('')
                .replace(/^gim|geem|keem/, 'kim') // 맨앞에 성이 '김' 인 경우 kim(으)로 변환한다.
                .replace(/^-i/, 'lee') // 맨앞에 성이 '이' 인 경우 lee(으)로 변환한다.
                .replace(/^-u|-oo/, 'woo') // 맨앞에 성이 '우' 인 경우 woo(으)로 변환한다.
                .replace(/^-im/, 'im') // 맨앞에 성이 '임' 인 경우 im(으)로 변환한다.
                .replace(/^bahk/, 'park') // 맨앞에 성이 '박' 인 경우 park(으)로 변환한다.
                .replace(/^-(?=a|e|i|o|u|y)/, '') // 맨앞에 성이 'ㅇ' 자음으로 시작하는 경우 ''(으)로 변환한다. (알파벳 모음 + 반모음 y 까지 포함한다)
                .replace(/jh/, 'cho') // 'ㅈ' + 'ㅗ'(h) 조합은 cho로 변환한다.
                .replace(/o-i/, 'oi') // 'ㅗ'가 포함된 단어 다음 '이'가 오는 경우 (1)
                .replace(/o-ee/, 'oyi') // 'ㅗ'가 포함된 단어 다음 '이'가 오는 경우 (2)
                .replace(/-o/, 'o') // 자음 '오'가 단독으로 왔을 경우 (1)
                .replace(/-h/, 'oh') // 자음 '오'가 단독으로 왔을 경우 (2)
                .replace(/eel/, 'il') // 단어 '일'(eel)은 il로 변환한다.
                .replace(/eeng/, 'ing') // 단어 '잉'의 모듬과 받침(eeng)은 ing로 변환한다.
                .replace(/hh/, 'ho') // 단어 '호'는 ho로 변환한다.
                .replace(/-/g, ''), // 최종적으로 제거되지 못한 'ㅇ'(-)을 제거 한다.
    );
}

// 한글자 분해 후 로마표기로 변경
function romanizeChar(char: string[], index: number): string[] {
    console.log(char);

    const initial = table.INITIALS[char[0]] || [];
    let medial: string[] = table.MEDIALS[char[1]] || [];
    const final = table.FINALS[char[2]] || [];

    // 이름에 모음이 'ㅏ'이면서, 받침이 있는경우 'ㅏ'(ah)를 'ㅏ'(a)로 변환한다.
    if (char[1] === 'ㅏ' && final.length !== 0 && index !== 0) {
        medial = medial.filter((item) => item !== 'ah');
    }

    let combineArr: string[][] = [];

    final.length === 0 ? (combineArr = [initial, medial]) : (combineArr = [initial, medial, final]);

    return getAllCombinations<string>(combineArr).map((x) => x.join(''));
}

export {romanize};
