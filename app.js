export let name = "utsav"
 export let add = "delhi"
 export let calc = function (a, b, action) {
    if (action == "add") {
        return a + b
    }
    if (action == "sub") {
        return a - b
    }
    if (action == "mul") {
        return a * b
    }
}
function print()
{
    console.log('my name is utsav')
}

//default export
export default print;

//export { name, add,calc }   //named exports