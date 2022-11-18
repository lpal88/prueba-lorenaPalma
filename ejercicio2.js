/**Devuelve un array con todos los años bisiestos comprendidos
 * entre los años introducidos
 */
function isLeapYear(year1, year2) {
    const anyo1 = year1
    const anyo2 = year2
    let anyosBisiestos = []
    expReg = /\d/
    if (expReg.test(anyo1) && expReg.test(anyo2)) {
        Math.round(anyo1)
        Math.round(anyo2)
        if (anyo1 >= 2011 && anyo2 <= 2500) {
            for (let i = anyo1; i <= anyo2; i++) {
                if (bisiesto(i)) {
                    anyosBisiestos.push(i)
            }   
                
            }
         } else {
            window.alert("No es correcto")
        }
     } else {
            window.alert("No es correcto")
        }
    return anyosBisiestos
    } 




console.log(isLeapYear(2020,2224))

/**sé que se puede reducir pero no me da tiempo 
 * Calcula si un año es bisiesto
*/
function bisiesto(year) {
    let resultado = false
    if (year % 4 ===0) {
        resultado = true
    } else {
        resultado =  false
    }
    if (year % 100 === 0){
        year % 400 === 0
        ? resultado = true
        : resultado = false
    }
    return resultado
    
}

//console.log(bisiesto(2001))