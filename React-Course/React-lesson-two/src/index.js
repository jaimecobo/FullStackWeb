import React from 'react';
import ReactDOM from 'react-dom';


// ReactDOM.render(
//     React.createElement('ul', {}, 
//     React.createElement('li', {}, "Apples"),
//     React.createElement('li', {}, "Oranges"),
//     React.createElement('li', {}, "Mangos")
//     ),
//     document.getElementById('root')
// )



// ReactDOM.render(
//         <ul>
//             <li>Apples</li>
//                 <ul>
//                     <li>$1.00 per lb.</li>
//                 </ul>
//             <li>Oranges</li>
//                 <ul>
//                     <li>$0.70 per lb.</li>
//                 </ul>
//             <li>Mangos</li>
//                 <ul>
//                     <li>$2.00 per lb.</li>
//                 </ul>
//         </ul>,
//     document.getElementById('root')
// )



// ReactDOM.render(
//     <div>
//         <h1 id='IAMAnID' className='IAmAClassName'>Hello World!</h1>
//     </div>,
// document.getElementById('root')
// )



// const item1 = 'Apples';
// const item1Price = "$1.00 per lb."
// const item2 = 'Oranges';
// const item2Price = "$0.70 per lb."
// const item3 = 'Mangos';
// const item3Price = "$2.00 per lb."

// ReactDOM.render(
//     <ul>
//         <li>{item1}</li>
//         <ul>
//             <li>{item1Price}</li>
//         </ul>
//         <li>{item2}</li>
//         <ul>
//             <li>{item2Price}</li>
//         </ul>
//         <li>{item3}</li>
//         <ul>
//             <li>{item3Price}</li>
//         </ul>
//     </ul>,
// document.getElementById('root')
// )




// const groceryList = (
//     <ul>
//         <li>Apples</li>
//         <ul>
//             <li>$1.00 per lb.</li>
//         </ul>
//         <li>Oranges</li>
//             <ul>
//                 <li>$0.70 per lb.</li>
//             </ul>
//         <li>Mangos</li>
//             <ul>
//                 <li>$2.00 per lb.</li>
//             </ul>
//     </ul>
// );

// ReactDOM.render(groceryList,
// document.getElementById('root')
// )



// function groceryList(item1, item2, item3){
//     return(
//         <ul>
//             <li>{item1}</li>
//             <li>{item2}</li>
//             <li>{item3}</li>
//         </ul>
//     );
// }
// ReactDOM.render(groceryList('Apples', 'Oranges', 'Mangos'),
//     document.getElementById('root')
//     )



const groceryList = (item1, item1Price, item2, item2Price, item3, item3Price) => {
    return(
        <ul>
            <li>{item1}</li>
                <ul>
                    <li>{item1Price}</li>
                </ul>
            <li>{item2}</li>
                <ul>
                    <li>{item2Price}</li>
                </ul>
            <li>{item3}</li>
                <ul>
                    <li>{item3Price}</li>
                </ul>
        </ul>
    );
}
ReactDOM.render(
    groceryList('Apples', '$1.00 per lb.', 'Oranges', '$0.70 per lb.', 'Mangos', '$2.00 per lb.'),
    document.getElementById('root')
    )