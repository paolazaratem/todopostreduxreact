import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/postActions";
import { PropTypes } from "prop-types";

class Posts extends Component {
  componentWillMount() {
    console.log("entro");
    this.props.fetchPosts();
  }

  render() {
    const postsItems = this.props.posts.map(post => (
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    ));

    return (
      <div>
        <h1>Posts</h1>
        {postsItems}
      </div>
    );
  }
}

Posts.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  posts: state.posts.items,
});

export default connect(mapStateToProps, { fetchPosts })(Posts);
