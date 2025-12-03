import { nanoid } from "nanoid";

////////////////////////////////////
//            id
/////////////////////////////////////
function generateId(){
    const id = nanoid();
    return id 
}

////////////////////////////
//        create report
//////////////////////////
function report(name= "Mohammad" ,weapons= [] ,text = ""){
    return{
        id : generateId() ,
        terroistName: name ,
        weapons:weapons ,
        text: text
    }

}
export {report}