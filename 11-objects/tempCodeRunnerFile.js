 let garden ={
        vegetable:'zucchini',
        flower:'sun flower',
        fruit: 'grape',
        water: true,
        sun: true,
        size: 10
    }; 
    let key ='water';
Object.keys(garden).forEach(g =>{
    //console.log(g)
    if (key === g) {
        console.log(garden[key]);
    }
});