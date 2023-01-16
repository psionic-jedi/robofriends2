import React, { Component } from 'react';
import Cardlist from './CardList';
import SearchBox from './SearchBox';
import { robots } from './robots';
import './App.css';

class App extends Component {
   constructor () {
    super()
    this.state = {
        robots: robots,
        searchField: '' 
    }
    
}

componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=> response.json())
        .then(users=> this.setState ({ robots:users}));     
}


onSearchChange = (event) => {
    this.setState({ searchField: event.target.value })
}

render () {
    const filteredRobots = this.state.robots.filter(robots =>{
        return robots.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        
    })

    if(this.state.robots.length === 0) {
        return <h1>Loading</h1>
    } else {
        return (
            <div className='tc'>
                <h1 className='f1'>Robofriends</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <Cardlist robots={filteredRobots} />
            </div>
            );  
         }
    } 
}

export default App;