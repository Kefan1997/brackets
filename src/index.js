module.exports = function check(str, bracketsConfig) {
    str = str.split('');
    for(let i = 0; i < str.length; i++){
        for(let j = 0; j < bracketsConfig.length; j++){
            if(bracketsConfig[j][0] === str[i] && bracketsConfig[j][1] === str[i+1]){
                str.splice(i, 2);
                i = -1;
            }
        }
    }
    
    return str.length == 0;
}
