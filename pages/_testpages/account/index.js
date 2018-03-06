import Router from 'next/router';
import React from 'react'
import axios from 'axios';
import css from './account.scss';
import Page from '@/layouts/App';
const bear = require('@/static/bear.jpeg');

export default class extends React.Component {
  static async getInitialProps({ req }) {
    return axios.get('https://jsonplaceholder.typicode.com/posts/1').then(res => {
      console.log(res.data);
      return {
        post: res.data,
      };
    })
  }

  render() {
    console.log(this.props.post);
    return (
      <Page className={css.container}>
        <h1 className={css.title}>{this.props.post.title}</h1>
        <p>{this.props.post.body}</p>
        <p>This is the <strong>account</strong> page</p>
        <img src={bear} />
      </Page>
    )
  }
}
