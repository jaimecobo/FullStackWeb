import React from 'react';
import ReactDOM  from 'react-dom';

let array = ['twelve', 'one-hundred', 'sixteen', 'forty-four', 'seventy-three', 'three-million'];
// let sArray = bubbleSort(array);


// function bubbleSort(arr) {
//     var done = false;
//     while (!done) {
//       done = true;
//       for (var i = 1; i < arr.length; i += 1) {
//         if (arr[i - 1] > arr[i]) {
//           done = false;
//           var tmp = arr[i - 1];
//           arr[i - 1] = arr[i];
//           arr[i] = tmp;
//         }
//       }
//     }
//     return arr;
//   }
  
const unSorted = (arr) => {
    let str01 = "";
    for(var i = 0; i < arr.length; i++){
        str01 += arr[i];
        if(i != arr.length-1){
            str01 += ", ";
        }
    }   
    return str01;
}

const sorted = (arr) => {
    let str01 = "";
    for(var i = 0; i < arr.length; i++){
        str01 += arr[i];
        if(i != arr.length-1){
            str01 += ", ";
        }
    }   
    const newArray = str01.split(", ");
    console.log("newArray is: " + newArray.sort());
    str01 = "";
    for(var i = 0; i < newArray.length; i++){
        str01 += newArray[i];
        if(i != newArray.length-1){
            str01 += ", ";
        }
    }   
    return str01;
}



const stateInfo = (firstName, lastName, birthdate, array, sArray) =>{
    return (
    <table className="table table-striped">
        <thead>
            <tr>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Birthdate</th>
                <th scope="col">Array before sorting</th>
                <th scope="col">Array after sorting</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>{firstName}</td>
                <td>{lastName}</td>
                <td>{birthdate}</td>
                <td>{array}</td>
                <td>{sArray}</td>
            </tr>
        </tbody>
    </table>
    )
}



ReactDOM.render(
    stateInfo('Albert', 'Einstein', 'Wed May 14 1879 00:00:00 GMT-0700 (US Moutain Standard Time)', unSorted(array), sorted(array) ),
    document.getElementById('root')

)
