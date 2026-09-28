class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let hmap = new Map();
        if(s.length!==t.length){
            return false;
        }
        // llenas hmap1
        for (const char of s) {
            hmap.set(char, (hmap.get(char) || 0) + 1);
        }
        let hmap2= new Map();
        // llenas hmap2
        for(const char of t){
            hmap2.set(char,(hmap2.get(char) || 0)+1);
        }
        // comparar hmap
        //recorro hamp
        for( const [key, value] of hmap){
            //obtener el valor de una key del primer hmap        
          let b= hmap2.get(key)
            let a=hmap.get(key)
            console.log(key,a,b)
            if(a!==b){
              return false 
            } 
        }
      return true

    
    }
}
