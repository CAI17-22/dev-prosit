import React, { Component } from "react";
import { Article } from "./Article";

export class TopArticle extends Component {
  listArticle = [];

  renderArticle(i) {
    return <Article value={i} />;
  }

  list(nbArticle) {
    for (let i = 0; i < nbArticle; i++) {
      this.listArticle.push(this.renderArticle(Math.round(Math.random() * 20)));
    }
  }

  render() {
    this.list(2);
    return <section className="top-article row">{this.listArticle}</section>;
  }
}
