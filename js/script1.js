const minFödelsedag = (jagÄrSjuk) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (!jagÄrSjuk) {
           resolve(2);
        } else{
            reject(new Error("Jag är ledsen"));
        }
    }, 2000);
    });
};

console.time("Timer");

minFödelsedag(false)
.then((result) =>{
    console.timeLog("Timer")

    console.log(`I have ${result} cake`)
})
.catch((error) => {
    console.timeLog("Timer");
    console.log(error);
}).finally(() =>{
    console.log("Party")
});