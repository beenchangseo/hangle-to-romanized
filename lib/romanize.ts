import {disassemble} from './disassemble';
import * as table from './romanization_table';

function nameRule(romanizeArr: string[]): {
    lastName: string[];
    firstName: string[][];
} {
    let lastName: string[] = [];
    let firstName: string[][] = [];

    romanizeArr.forEach((chars, index) => {
        // lastName, firstName 예외처리
        if (index === 0) {
            if (/^-i$/.test(chars)) {
                // '이'
                lastName.push('lee');
            } else if (/^bag$/.test(chars)) {
                // '박'
                lastName.push('park', 'bak');
            } else if (/^gim$/.test(chars)) {
                // '김'
                lastName.push('kim');
            } else if (/eo$/.test(chars)) {
                // 'ㅓ'
                lastName.push(chars[0] + 'uh', chars);
            } else if (/^jo$/.test(chars)) {
                // '조'
                lastName.push('cho', 'joe', chars);
            } else if (/^choe$/.test(chars)) {
                // '최'
                lastName.push('choi', chars, chars + 'i');
            } else if (/^-o$/.test(chars)) {
                // '오'
                lastName.push('o', 'oh');
            } else if (/^-wi$/.test(chars)) {
                // '위'
                lastName.push('wi', 'wie', 'we');
            } else if (/^-u$/.test(chars)) {
                // '우'
                lastName.push(chars.replace(/^-u$/, 'woo'));
            } else if (/^-yu/.test(chars)) {
                // '유'
                lastName.push(chars.replace(/^-yu/, '-yoo'), chars);
            } else {
                lastName.push(chars);
            }
        } else {
            if (/^-i$/.test(chars)) {
                // '이'
                firstName.push(['yi', 'i', 'e', 'lee', 'yee']);
            } else if (/(?<!a|e|i|o|u|y)eong/.test(chars)) {
                // 자음 + 'ㅓ' + 'ㅇ'
                firstName.push([chars, chars.replace(/eo/, 'u')]);
            } else if (/(?=a|e|i|o|u|y)eong/.test(chars)) {
                // 모음 + 'ㅓ' + 'ㅇ'
                firstName.push([chars, chars.replace(/eo/, 'ou')]);
            } else if (/-(?=a|o)/.test(chars)) {
                // 'ㅏ', 'ㅗ' (ㅇ 뒤에 오는 경우)
                firstName.push([chars.replace(/-/, '') + 'h', chars.replace(/-/, '')]);
            } else if (/-u/.test(chars)) {
                // '우'
                firstName.push(['woo', chars.replace(/-/, '')]);
            } else if (/.*ae.*/.test(chars)) {
                // 'ㅐ'
                firstName.push([chars, chars.replace(/ae/, 'ea')]);
            } else if (/.*ye(?!o)/.test(chars)) {
                // 'ㅖ'
                firstName.push([chars, chars.replace(/ye(?!o)/, 'yae')]);
            } else {
                firstName.push([chars]);
            }
        }
    });
    // 성 마지막 '-' 삭제
    lastName = lastName.map((item) => item.replace(/-/g, ''));

    // 이름 마지막 '-' 삭제
    firstName = firstName.map((subArr) => subArr.map((item) => item.replace(/-/g, '')));

    return {lastName, firstName};
}

function romanize(sentence: string): string[][] {
    const romanizeArr = sentence.split(' ').map(romanizeWord)[0];

    const {lastName, firstName} = nameRule(romanizeArr);

    const fullName = firstName.slice();
    fullName.unshift(lastName);

    return fullName;
}

function romanizeWord(word: string): string[] {
    return disassemble(word).map(romanizeChar);
}

// This romanizes a char (really an array) returned by disassemble()
function romanizeChar(char: string[], index: number) {
    if (char.length < 2) {
        return table.INITIALS[char[0]] || table.MEDIALS[char[0]] || table.FINALS[char[0]] || char[0];
    }

    let initial = table.INITIALS[char[0]];
    const medial = table.MEDIALS[char[1]];
    const final = table.FINALS[char[2]];

    return [initial, medial, final].filter(Boolean).join('');
}

export {romanize};
