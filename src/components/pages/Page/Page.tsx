import React from 'react';
import Menu from '../../sections/Menu/Menu';

const Page: React.FC = props => (
    <>
        <Menu />
        {props.children}
    </>
)

export default Page;