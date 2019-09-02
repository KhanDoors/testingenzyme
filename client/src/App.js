import React, { Component } from "react";
import "./app.scss";
import Header from "./components/header";
import Headline from "./components/headline";
import SharedButton from "./components/button";
import ListItem from "./components/listItem";
import { connect } from "react-redux";
import { fetchPosts } from "./actions/index";

const tempArr = [
  {
    fName: "Joe",
    lName: "Shmo",
    email: "joeshmo@whocares.com",
    age: 99,
    onlineStatus: false
  }
];

class App extends Component {
  fetch = () => {
    this.props.fetchPosts();
  };

  render() {
    const { posts } = this.props;

    const configButton = {
      buttonText: "Get Posts",
      emitEvent: this.fetch
    };

    return (
      <div className="App">
        <header className="App-header">
          <Header />
          <section className="main">
            <Headline
              header="Posts"
              desc="Click the Button"
              tempArr={tempArr}
            />
            <SharedButton {...configButton} />
            {posts.length > 0 && (
              <div>
                {posts.map((post, index) => {
                  const { title, body } = post;
                  const configListItem = {
                    title,
                    desc: body
                  };
                  return <ListItem key={index} {...configListItem} />;
                })}
              </div>
            )}
          </section>
        </header>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  };
};

export default connect(
  mapStateToProps,
  { fetchPosts }
)(App);
