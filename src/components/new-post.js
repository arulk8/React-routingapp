import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
class PostNew extends Component {
    renderField(field) {
        return (
            <div className="form-group">
                <label>{field.label}</label>
                <input
                    className="form-control"
                    type="text"
                    {...field.input}
                />
                {field.meta.touched ? field.meta.error : ''}
            </div>
        );
    }
    onSubmit(val) {
        console.log(val);

    }
    render() {
        const { handleSubmit } = this.props;
        return (
            <div>
                <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                    <Field
                        label="Title"
                        name="title"
                        component={this.renderField}
                    />
                    <Field
                        label="Category"
                        name="category"
                        component={this.renderField}
                    />
                    <Field
                        label="Content"
                        name="content"
                        component={this.renderField}
                    />
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );

    }

}
function validate(values) {
    const errors = {};
    if (!values.title) {
        errors.title = "pls provide title";
    }
    if (!values.category) {
        errors.category = "pls provide category";
    }
    if (!values.contest) {
        errors.contest = "pls provide content";
    }
    return errors; // if the error object is empty no error
    // if any error is the object wont empty.
}
export default reduxForm({ validate: validate, form: "PostsNewForm" })(PostNew);