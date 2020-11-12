import React, { Component } from 'react'
import Header from './component/header'
import Headline from './component/headline'
import SharedButton from './component/button'
// import ListItem from './component/listItem'
import { connect } from 'react-redux'
import { fetchPosts } from './actions'
import './app.scss'
import ListItem from './component/listItem'
class App extends Component {
  constructor(props) {
    super(props)
    this.fetch = this.fetch.bind(this)
  }

  fetch() {
    this.props.fetchPosts()
  }

  render() {
    const { posts } = this.props
    const configButton = {
      buttonText: 'Get posts',
      emitEvent: this.fetch
    }
    return (
      <div data-test="AppComponent">
        <Header />
        <section className="main">
          <Headline header="Posts" desc="Click the button to render posts!" />
          <SharedButton {...configButton} />
          {posts.length > 0 &&
            <div>
              {posts.map((post, index) => {
                const { title, body } = post
                const configListItem = {
                  title,
                  desc: body,
                }
                return (
                  <ListItem key={index} {...configListItem} />
                )
              })}
            </div>
          }
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps, { fetchPosts })(App)
