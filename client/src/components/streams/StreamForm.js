import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamForm extends Component {
    renderError({ error, touched}) {
        if (touched && error) {
            return (
            <div className="ui error message">
                <div>
                    {error}
                </div>
            </div>
            );
        }
    }

    renderInput = ({input, label, meta}) => {
        const className = `field ${meta.error && meta.touched ? 'error': ''}` 
        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input} autoComplete="off"/>
                {this.renderError(meta)}
            </div>

        );
    }

    onSubmit = (formValues) => {
       this.props.onSubmit(formValues); 
    }

    render() {
        return (
            <form 
                onSubmit={this.props.handleSubmit(this.onSubmit)}
                className="ui form error"  // Semantic UI requires class=error to show error messages
                >
                <Field name="title" 
                    component={this.renderInput} 
                    label="Enter Title: "
                    />
                <Field name="description"  
                component={this.renderInput} 
                label="Description: "
                />
                <button className="ui button primary">Submit</button>
            </form>
    );
    }
}

// Validate is called each time anything happens to any part of our form.
// We have to validate EVERY field that requires validation
const validate = (formValues) => {
    const errors = {};
    if (!formValues.title) {
        errors.title = 'You must enter a title';
    }
    if (!formValues.description) {
        errors.description = 'You must enter a description';
    }

    return errors;
};

export default reduxForm({
    form: 'streamForm',
    validate: validate
})(StreamForm);

