document.querySelector("button").addEventListener("click", DNAtoRNA)




function DNAtoRNA(dna) {
    dna = document.querySelector("input").value;
    if(dna.includes("G")&& dna.includes("C")&&dna.includes("A")&&dna.includes("T")){
    let result = dna.replace(/T/g,"U")
    console.log(result)
    document.querySelector("h3").innerText=result
        
    }else{ 
    alert("Sequence must only contain G,C,A,T values")
}
   
 }


