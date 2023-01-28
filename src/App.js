// import {Component} from 'react';

import {useState} from 'react';

import './App.css';
import CardList from './components/card-list/card-list.components';
import SearchBox from './components/search-box/search-box.components';

const App = () => {

  const [searchfield, setsearchfield] = useState('');
  console.log(searchfield)

  const onSearch = (event)=>{
        // console.log(event.target.value);
       const searchValue = event.target.value.toLocaleLowerCase();
        // console.log(filMonster);
          setsearchfield(searchValue);
  }

    return(
      <div className="App">
  
         <SearchBox  onChangeHanddler = {onSearch}  placeHolder='Search Monsters' className='Search-box'/>
       
      </div>
    )

}



// class App extends Component {
//   constructor(){
//     super();
//     this.state = {
//       monster: [],
//       searchValue: '',
//     };

//   }

//   componentDidMount(){
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then((response)=> response.json())
//       .then((users)=> this.setState(
//         ()=> {return {monster: users};}, 
//         ()=> {console.log(this.state)}))
//   }

//   onSearch = (event)=>{
//     // console.log(event.target.value);
//    const searchValue = event.target.value.toLocaleLowerCase();
//     // console.log(filMonster);
//       this.setState(
//         () => {return{searchValue}}
//       );
//   }

//   render(){

//     const {monster, searchValue} = this.state;
//     const {onSearch} = this;
//     const filMonster = monster.filter(eventsame => eventsame.name.toLocaleLowerCase().includes(searchValue));
    
//     return (
//       <div className="App">

//         {/*{filMonster.map((monster)=>{
//            return <div key={monster.id}> My name is {monster.name} and i live in {monster.address.city}</div>
//          })}*/}
      
//          <SearchBox  onChangeHanddler = {onSearch}  placeHolder='Search Monsters' className='Search-box'/>
//          <CardList  monsters = {filMonster}/>
//          </div>
//     );
   

//   }
// }

export default App;
