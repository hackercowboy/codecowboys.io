import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Element } from 'react-scroll';
import utils from 'lodash';

import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
} from 'reactstrap';

import './ApplicationCarousel.css';

export default class ApplicatinCarousel extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
    this.children = this.children.bind(this);
  }

  children() {
    const { children } = this.props;
    return utils.isArray(children) ? children : [children];
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === this.props.children.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? this.props.children.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;
    const children = this.children();

    const slides = children.map((child, index) => (
      <CarouselItem
        onExiting={this.onExiting}
        onExited={this.onExited}
        key={index}
      >
        {child}
      </CarouselItem>
    ));

    return children.length > 1 ? (
      <Element name="application-carousel">
        <Carousel
          activeIndex={activeIndex}
          next={this.next}
          previous={this.previous}
          className="application-carousel"
        >
          <CarouselIndicators items={children.map((child, index) => ({ key: index })) } activeIndex={activeIndex} onClickHandler={this.goToIndex} />
          {slides}
          <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
          <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
        </Carousel>
      </Element>
    ) : (
      <Element name="application-carousel">
        <Carousel
          activeIndex={activeIndex}
          next={() => true}
          previous={() => true}
          className="application-carousel"
        >
          {slides}
        </Carousel>
      </Element>
    );
  }
}
