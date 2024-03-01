import styled from 'styled-components'
import { Carousel } from 'antd'

const Container = styled.div`
    position: relative;
    height: fit-content;
`

const Img = styled.img`
    width: 100%;
`

const CarouselWrapper = styled(Carousel)`
    > .slick-dots {
        bottom: 5%;
    }
`

const Content = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    display: flex;
    flex-direction: column;
    color: white;
    justify-content: center;
    align-items: center;
`
const Title = styled.h1`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 44px;
    line-height: 48px;

    letter-spacing: -0.02em;
    color: #ffffff;
`

const Desc = styled.div`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #ffffff;
`
const Price = styled.div`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 28px;
    line-height: 36px;
    letter-spacing: -0.02em;
    color: #ffffff;
`
export { Container, Title, Desc, Price, Img, Content, CarouselWrapper }
