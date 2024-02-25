import styled from 'styled-components';
import { Typography, Button } from 'antd';
const { Title } = Typography;

const SliderContainer = styled.div`
  margin: 50px auto;
  max-width: 1024px;
`;

const Card = styled.div`
  max-width: 200px;
  text-align: center;
  position:relative;
  margin-top: 40px;
`;
const CardTick = styled.div`
  position: absolute;
  right: 0;
  top: -10%;
  z-index: 200;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #ff7a00;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  font-weight: 500;
`;

const ImageWrapper = styled.img`
  width: 100%;
`;
const TitleWrapper = styled(Title)`
  text-decoration: underline;
  text-decoration-color: #ff7a00;
  color: #373737;
  line-height: 2rem;
  text-align: center;
  margin: 0 auto;
  padding-bottom: 40px;
`;
const CButton = styled(Button)`
  background: #006dab;
  width: 100%;
  color: #fff;
  font-weight: 500;
  letter-spacing: 2px;
`;
const Text = styled.p`
  margin: 20px 0;
`;

export {
  SliderContainer,
  Card,
  CardTick,
  ImageWrapper,
  TitleWrapper,
  Text,
  CButton,
};
