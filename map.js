// const time = (timeStamp) => {
//   return function (message) {
//     const result = Math.round(Math.random());
//     if (result) {
//       return console.log({ result: "success", message, timeStamp });
//     } else {
//       return console.error("something went wrong");
//     }
//   };
// };
// const run = () => {
//   console.warn("start test");
//   const one2 = time(new Date().getTime());
//   one2("click me1");
//   one2("click me2");
//   one2("click me3");
//   one2("click me4");
//   console.warn("end test");
// };
// run();
const asyncLogger = async (message, timeStamp) => {
  const result = 1

  return new Promise((res, rej) => {
    setTimeout(() => {
      if (result) {
        console.debug(message, timeStamp);
        
        res({ result: "success", message, timeStamp });
      } else {
        rej({ result: "fail", reason: "something went wrong" });
      }
    },  0);
  });
};

const run = async () => {
  const res =   asyncLogger('sas',23423).then(mesv =>console.log(mesv) )
  console.log(123);
  return res
};

run();
