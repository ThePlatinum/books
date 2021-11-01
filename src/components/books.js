import React from "react";
import { Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle } from "reactstrap";
export default class Books extends React.Component {

  render() {
    return (
      <Card className='row'>
        <CardImg src={this.props.image} className='col-5'/>
        <CardBody className='col-7'>
          <CardTitle tag="h5">
            {this.props.title}
          </CardTitle>
          <CardSubtitle
            className="mb-2 text-muted"
            tag="h6"
          >
            Emmanuel Adesina, Oladayo Oluwadara
          </CardSubtitle>
          <CardText>
            {this.props.shortDescription}
          </CardText>
        </CardBody>
      </Card>
    )
  }
}