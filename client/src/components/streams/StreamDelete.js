import React from 'react';
import Modal from "../Modal";
import history from "../../history";
import {connect} from "react-redux";
import {deleteStream, fetchStream} from "../../actions";
import {Link} from "react-router-dom";

class StreamDelete extends React.Component{

    actions() {
        const id = this.props.match.params.id;
        return (
            <React.Fragment>
                <Link to={'/'} className={'ui button'}>Cancel</Link>
                <button onClick={() => this.props.deleteStream(id)} className={'ui button negative'}>Delete</button>
            </React.Fragment>
        );
    }

    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    }

    render() {
        return (
            <div>
                <Modal
                    title="Delete Stream"
                    text={'Are you sure'}
                    actions={this.actions()}
                    onDismiss={() => {history.push('/')}}
                />
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {stream: state.streams[ownProps.match.params.id]};
};

export default connect(mapStateToProps, {fetchStream, deleteStream})(StreamDelete);
