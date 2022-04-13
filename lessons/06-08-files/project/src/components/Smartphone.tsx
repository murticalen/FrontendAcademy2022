import React from "react";
import styled from "styled-components";
import DeviceNameContext from "../context/DeviceNameContext";
import { SmartphoneProps } from "../model/Device";

// if we style a classic HTML element, then we use dot syntax
const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

// if we style a styled component, then its name of it goes into brackets
const ExtendedContainer = styled(Container)`
    padding: 30px;
    border: 1px solid gray;

    & > .smart {
        padding: 5px;
        background-color: black;
        color: gold;
    }
`

export default function Smartphone(props: SmartphoneProps) {

    const device = React.useContext(DeviceNameContext)

    return (
        <ExtendedContainer>
            <div className={props.className} style={props.style}>
                Your phone {device.name && `${device.name } `}is {!props.isBroken && 'not '}broken
            </div>
            {props.children}
        </ExtendedContainer>
    )

}