//RECURSIVIDADE
/* 
5! = 5X4X3X2X1
5! = 5X4!
n! = n x (n-1)!
1! = 1
*/

function fatorial(n) {
    if (n==1) {
        return 1
    } else { 
    return n * fatorial(n-1)
    }
}
console.log(fatorial(6))