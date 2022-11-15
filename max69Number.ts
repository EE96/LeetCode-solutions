const maximum69Number = (num: number): number => {

    let stringRep = num.toString()

    for (let i = 0; i < stringRep.length; i++) {
        if (stringRep[i] === "6") {
            return parseInt(stringRep.replace(stringRep[i], "9"))
        }
    }
    return num
}