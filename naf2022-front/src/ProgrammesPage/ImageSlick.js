

import Slider from 'react-slick';
import Container from '@material-ui/core/Container';
import ImageCard from './ImageCard';
import React, { Component } from 'react';
import './ReactSlick.css'
const cardList = [
  {
    title: 'Photography Contest',
    desc: 'Show off your photography skills!',
    imgPath:'https://i.pinimg.com/originals/7d/94/d6/7d94d65c4884688f783acd7c65661c52.jpg'
    ,
  },
  {
    title: 'SM Challenge',
    desc: 'Some kind of challenge',
    imgPath:'https://i.pinimg.com/originals/95/d2/f9/95d2f9385e02cca9c683628b0e722133.jpg'
    ,
  },
  {
    title: 'Online Scavenger',
    desc: 'Scavenge some stuff!',
    imgPath:'https://artfiles.alphacoders.com/862/thumb-1920-86226.jpg'
    ,
  },
  {
    title: 'Unfair Rage Platformer',
    desc: 'Best difficult game ever!',
    imgPath:'https://5.imimg.com/data5/QA/GF/NL/SELLER-635208/1-500x500.jpg'
    ,
  },
  {
    title: 'Voice Box',
    desc: 'Play my voice game!',
    imgPath:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW3ppEm5W2wjVgaTSRJuFA934o-sAdZ0bLcg&usqp=CAU'
    ,
  },
  {
    title: 'Something',
    desc: 'Sfeaojfoeiaofamnefnoa!',
    imgPath:'https://cdn.shopify.com/s/files/1/0969/9128/products/TSPF14_a4631349-97a4-40db-8df7-b626a1e405f3.jpg?v=1487153782'
    ,
  },

];


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
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <Container style={{ alignItems:'center' }} data-aos="zoom-in-up" data-aos-duration="1000"   maxWidth="lg">
        <Slider style={{ maxWidth: this.state.width -70 }} {...settings}>
          {cardList.map((item,index) => {
            return <ImageCard key={index} cardImg={`url(${item.imgPath})`} cardTitle={item.title} cardDesc={item.desc}/>
          })}

        </Slider>
      </Container >
    );
  }
}