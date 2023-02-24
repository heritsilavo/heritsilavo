//--------------Les PROMISES-------------------
/*
    def:  permettent de verifier le resultat d'execution d'un code,
          ou fonction asyncrone
*/      
var promesse=new Promise((resolve,reject)=>{
    /*appeler resolve(arg?) en passant ou non une valeur si le code 
           est resolu
    */
    
    /*appeler reject(arg?) si il y a une erreur*/
    
    /**
     * le code içi est imediatement execute de maniere asynchrone
     */
}) 

/**
 * promesse.then((arg?)=>{}) executé si la promesse est ténue(resolve)
 * 
 * promesse.catch((arg?)=>{}) est executé si il ya un erreur
 * 
 * promesse.finally(()=>{}) est toujours executé queleque soit le 
 *                          resultat
 */

//LES FONCTIONS

Promise.all();
/**
 * Promise.all([promise,promise,...]).then((arg)=>{
 *      si toutes les promesses sont ténues
 *      arg: Tableau de toutes les valeurs renvoyés par chaques promesses
 * }).catch((arg?)=>{
 *      ssi l'une des promesse achoue alors arg? sera la 
 *      valeur renvoyé par l'erreur   
 * })
 */

Promise.allSettled();
/**
 * il va ignorer l'erreur
 * arg:    un tableau d'objet contenant les status(fullfield ou rejected)
 *         et la valeur renvoyé par chaque promesse 
 */

Promise.any()
/**
 * il va capturer la premiere promesse qui reussise
 *         catch() est appelé ssi toutes les promesses échouent
 */

//---------------------NB----------------------
/**
 * La fonction array.map(()=>{}) retourne un tableau de 
 * promesse contenant les fonctions a executer sur chaque 
 * element su tableau
 */
//-------------GERER L'ASYNCHRONE AVEC UNE BOUCLE MAP----
(async()=>{
    console.log("START");
    const fruits = ["pineaple", "ananas", "aple"];
    const sleepyFruits = fruits.map(async (fruit,index)=>{
        await wait(1000*(index+1));
        console.log(fruit);
    });
    await Promise.all(sleepyFruits);
    await wait(1000);
    console.log("STOP");
})();