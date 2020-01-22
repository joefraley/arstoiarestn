import React from "react"

const App: React.FC = () => {
    let dude: any = "what"
    dude = "lorem"
    console.log("dude")
    return (
        <div className="App">
            <p>{dude}</p>
        </div>
    )
}

export default App
