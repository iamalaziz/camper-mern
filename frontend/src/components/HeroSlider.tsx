import slider_1 from '../assets/images/slider_1.png';
import slider_2 from '../assets/images/slider_2.png';

import { Container, Content, Img, Title, Desc, Price, CarouselWrapper } from './slider';

export const HeroSlider = () => {
  return (
    <Container>
      <CarouselWrapper autoplay effect="fade">
        <Img src={slider_1} />
        <Img src={slider_2} />
      </CarouselWrapper>
      <Content>
        <Title>Looking for a caravan?</Title>
        <Desc>Caravan hire throughout Europe</Desc>
        <Price>1,250$ / month</Price>
      </Content>
    </Container>
  );
};

export default HeroSlider;
