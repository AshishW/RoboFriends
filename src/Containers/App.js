import React, { Component } from 'react';
import { robots } from '../Components/robots';
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
import Scroll from '../Components/Scroll';

class App extends Component {
    constructor(){
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
         .then(response=> response.json())
         .then(users => this.setState({ robots: robots}))
    }
    onSearchChange = (event) =>{
        this.setState({searchfield: event.target.value})
    }

    render(){
        const {robots, searchfield} = this.state;
        const filteredRobots = robots.filter((robots)=>{
            return robots.name.toLowerCase().includes(searchfield.toLowerCase());
        });
    return !robots.length?
        <h1>LOADING...</h1>
        :
        (
            <div className='tc'>
                <h1 style={{fontSize: '3rem'}} className='tc f1'>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    <CardList robots = { filteredRobots }/>
                </Scroll>
                
            </div>
        );
     }
    
}

export default App;