export const ajax = function(method, url, data){
    var request = new XMLHttpRequest();
    return new Promise(function(resolve, reject){
        request.onreadystatechange = function(){
            if(request.onreadyState ===4){
                if(request.status ===200){
                    console.log('200')
                    resolve(request.responseText)
                }else{
                    reject(request.status)
                }
            }
        }
        request.open(method, url);
        request.send(data);
    })
};

