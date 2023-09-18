import React, { useEffect, useState } from 'react';
import { useDispatch } from "react-redux";
import styled from 'styled-components';

import { setPage } from '../../reducer/save_page';

export default function Pagination(props) {
    console.log(props.totalPage);
    // 페이지 이동시 처음 페이지로 이동.

    const dispatch = useDispatch();

    const [selectedPage, setSelectedPage] = useState(1);

    if (props.totalPage === undefined || props.totalPage <= 0) {
        return null;
    }

    const page = (index) => {
        console.log(index);
        (dispatch(setPage(index)))
        setSelectedPage(index);
    }

    const renderButtons = () => {
        const buttons = [];
        for (let index = 1; index <= props.totalPage; index++) {
            buttons.push(
                <Button
                    key={index}
                    onClick={() => page(index )}
                    selected={selectedPage === index }
                >
                    {index}
                </Button>
            );
        }
        return buttons;
    };

    return (
        <div>
            {renderButtons()}
        </div>
    );
}

const Button = styled.button`
    width: 30px;
    height: 30px;
    margin: 0px 1px;
    border: 0px;
    background: transparent;

    ${(props) =>
        props.selected &&
        `
        background: #5a82af;
        color: #fff;   
        `
        
    }
    
    &:hover {
        background: #e2e2e2;
        color : #000;
        cursor: pointer;
    }
`;