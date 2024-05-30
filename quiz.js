

args =   [];
len = argumentsLength(args);
output = len === 1 ? "One value was passed to the function \n": 
    len + " values were passed to the function \n"
console.log(output);

function argumentsLength(args){  
 return args.length;
}

