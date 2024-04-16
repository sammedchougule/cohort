// this is async function
// function myOwnSetTimeout(callback, duration){
//     setTimeout(callback, duration);
// }

// myOwnSetTimeout(function(){
//     console.log('hi there samm')
// },2500);


// now lets see promises

function promisifiedMyOwnSetTimeout(duration){
    const p = new Promise(function(resolve){
        setTimeout(resolve,duration);
    })
    return p;
}

// this is how you call PROMISE FUNTION 
const ans = promisifiedMyOwnSetTimeout(2500);
ans.then(function(){
    console.log("hi samm");
    promisifiedMyOwnSetTimeout(1000).then(function(){
        console.log("hi samm again")
    })
});