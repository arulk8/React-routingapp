import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createPosts } from "../actions";
class PostNew extends Component {
  renderField(field) {
    const { meta } = field; // nested object destructuring
    console.log(meta);
    const className = `form-group ${
      meta.touched && meta.error ? "has-danger" : ""
    }`;
    return (
      <div className={className}>
        <label>{field.label}</label>
        <input className="form-control" type="text" {...field.input} />
        <div className="text-help">{meta.touched ? meta.error : ""}</div>
      </div>
    );
  }
  onSubmit(val) {
    this.props.createPosts(val, () => {
      this.props.history.push("/");
    });
  }
  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Field label="Title" name="title" component={this.renderField} />
          <Field
            label="Category"
            name="categories"
            component={this.renderField}
          />
          <Field label="Content" name="content" component={this.renderField} />
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          <Link className="btn btn-danger" to="/">
            Cancel
          </Link>
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
  if (!values.categories) {
    errors.categories = "pls provide category";
  }
  if (!values.content) {
    errors.content = "pls provide content";
  }
  return errors; // if the error object is empty no error
  // if any error is the object wont empty.
}
export default reduxForm({ validate: validate, form: "PostsNewForm" })(
  connect(
    null,
    { createPosts: createPosts }
  )(PostNew)
);
