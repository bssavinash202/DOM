let heroes = [
    {name: 'Prabhas', age: 45, movies: 23, pic: './assets/prabhas.jpg'},
    {name: 'Ram Charan', age: 39, movies: 15, pic: './assets/rc.webp'},
    {name: 'NTR', age: 41, movies: 30, pic: './assets/ntr.webp'},
    {name: 'Mahesh Babu', age: 49, movies: 28, pic: './assets/mahesh.webp'}
];

let heroines = [
    {name: 'Kajal', age: 39, movies: 53, pic: './assets/kajal.webp'},
    {name: 'Tamannaah', age: 35, movies: 85, pic: './assets/tammanah.webp'},
    {name: 'Amritha', age: 30, movies: 9, pic: './assets/amritha.webp'},
    {name: 'Anushka', age: 43, movies: 50, pic: './assets/anushka.webp'}
];

let directors = [
    {name: 'SS Rajamouli', age: 51, movies: 17, pic: './assets/ss.jpg'},
    {name: 'RGV', age: 62, movies: 76, pic: './assets/rgv.jpg'},
    {name: 'Boyapati', age: 54, movies: 11, pic: './assets/Boyapati.jpg'},
    {name: 'Nag Ashwin', age: 38, movies: 6, pic: './assets/nag.jpg'}
];

function details(arr){
    let ele = document.getElementById('details');
    let tr = '';
    for(val of arr){
        tr=tr+`
        <tr>
            <td>${val.name}</td>
             <td>${val.age}</td>
              <td>${val.movies}</td>
              <td><img src=${val.pic} width="100px" height="100px"/></td>
        </tr>
        `
    }
    let table = `
        <table >
            <tr>
                <th>name</th>
                <th>age</th>
                <th>Movies</th>
                <th>Picture</th>
            </tr>
            ${tr}
        </table>
    `
    ele.innerHTML = table;
    
    
}
function getHeroes(){
    let arr = heroes;
    details(arr)
}
function getHeroines(){
    let arr = heroines
    details(arr)
}
function getDirectors(){
    let arr = directors
    details(arr)
}