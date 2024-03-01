import React from 'react'
import { sliderItems, settings } from './consts'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import {
    SliderContainer,
    Card,
    CardTick,
    ImageWrapper,
    TitleWrapper,
    Text,
    CButton,
} from './Reccomend.styles'

const Recomend: React.FC = () => {
    return (
        <SliderContainer>
            <TitleWrapper level={3}>Recommend</TitleWrapper>
            <Slider {...settings} arrows={false}>
                {sliderItems.map((item) => (
                    <Card key={item.model}>
                        <ImageWrapper src={item.img} alt="Motorhome" />
                        {item.isBest && <CardTick>BEST</CardTick>}
                        <Text>{item.model}</Text>
                        <CButton>Discover</CButton>
                    </Card>
                ))}
            </Slider>
        </SliderContainer>
    )
}

export default Recomend
