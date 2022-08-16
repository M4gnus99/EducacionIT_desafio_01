let gastos =[15,200,54,123,764];

function gastoConIva(num){
    return num + (num * 0,21);
}

function funcionMap (num,callback){
    let aux=[];
    aux = num.map(function gastoConIva(element){
        return element + (element * 0,21);
    })
    
    return aux;
}