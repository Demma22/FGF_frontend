import React, { useReducer } from 'react'
import CreatePlant from './pages/CreatePlant'
// Add update form for plants
import { useSelector } from 'react-redux'

const PlantReducer = (state) => {
    return {
        ...state,
        [event.target.name]: event.target.value
    }
}

function PlantForm() {

    const [plantData, setPlantData] = useReducer(PlantReducer, {})
    const formId = useSelector((state) => state.app.client.formId)

    /** To manually toggle the form */
    //const flag = false

    return (
        <>
            <div>
                {formId ? UpdatePlantForm({ formId, plantData, setPlantData }) : CreatePlant({ plantData, setPlantData })}
            </div>
        </>
    )
}

export default PlantForm