import {getAllCombinations, romanizeV2} from '.';

const names = [
    '권오영',
    '박새로이',
    '이준수',
    '조하담',
    '서창빈',
    '허정진',
    '김다한',
    '황광봉',
    '이대호',
    '류가희',
    '최성영',
    '오승필',
    '김아인',
    '정오리',
    '김우리',
    '김기리',
    '배이리',
    '이외진',
    '위유경',
    '김휴영',
    '이혜원',
    '우상철',
    '임지섭',
    '김성열',
    '윤혜성',
    '윤예설',
    '하예솔',
    '김여정',
    '김서아',
];

for (const name of names) {
    const roman = romanizeV2(name);
    console.log(name, roman);
    console.log(getAllCombinations(roman).map((x) => x.join('')));
}
