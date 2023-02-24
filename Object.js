// var etudiant1={
//     nom:"tsilavo",
//     age:17,
//     matricule:"2632",
//     notes:[10,09,15,12,13.75],
//     classe:{
//             niveau:"L1",
//             parcours:"GB"
//           },
//     parler:function() {
//         console.log("Bonjour!!, je m'apelle "+this.nom);
//     }
// }

//---------------------------COPIE D'OBJET-------------------------
/**
 * structuredClone()
 * 
 * copie un objet en profondeur mais 
 * n'accepte pas(renvoie unee erreur) les
 * methodes
 */

/**
 * Object.assign()
 * var myCopy={...Object}
 * 
 * copie les objet mais si l'une des proprietes est lui meme un objet
 * alors cette propieté(la ppt objet) n'est pas entierement copié
 * c-a-d, seul la reference du ppt(l'objet) est copié 
 */

/**
 * var myCopy=JSON.parse(JSON.stringify(Object))
 * 
 * accepte toutes types de proprietés sauf les methodes
 * l'objet sera quand meme copie mais sans le methodes de l'objet 
 * odiginale
 */

/**
 * copier en profondeur un objet toutes sortes de proprietes tour comme
 * les methodes
 * @param {Object} obj 
 * @returns Object
 */
export function cloneObject(obj){
    if (typeof(obj)!="object") {
        throw new TypeError("paramater must be a Objetct, not "+typeof(obj));
        return;
    }
    var copy=JSON.parse(JSON.stringify(obj))
    Object.keys(obj).forEach(key => {
        if(typeof(Object.getOwnPropertyDescriptor(obj,key).value)==="function"){
            Object.defineProperty(copy,key,{
                value:obj[key]
            })
        }
    });
    return copy;
}
