import React, {Component} from 'react';
import List from './List';
import ResultList from './ResultList';
import Spinner from './Spinner';
import Warning from './Warning';
import {Button, Label} from 'react-bootstrap';

class ListApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [], 
            result: [],
            imageSrc: '',
            remove: '',
            showError: false,
            errorMessage: '',
            showSpinner: false
        };
    }

  render() {
    return (
      <div>
        <h3> Spot it </h3>
        <form onSubmit={this.handleAdd} className="container">
            <input className="hidden" onChange={this.handleChange} ref="fileinput"  type="file" multiple="multiple"/>
            <h3><Label bsStyle="info">{'Current items count: ' + this.state.items.length}</Label></h3>
            <Button bsStyle="primary" type="button" onClick={this.handleAdd}>{'Add'}</Button>&nbsp;
            <Button bsStyle="warning" type="button" onClick={this.handleRemoveLast}>Remove last one</Button>&nbsp;
            <Button bsStyle="success" type="button" onClick={this.handleGenerate}>Generate</Button>&nbsp;
            <Button bsStyle="danger" type="button" onClick={this.handlePrint}>Print</Button>
        </form>
        <List items={this.state.items} />
        <ResultList items={this.state.result} />
        <Spinner show={this.state.showSpinner} />
        <Warning show={this.state.showError} message={this.state.errorMessage} callbackOwner = {()=> this.setState({showError: false})}/>
      </div>
    );
  }

  handleChange = (e) => {
      e.persist();
      let files = Array.prototype.slice.call(e.target.files);
      files.forEach((file) => {
          let reader = new FileReader();
          reader.onload = (event) => {
          this.setState({
              imageSrc: event.target.result
            });

          let newItem = {
                imageSrc: this.state.imageSrc,
                id: Date.now(),
                handleRemove: (id) => {
                    this.setState((prevState) => ({
                        items: prevState.items.filter((item) => {
                            return item.id !== id;
                        })
                    }));
                }
            }

            this.setState((prevState) => ({
                items: prevState.items.concat(newItem)
            }));
        }
        reader.readAsDataURL(file);
      })    
  }

  handleAdd = (e) => {
      e.preventDefault();
      this.refs.fileinput.click();
  }

  handleRemoveLast = () => {
      this.setState((prevState) => ({
          items: prevState.items.slice(0, prevState.items.length-1)
      }));
  }

  handleGenerate = () => {
      this.setState({showSpinner: true});
      /*this.setState((prevState) => ({
          result: window.spotIt(prevState.items.map((item)=>{ return item.imageSrc; }))    
      }));*/
       setTimeout(()=>{
           let result = window.spotIt(this.state.items.map((item)=>{ return item.imageSrc; }))
           if(result.length === 0){
               this.setState({
                   showSpinner: false,
                   showError: true,
                   errorMessage: 'Your input generate 0 set of result. Please either add or remove symbol, and try again.'
               })
           } else {
                this.setState({
                    result: result,
                    showSpinner: false
             });
           }

       }, 0);
  }

  handlePrint = () => {
      if(this.state.result.length > 0){
          window.print();
      }  
  }

}

export default ListApp;