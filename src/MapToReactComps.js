import React from 'react';

class MapToReactComps extends React.Component {
    constructor() {
        super();
        this.state = { items: [] }
        this.filter = this.filter.bind(this)
    }

    componentWillMount() {
        fetch('http://swapi.co/api/people/?format=json')
            .then(resp => resp.json())
            .then(({results: items}) => this.setState({items}))
    }
    
    filter(event) {
        this.setState({ filter: event.target.value })
    }

    render() {
        let items = this.state.items;
        if (this.state.filter) {
            items = items.filter((item) => 
                        (item.name.toLowerCase()
                            .includes(this.state.filter.toLowerCase())))
        }
        return (
            <div>
                <input type="text" onChange={this.filter} />
                {items.map( (item, index) => <SWPeople key={item.name} value={item}/> )}
            </div>
        )
    }
}

const SWPeople = ({value}) => (<div>{value.name}</div>); 

export default MapToReactComps;