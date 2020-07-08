import React, {Component} from 'react';
// import style from './modal.css';

export default class Modal extends Component {
    componentDidMount(){
        console.log('Modal componentDidMount');

        window.addEventListener('keydown', this.handleKeyDown)
    }
    componentWillUnmount(){
        console.log('Modal componentWillUnmount');
        window.removeEventListener('keydown', this.handleKeyDown)
    }
    handleKeyDown = e =>{
        if(e.code === 'Escape'){
            this.props.onClose();
        }
    }
    
    render() {
      return (
        <div className="Overlay">
            <div className="Modal">{this.props.children}</div>
        </div>
      )
    };
}
