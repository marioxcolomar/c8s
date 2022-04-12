import React from 'react'

const kmToMiles = 'KM_TO_ML'
const milesToKm = 'ML_TO_KM'

interface C8DistanceProps {
    trigger: any
}

const Distance: React.FC<C8DistanceProps> = ({ trigger }) => {
    const [direction, setDirection] = React.useState(kmToMiles)

    if (trigger) {
        return trigger
    }

    return (
        <div>
            <div></div>
            <div>
                <div>KM</div>
                <button onClick={() => direction === kmToMiles ? setDirection(milesToKm) : setDirection(kmToMiles)}>{direction}</button>
                <div>Miles</div>
            </div>
        </div>
    )
}

export default Distance