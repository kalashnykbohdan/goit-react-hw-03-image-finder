import React, { Component } from 'react';
 
export default class SearchFormBox extends Component {
    state = { inputValue: '' };

    handleChange = e =>{
        this.setState({inputValue: e.target.value})
    };
    handleSybmit = e => {
        e.preventDefault();

        this.props.onSubmit(this.state.inputValue);
        this.setState({inputValue:''});
    }
    render() {
        return (
            <form onSubmit={this.handleSybmit}>
                <label>
                    Enter search query
                    <input 
                        type="text" 
                        value={this.state.inputValue}
                        onChange={this.handleChange}
                    />
                </label>
                <button type="submit">Search</button>
            </form>
            
        );
    }
}
