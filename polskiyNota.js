const loggerCallback =(a,b)=>{
return  a,b 
}

const withLogger = (loggerCallback) => (loggerMessage) =>
loggerCallback(loggerMessage, new Date().getTime());


 function withLogger2(loggerCallback){
  function any(loggerMessage){
    loggerCallback(loggerMessage, new Date().getTime());
  }
 }

 console.log(withLogger);
 console.log(withLogger2);