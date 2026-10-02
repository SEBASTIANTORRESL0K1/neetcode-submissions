class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const res = {};
        //recorremos todo el array
        for (let str of strs) {
            //vamos a separar por char
            let char = str.split("");
            //   console.log(char)
            //acomodar los arr alfabeticamente para compararlos mas facil
            let sort = char.sort();
           // console.log(sort);
            //unimos los caracteres en orden alfabetico
            let join = sort.join();
//console.log(join);
            //si no existe la propiedad de la palabra ya ordenada,se asignara como un subconjunto vacio
            if (!res[join]) {
                res[join] = [];
            }
            //se agrega al array la str
            res[join].push(str);
        }
        //regresa el objeto en formato de lista
        return Object.values(res);
    }
}
