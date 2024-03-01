import React from 'react'
import {
    Container,
    Wrapper,
    Column,
    Logo,
    SocialWrapper,
    MenuItem,
} from './Footer.style'
import youtube from '../../assets/icons/youtube.png'
import instagram from '../../assets/icons/instagram.png'
import naver from '../../assets/icons/naver.png'

const Footer: React.FC = () => {
    return (
        <Container>
            <Wrapper>
                <Column>
                    <Logo>Camper</Logo>
                </Column>
                <Column>
                    <h4>Services</h4>
                    <ul>
                        <MenuItem>Camping</MenuItem>
                        <MenuItem>Lodging</MenuItem>
                        <MenuItem>Harbour</MenuItem>
                        <MenuItem>Day Use</MenuItem>
                    </ul>
                </Column>
                <Column>
                    <h4>Menu</h4>
                    <ul>
                        <MenuItem>About</MenuItem>
                        <MenuItem>Service</MenuItem>
                        <MenuItem>Booking</MenuItem>
                        <MenuItem>Blog</MenuItem>
                    </ul>
                </Column>
                <Column>
                    <h4>Contact</h4>
                    <ul>
                        <SocialWrapper>
                            <span>
                                <img src={youtube} alt="social media" />
                            </span>
                            <span>
                                <img src={instagram} alt="social media" />
                            </span>
                            <span>
                                <img src={naver} alt="social media" />
                            </span>
                        </SocialWrapper>
                        <MenuItem>67 Jurye-ro Busan, Korea Seul, LA</MenuItem>
                        <MenuItem>camper@gmail.com</MenuItem>
                        <MenuItem>(021) 345-6789-99</MenuItem>
                    </ul>
                </Column>
            </Wrapper>
        </Container>
    )
}

export default Footer
