import React from 'react'
import { Menu, Select, Typography } from 'antd'
import type { MenuProps } from 'antd'

import { Header } from 'antd/es/layout/layout'
import Profile from '../../assets/icons/user.svg?react'
import Cart from '../../assets/icons/cart.svg?react'
import Arrow from '../../assets/icons/arrow-down.svg?react'

import styled from 'styled-components'

const { Title } = Typography

const MenuContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
`

const LanguageDropdown: React.FC = () => {
    return (
        <React.Fragment>
            <Select
                options={[
                    { value: 'En', label: <span>En</span> },
                    { value: 'Kr', label: <span>Kr</span> },
                    { value: 'Ru', label: <span>Ru</span> },
                ]}
                defaultValue="En"
                placement="topLeft"
                style={{ border: 'none', outline: 'none' }}
            />
        </React.Fragment>
    )
}

const navItems: MenuProps['items'] = [
    {
        key: '/motor',
        label: 'Motor',
        icon: <Arrow />,
    },
    {
        key: '/caravan',
        label: 'Caravan',
        icon: <Arrow />,
    },
    {
        key: '/tuning',
        label: 'Tuning',
        icon: <Arrow />,
    },
    {
        key: '/used-car',
        label: 'Used Car',
        icon: <Arrow />,
    },
    {
        key: '/places',
        label: 'Places',
    },
]

const Navbar: React.FC = () => {
    return (
        <Header
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                backgroundColor: 'white',
                borderBottom: '1px solid grey',
            }}
        >
            <Title style={{ fontSize: '25px', color: '#006DAB', margin: 0 }}>
                Camper
            </Title>
            <Menu theme="light" mode="horizontal" items={navItems} />
            <MenuContainer>
                <Cart />
                <Profile />
                <LanguageDropdown />
            </MenuContainer>
        </Header>
    )
}

export default Navbar
