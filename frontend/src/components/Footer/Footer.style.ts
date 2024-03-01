import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
    background-color: #006dab;
    color: #fff;
    margin-top: 50px;
    padding: 40px 0;
`
const Wrapper = styled.div`
    max-width: 1200px;
    display: flex;
    justify-content: space-around;
    margin: 0 auto;
`

const Logo = styled.h3`
    font-size: 24px;
    font-weight: 500;
`
const Column = styled.div`
    > h4 {
        padding-bottom: 10px;
        font-size: 18px;
    }
`
const SocialWrapper = styled.li`
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 5px 0;
`
const MenuItem = styled.li`
    padding: 5px 0;
    &:hover {
        text-decoration: underline;
        color: rgba(255, 255, 255, 0.8);
        cursor: pointer;
        font-size: 1.05rem;
    }
`

export { Container, Wrapper, Logo, Column, SocialWrapper, MenuItem }
