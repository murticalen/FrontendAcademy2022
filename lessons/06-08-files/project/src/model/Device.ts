import React from "react";

export enum OperatingSystem {
    MacOS = 'mac',
    Windows = 'windows',
    Linux = 'linux'
}

enum KeyboardType {
    Membrane, // first item in enum is 0 by default if no value is provided
    Mechanical = 90,
    Butterfly, // this is 91
    Optical = 'opti',
    Other = 'other', // now we get an error (instead of 92) without provided value because Optical value wasn't a number
}

type SuperCoolColor = 'midnight black' | 'flashing red' | 'pulpe orange' | 'argentina silver' // all possible values

interface Device {
    os: OperatingSystem
    color: SuperCoolColor
    keyboardType?: KeyboardType // question mark means the value is optional, it is of type KeyboardType | undefined
    name: string|number // name can be either string and number
    type: 'mobile' | 'laptop' | 'desktop' // distinct values don't have to be exported to a type
}

type NetworkConnectivity = '2G' | '3G' | '4G' | '5G' | 1000 | SuperCoolColor

interface Smartphone extends Device {
    networkConnectivity: NetworkConnectivity[] // array of available connectivities
    type: 'mobile' // all smartphones have type === 'mobile'
}

interface InnerProps {
    device: Smartphone // if it were Device, polymorphism with Smartphone type would be valid
}

type HTMLStuff = Pick<React.HTMLAttributes<React.ElementType>, 'className' | 'style'> // pick only className and style from HTML Attrs.

type EmptyProps = Omit<InnerProps, 'device'> // omit device from InnerProps, now they are empty

type NewInnerProps = EmptyProps & {isBroken?: boolean} // NewInnerProps is union of empty props and {isBroken}

type ChildyProps = React.PropsWithChildren<NewInnerProps> // instead of writing Children manually in props, extend your type this way

export type SmartphoneProps = HTMLStuff & ChildyProps // final props are: 'className', 'style', 'children' and 'isBroken'