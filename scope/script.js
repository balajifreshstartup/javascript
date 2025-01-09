'use strict';

// Global Variable
const name = 'Lethin';

function firstFun(){
    // function scope
    const age = 5
    function fInnerFun(){
        const lastName = 'R'
        const isexit = true;
        if(isexit){
            //Block scope
            const home = 'yes';
            console.log(home);
        }
        const home = 'no';
        console.log(home);
        console.log(`Hi ${name}. ${lastName}, your age ${age}`)
    }

    fInnerFun();
}

firstFun();