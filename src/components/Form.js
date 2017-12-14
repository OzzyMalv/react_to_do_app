import React, {Component} from 'react';
import './styleForm.css';

class Form extends Component  {
  handleSubmit = (ev) => {
    ev.preventDefault();
    let title = this.refs.title.value;
    if(title) {
      this.props.onAdd({
        title
      });
      ev.target.reset();
    }
  }
  render() {
    return (<form onSubmit={this.handleSubmit} className="formAdd">
        <input ref="title" placeholder="Title" autofocus="true" />
        <button>Add</button>
        <select>
        <option>Hight</option>
        <option>Medium</option>
        <option>Low</option>
        </select>
        <input className = "date" type="date" />
        <textarea placeholder ="description"></textarea>
    </form>);
  }
}

export default Form;