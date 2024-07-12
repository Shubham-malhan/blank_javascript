var c = 300 ;

if (true){ 
    let c = 30;
    // console.log(c);
    let d = 40;
    // console.log(d);
   
}  

// console.log(c);
// console.log(d);

function one(){
    const username = "Shubham";

    function two(){
        const website = "youtube";
        console.log(username);
    }
    // console.log(website);

    two()
}

// one()


if (true) {
    const username = "shubham";
    if(username === "shubham"){
        const website = " youtube"
        // console.log(username + website);
    }

    // console.log(website);

}

// console.log(username);

//+++++++++++++++++++interesting+++++++++++++++++++++++++++++


addOne(5);

function addOne(num){
    return num+1;
}


const addTwo = function(num){
    return num + 2;
}

addTwo(5);
