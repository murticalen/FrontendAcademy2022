import * as React from 'react'

interface DeviceNameContextInterface {
    name?: string
}

const DeviceNameContext = React.createContext({})

export default DeviceNameContext as React.Context<DeviceNameContextInterface>
