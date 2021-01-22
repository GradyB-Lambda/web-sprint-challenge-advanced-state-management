import React from 'react';
import { connect } from "react-redux";

import { smurfData, addNewSmurf, setError,  } from "../actions/index";

class AddForm extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "",
            position: "",
            nickname: "",
            description: ""
        }
    }

    handleChange = (e) => {
        
        this.setState({
            ...this.state, [e.target.name]: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
      
    };
    

    render() {

        return <div>
            <h1>New Blue Tyke</h1>
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label>name</label>
                    <input onChange={this.handleChange} value={this.state.name} />

                    <label>position</label>
                    <input onChange={this.handleChange} value={this.state.position}  />

                    <label>description</label>
                    <input onChange={this.handleChange} value={this.state.description}  />

                    <label>nickName</label>
                    <input onChange={this.handleChange} value={this.state.nickname}  />

                   
                </div>

              
                <button>submit</button>
            </form>
            </div>;
    }
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
        loading: state.loading,
        error: state.error
    }
}

export default connect(mapStateToProps, { smurfData, addNewSmurf, setError  })(AddForm);