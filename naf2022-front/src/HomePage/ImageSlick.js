import Slider from 'react-slick';
import Container from '@material-ui/core/Container';
import ImageCard from './ImageCard';
import React, { Component } from 'react';
import './ReactSlick.css';

export default class Responsive extends Component {
  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1300,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: this.props.cardList.length < 10,
          },
        },
      ],
    };
    return (
      <Container
        style={{ alignItems: 'center', maxWidth: '85vw' }}
        data-aos="zoom-in-up"
        data-aos-duration="1000"
      >
        <Slider {...settings}>
          {this.props.cardList &&
            this.props.cardList.map((item, index) => {
              let image;
              if (item && item.imgPath) {
                image = `url(${item.imgPath})`;
              } else if (item && item.images && item.images.length > 0) {
                image = `url(${item.images[0]})`;
              }
              if (item) {
                return (
                  <ImageCard
                    imgPaddingTop={this.props.imgPaddingTop}
                    key={index}
                    isGreyedOut={this.props.isGreyedOut}
                    cardImg={image}
                    cardTitle={item.title}
                    cardDesc={item.desc}
                    path={item.path || `vendorPage/${item.vendorId}`}
                  />
                );
              }
            })}
        </Slider>
      </Container>
    );
  }
}
