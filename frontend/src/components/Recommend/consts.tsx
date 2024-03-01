import car_1 from '../../assets/images/car_1.png'
import car_2 from '../../assets/images/car_2.png'
import car_3 from '../../assets/images/car_3.png'
import car_4 from '../../assets/images/car_4.png'

type Props = {
    model: string
    img: string
    isBest?: boolean
}

export const sliderItems: Props[] = [
    {
        model: 'Sunlight',
        img: car_1,
        isBest: true,
    },
    {
        model: 'Knaus',
        img: car_2,
    },
    {
        model: 'Weinsberg',
        img: car_3,
        isBest: true,
    },
    {
        model: 'Chausson',
        img: car_4,
    },
]

export const settings = {
    infinite: true,
    centerPadding: '25px',
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 500,
    arrows: true,
    adaptiveHeight: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
            },
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
            },
        },
    ],
}
