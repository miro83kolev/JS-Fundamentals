function matrixN(num) {
    function lines(a) {
 
        let thelineOne = a.toString().repeat(a + ' ').split('').join(' ');
 
        return thelineOne + '\n';
    }
 
    function reps(ass) {
        for (let i = 1; i <= ass; i++) {
            return lines(ass).repeat(ass-1);
        }
 
    }
    return lines(num) + reps(num);
}

console.log(matrixN(7))