import React from 'react';
import { connect } from "react-redux";
import { smurfData } from "../actions/index";
import Smurf from "./Smurf";

export class SmurfDisplay extends React.Component {
   

    render() {

        if (this.props.loading) {
            return <p>Loading </p>
        }
        
        

        return <div>
            {
                this.props.smurfs.map(smurf => {
                    return <Smurf smurf={smurf} key={smurf.id} />
                })
            }
        </div>
    }
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
        loading: state.loading,
        error: state.error
    }
}

export default connect(mapStateToProps, {smurfData})(SmurfDisplay);