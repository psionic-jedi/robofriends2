import React, { useState, useEffect } from 'react';
import Cardlist from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';


function App() {
    const [robots, setRobots] = useState([])
    const [searchfield, setSearchfield] = useState('')
    const [count, setCount] = useState(0) // for demo purposes


useEffect(()=> {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=> response.json())
      .then(users => {setRobots(users)});
    // console.log(count)
  },[]) // if you add count, only run if count changes.

const onSearchChange = (event) => {
    setSearchfield(event.target.value)
  }


const filteredRobots = robots.filter(robot =>{
    return robot.name.toLowerCase().includes(searchfield.toLowerCase());
  })

 
return !robots.length ?
    <h1>Loading</h1> :
    (     
        <div className='tc'>
        <h1 className='f1'>Robofriends</h1>
            <button onClick={()=>setCount(count+1)}>Click me!</button>
            <SearchBox searchChange={onSearchChange} />
            <Scroll>
                <Cardlist robots={filteredRobots} />
            </Scroll>
        </div>
    );     
}





export default App;