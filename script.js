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
let List = [];
function details(arr){
    List = arr;
    let ele = document.getElementById('details');
    let tr = '';
    arr.map(function(val,index,arr){
        let rowColor = (index%2==0)? 'background-color: #70aebf':'background-color: white'
        tr=tr+`
        <tr style="${rowColor}">
            <td>${val.name}</td>
             <td>${val.age}</td>
              <td>${val.movies}</td>
              <td><img src=${val.pic} width="100px" height="100px" alt="image not found"/></td>
              <td><button onclick="deleteRow(${index})" style="border:none"><i class="fa-solid fa-trash"></i></button></td>
              
        </tr>
        `
    })
    
    let table = `
        <table>
            <tr>
                <th>name</th>
                <th>age</th>
                <th>Movies</th>
                <th>Picture</th>
                <th>Action</th>
            </tr>
            ${tr}
        </table>
    `
    ele.innerHTML = table;
}

function deleteRow(index){
    List.splice(index,1);
    details(List)
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