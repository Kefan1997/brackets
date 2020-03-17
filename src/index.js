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
    // let leftBracket = [];
    // let rightBracket =[];

    // for(let i = 0; i < bracketsConfig.length;i++ ){
    //     leftBracket.push(bracketsConfig[i][0]);
    //     rightBracket.push(bracketsConfig[i][1]);
    //   }

    // let stack = [];

    // for(let i = 0; i < str.length; i++){

    //     if(leftBracket.includes(str[i]) ){
    //         stack.push(str[i]);
    //     }
    //     else if(rightBracket.includes(str[i]) && stack[stack.length - 1] === leftBracket[rightBracket.indexOf(str[i])]){
    //         stack.pop();
    //     } else{
    //             return false;
    //         }
    //     if (stack.length >= 2 && (stack[stack.length - 1] == stack[stack.length - 2])){
    //         stack.splice((stack.length - 2),2);
    //     }
         
    //    console.log(stack);
    // }

    return str.length == 0;

}
