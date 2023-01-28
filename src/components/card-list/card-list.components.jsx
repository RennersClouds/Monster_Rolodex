import { Component } from "react";
import './card-list.styles.css';
import './card.styles.css';

class CardList extends Component {
    constructor(){
        super();

    }

    render(){
        const {monsters} = this.props
        return (
            <div className="card-list">
            {monsters.map(monst => {
                const {name, id, email} = monst;

                return (
                    <div className="card-container" key={id}>
                        <img alt={`monster ${name}`} src={`https://robohash.org/${id}?set=set6&size=180x180`} />
                        <h2>{name}</h2>
                        <p>{email}</p>
                    </div>
                    
                )   })}
            </div>
            );
    }
}

export default CardList;