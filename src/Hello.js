import React, { Component } from 'react';
import './Hello.css';

class Hello extends Component{
    render(){
        return (
        <div className ="f1 tc">   
          <h1>hello world</h1>
        <p>{this.props.grettings}</p>
        </div>
        );
    }

}


export default Hello;
//not 'class' as it is javascript keyword;


// we can also write the above things as follows:
// const Hello = (props) =>{
//     return(
//         <div className="f1 tc">
//             <h1>Hello World</h1>
//             <p>{props.grettings}</p>
//         </div>
//     );
// }
// export default Hello;
