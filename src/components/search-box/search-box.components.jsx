import { Component } from "react";
import './search-box.styles.css';
class SearchBox extends Component {
    // constructor(){
    //     supper()

    // }

    render(){
        const {placeHolder, className, onChangeHanddler} = this.props;
        return(
            <input className={`search-box ${className}`} type='search' placeholder={placeHolder}
            onChange={onChangeHanddler} />
  
        )
    }



}

export default SearchBox