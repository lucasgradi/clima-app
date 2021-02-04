import React, { useContext } from 'react'

import { ClimaContext } from './ClimaContext'

const ClimaActual = () => {
    const { clima } = useContext(ClimaContext)
    return (
        <div>
            {clima.name}
        </div>
    )
}

export default ClimaActual;
