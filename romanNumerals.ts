const dictionary = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000,
}

function romanToInt(s: string): number {

    let sum: number = 0

    for (let i = 0; i < s.length; i++) {

        const currentValue: number = dictionary[s[i]]
        const nextValue: number = dictionary[s[i + 1]]

        if (nextValue && (nextValue === currentValue * 5 || nextValue === currentValue * 10)) {
            sum += nextValue - currentValue
            i++
        } else {
            sum += currentValue
        }
    }
    return sum
};
