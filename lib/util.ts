// 이름, 성 분리
function separateFirstLastName(name: string): string[] {
    const lastName = name[0];
    const firstName = name.slice(1);
    return [lastName, firstName];
}

// 모든 조합식 반환
function getAllCombinations<T>(arrays: T[][]): T[][] {
    const result: T[][] = [];

    function generateCombinations(index: number, currentCombination: T[]) {
        if (index === arrays.length) {
            result.push([...currentCombination]);
            return;
        }

        const currentArray = arrays[index];
        for (const element of currentArray) {
            currentCombination.push(element);
            generateCombinations(index + 1, currentCombination);
            currentCombination.pop();
        }
    }

    generateCombinations(0, []);
    return result;
}

export {separateFirstLastName, getAllCombinations};
