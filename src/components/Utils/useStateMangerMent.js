import { useState } from "react"
import React from "react"

const useStateMangerMent = () => {
    const [selectedCategory, setSelectedCategory] = useState("New")
    const [video, setVideo] = useState([])

    return (
        <div>useStateMangerMent</div>
    )
}

export default useStateMangerMent
