import { database } from "../db/database.js";


///////////////////////////
//      sort by  id
///////////////////////////

function sort(key ,arr){
    arr.sort((a ,b)=>{
        if (a[key]> b[key ])return 1
        if  (a[key] < b[key])return -1
        return 0 
    })
return arr}
   


let p = [{id:3 ,name:"c"} ,{id:2 ,name:"b"} ,{id:1 ,name:"a"}]
console.log(sort("name" ,p));

