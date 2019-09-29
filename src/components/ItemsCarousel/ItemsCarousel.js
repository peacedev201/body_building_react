import React from 'react';
import ItemsCarousel from 'react-items-carousel';
import {
    Button,
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle
}from 'reactstrap';
export default class Test extends React.Component {

  componentWillMount() {
    this.setState({
      children: [],
      activeItemIndex: 0,
    });
  }
  changeActiveItem = (activeItemIndex) => this.setState({ activeItemIndex });

  render() {
    const {
      activeItemIndex,
      children,
    } = this.state;
    const {content} = this.props;
    const carouselItems = content.map((item, index)=>(
        <Card key = {index}>
            <CardImg top width="100%" src={item.image} alt="Card image cap" />
            <CardBody>
                <CardTitle>{item.title}</CardTitle>
                <CardSubtitle>{item.subtitle}</CardSubtitle>
                <CardText>{item.description}</CardText>
            </CardBody>
        </Card>
      ));
    return (
      <ItemsCarousel
        // Placeholder configurations
        enablePlaceholder
        numberOfPlaceholderItems={5}
        minimumPlaceholderTime={1000}
        // placeholderItem={<div style={{ height: 300, background: '#900' }}>Placeholder</div>}

        // Carousel configurations
        numberOfCards={5}
        gutter={12}
        showSlither={false}
        firstAndLastGutter={true}
        freeScrolling={false}

        // Active item configurations
        requestToChangeActive={this.changeActiveItem}
        activeItemIndex={activeItemIndex}
        activePosition={'center'}

        chevronWidth={24}
        rightChevron={<Button><i className="fa fa-chevron-right" aria-hidden="true"></i></Button>}
        leftChevron={<Button><i className="fa fa-chevron-left" aria-hidden="true"></i></Button>}
        outsideChevron={false}
      >
      {
          carouselItems
      }
      </ItemsCarousel>
    );  
  }
} 