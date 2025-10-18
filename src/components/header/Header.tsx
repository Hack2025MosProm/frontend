import React from 'react';
import { Col, Row, } from 'antd'
import { Container } from '../Container';
import './style.scss'
import logoImg from '../../assets/images/logo.svg'

interface Props {
    className?: string;
}

export const Header: React.FC<Props> = () => {
    return (
        <header className='header'>
            <Container fluid>
                <Row style={{ width: '100%' }}>
                    <Col xs={8} className='header__col'></Col>
                    <Col xs={8} className='header__col header__col--center'>
                        <img src={logoImg} alt="logo" className='header__logo d-none d-md-block' />
                    </Col>
                    <Col xs={8} className='header__actions header__col'></Col>
                </Row>
            </Container>
        </header>
    );
};