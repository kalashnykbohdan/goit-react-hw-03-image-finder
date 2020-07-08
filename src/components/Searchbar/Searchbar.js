import React, { Component } from 'react';
 
export default class Searchbar extends Component {
    state = { inputValue: '' };

    handleChange = e =>{
        this.setState({inputValue: e.target.value})
    };
    handleSybmit = e => {
        e.preventDefault();

        this.props.onSubmit(this.state.inputValue);
        this.setState({inputValue:''});
        // console.log(this.state.inputValue);
    }
    render() {
        return (
            <header className="Searchbar">
                <form className="SearchForm" onSubmit={this.handleSybmit}>
                    <button type="submit" className="SearchForm-button">
                    <span className="SearchForm-button-label">Search</span>
                    </button>

                    <input
                    className="SearchForm-input"
                    type="text"
                    value={this.state.inputValue}
                    onChange={this.handleChange}
                    // autocomplete="off"
                    // autofocus
                    placeholder="Search images and photos"
                    />
                </form>
            </header>

            // <form onSubmit={this.handleSybmit}>
            //     <label>
            //         Enter search query
            //         <input 
            //             type="text" 
            //             value={this.state.inputValue}
            //             onChange={this.handleChange}
            //         />
            //     </label>
            //     <button type="submit">Search</button>
            // </form>
            
        );
    }
}
