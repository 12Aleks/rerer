import React, {useState, useEffect, useRef} from 'react';
import {Container, Row, Col, InputGroup, FormControl} from 'react-bootstrap';
import {ArrowLeftRight} from "react-bootstrap-icons";
import UniversalTable from "../UniversalTable";

const First = () => {
    const [rem, setRem] = useState(1);
    const [px, setPx] = useState(16);
    const [toggleSwitch, setToggleSwitch] = useState(false);
    const [position, setPosition] = useState(false);
    const tableFirst = [
        { px : 1, unit: 0.0625},
        { px : 2, unit: 0.125},
        { px : 4, unit: 0.25},
        { px : 8, unit: 0.5},
        { px : 10, unit: 0.625},
        { px : 12, unit: 0.75},
        { px : 14, unit: 0.875}
    ];
    const tableSecond = [
        {  px: 16, unit: 1},
        {  px: 18, unit:1.125},
        {  px: 20, unit:1.25},
        {  px: 24, unit:1.5},
        {  px: 32, unit:2},
        {  px: 64, unit:4},
        {  px: 72, unit:4.5}
    ];


    useEffect(() => {
      toggleSwitch? setRem(px / 16): setPx(rem * 16)
    }, [px, rem]);

    const inputFun = () => setToggleSwitch(!toggleSwitch);

    return (
        <Container>
            <Row>
                <Col md={3}>
                    1
                </Col>
                <Col md={6}>
                    <Row>
                        <Col md={12} className='order-0'>
                    <div className={`input-wrapper ${position && "flex-row-reverse"}`}>
                        <div>
                            <p>Px</p>
                            <InputGroup className="mb-3" size="lg">
                                <FormControl
                                    type="text"
                                    value={px}
                                    onChange={(e) => setPx(e.target.value)}
                                    onClick={inputFun}/>
                                <InputGroup.Text>px</InputGroup.Text>
                            </InputGroup>
                        </div>

                        <div onClick={() => setPosition(!position)}>
                            <ArrowLeftRight  size={20}/>
                        </div>

                        <div>
                            <p>Rem</p>
                            <InputGroup className="mb-3" size="lg">
                                <FormControl type="text"
                                             value={rem}
                                             onChange={(e) => setRem(e.target.value)}
                                             onClick={inputFun} />
                                <InputGroup.Text >rem</InputGroup.Text>
                            </InputGroup>
                        </div>
                    </div>
                        </Col>
                        <Col md={6} className={`text-wrapper ${position && 'order-1'}`}>
                            <p><b>Pixel</b> unit (px). Pixels are fixed-size units that are used in screen media (i.e. to be read on the computer screen). One pixel is equal to one dot on the computer screen (the smallest division of a screen’s resolution).</p>
                        </Col>
                        <Col md={6} className={`text-wrapper ${!position && 'order-1'}`}>
                            <p>The <b>Rem</b> unit is based upon the font-size value of the root element, which is the element. And if the element doesn’t have a specified font-size, the browser default value of 16px is used. So here only the value of the root is considered, and there is no relation with a parent element.</p>
                        </Col>
                        <Col md={12} className='order-2 d-flex align-items-center'>
                             <UniversalTable  unitName={'rem'} data={tableFirst}/>
                             <UniversalTable  unitName={'rem'} data={tableSecond}/>
                        </Col>
                    </Row>
                </Col>
                <Col md={3}>
                    2
                </Col>
            </Row>
        </Container>
    );
};

export default First;