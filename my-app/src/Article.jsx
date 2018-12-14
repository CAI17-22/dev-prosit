import React from "react";
import {Card, CardHeader, CardBody,CardText,CardFooter } from "reactstrap";
import logo from "./logo.svg";

export class Article extends React.Component {
  state = {
    nom: "Nom de l'article",
    description: "Description de l'article",
    prix: null
  };

  constructor(props) {
    super(props);

    this.nom = this.state.nom;
    this.description = this.state.description;
    this.prix = this.props.value;
  }

  render() {
    return (
      <Card className="article col-6 card">
        <CardHeader tag="h3">{this.nom}</CardHeader>
        <CardBody>
          <img className="App-logo" src={logo} alt="Un article" />
          <CardText>{this.description}</CardText>
          <CardText className="price">{this.prix}€</CardText>
          <CardFooter><a href="#">Ajouter au panier</a></CardFooter>
        </CardBody>
      </Card>
    );
  }
}
