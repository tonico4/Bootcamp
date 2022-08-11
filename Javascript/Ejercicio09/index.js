function MyError(number) {
    if (typeof number === "number") {
        return number
    }
    throw new Error("NaN")
}

try{
    console.log(MyError("2"))
} catch (e) {
    MyError()
}