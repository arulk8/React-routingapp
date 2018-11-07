import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchPost } from "../actions";

import { deletePost } from "../actions";
import { Link } from "react-router-dom";
class PostShow extends Component {
  componentDidMount() {
    if (!this.props.post) {
      const { id } = this.props.match.params;
      console.log(this.props);
      this.props.fetchPost(id);
    }
  }
  onDeleteClick() {
    const { id } = this.props.match.params;
    this.props.deletePost(id, () => {
      this.props.history.push("/");
    });
  }

  render() {
    const { post } = this.props;
    if (!post) {
      return <div>loading ..</div>;
    }
    return (
      <div>
        <Link to="/">Back to Index</Link>
        <button
          className="btn btn-danger pull-xs-right"
          onClick={this.onDeleteClick.bind(this)}
        >
          Delete post
        </button>
        <h2>{post.title}</h2>
        <h5>{post.category}</h5>
        <h6>{post.content}</h6>
      </div>
    );
  }
}
function mapStateToProps(state, ownProps) {
  return {
    post: state.posts[ownProps.match.params.id]
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { fetchPost: fetchPost, deletePost: deletePost },
    dispatch
  );
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostShow);
