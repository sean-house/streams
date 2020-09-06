import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Modal from '../Modal';
import history from '../../history';
import { connect } from 'react-redux';
import { fetchStream, deleteStream } from '../../actions';

class StreamDelete extends Component {
    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    }

    actions() {
        var className = 'ui button negative';
        if (!this.props.stream) {
            className = className + ' disabled';
        }
        return (
            // A React fragment containing the buttons to be passed to the Modal 'actions' segment
            <React.Fragment>
                <button 
                    onClick={() => this.props.deleteStream(this.props.stream.id)}
                    className={className}
                >
                Delete
                </button>
                <Link 
                    to="/"
                    className="ui button"
                >
                Cancel
                </Link>
            </React.Fragment>
        )};

    renderModalContent() {
        if (!this.props.stream) {
            return 'Please wait; fetching stream details';
        }
            return `Are you sure you want to delete the stream: ${this.props.stream.title}?`;
    };

    render() {
        return (
            <Modal 
                title="Delete Stream"
                content={this.renderModalContent()}
                actions={this.actions()}
                onDismiss={() => history.push('/')}
            />
    )};
}

const mapStateToProps = (state, ownProps) => {
    const streamId = ownProps.match.params.id;
    return {
        stream: state.streams[streamId]
    };
}

export default connect(mapStateToProps, { fetchStream, deleteStream })(StreamDelete);