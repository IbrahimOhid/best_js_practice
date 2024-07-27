function callback(name, age, profession) {
    console.log('My Name is', name);
    console.log('I am ', age);
    profession();
}

function work(){
    console.log('Front-End Web Developer');
}

function working(){
    console.log('Software Engineer');
}

callback('Mohammad', 26, work);
callback('Babul Uddin', 28, working);


function userName(){
    console.log('Mohammad');
}

function friendName(){
    console.log('Rafiya Kawser Rifa')
}

setTimeout(userName, 2000);
friendName()