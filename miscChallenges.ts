export const multiplesOf3And5 = (number: number): number => {
  
    let sum: number = 0;
    
    for(let i = 0; i < number; i++) {
      if(i % 3 === 0 || i % 5 === 0){
        sum += i
      }
    }
    return sum;
  };
  





const orderWeight = (str: string): string => {

    const subStrings: string[] = str.split(" ")

    subStrings.sort((a: string, b: string) => {
        const diff = getWeight(a) - getWeight(b)
        if (diff !== 0) {
            return diff
        } else {
            if (a < b) {
                return -1
            } else if (a > b) {
                return 1
            } else {
                return 0
            }
        }
    })

    const sortedString: string = subStrings.join(" ")
    return sortedString
};

export { orderWeight };

const getWeight = (str: string) => {
    const characters = str.split("")
    const numbers = characters.map(
        (character) => parseInt(character)
    )
    const weight = numbers.reduce((total: number, current) => total + current)
    return weight
}




const validBraces = (braces: string): boolean => {

    const stack: string[] = [];

    for (let i = 0; i < braces.length; i++) {
        const char = braces[i]
        switch (char) {
            case '(':
            case '[':
            case '{':
                stack.push(char)
                break
            case ')':
                if (stack.pop() !== '(') {
                    return false
                }
                break
            case ']':
                if (stack.pop() !== '[') {
                    return false
                }
                break
            case '}':
                if (stack.pop() !== '{') {
                    return false
                }
                break
        }
    }

    if (stack.length > 0) {
        return false
    }
    return true
};

export { validBraces };








