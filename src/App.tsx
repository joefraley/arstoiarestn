import React from "react"
import { Card } from "elements"

/**
 * Component
 * -----------------------------------------------------------------------------
 */
const App: React.FunctionComponent = () => {
    return (
        <div className="App">
            <div className="p-4">
                {/* Text */}
                <h1>Heading H1</h1>
                <h2>Heading H2</h2>
                <h3>Heading H3</h3>
                <h4>Heading H4</h4>
                <h5>Heading H5</h5>
                <h6>Heading H6</h6>

                {/* Cards */}
                <div className="row">
                    <div className="col">
                        <Card>
                            <h6>Title</h6>
                            <p className="mb-0">
                                Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit. Non voluptatem voluptates ut
                                libero iusto ipsa ratione ad corporis est ullam?
                                Impedit, cupiditate ab! Neque maxime officiis
                                omnis quasi ipsam quia.
                            </p>
                        </Card>
                    </div>
                    <div className="col">
                        <Card>
                            <p className="mb-0">
                                Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit. Non voluptatem voluptates ut
                                libero iusto ipsa ratione ad corporis est ullam?
                                Impedit, cupiditate ab! Neque maxime officiis
                                omnis quasi ipsam quia.
                            </p>
                        </Card>
                    </div>
                    <div className="col">
                        <Card>
                            <p className="mb-0">
                                Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit. Non voluptatem voluptates ut
                                libero iusto ipsa ratione ad corporis est ullam?
                                Impedit, cupiditate ab! Neque maxime officiis
                                omnis quasi ipsam quia.
                            </p>
                        </Card>
                    </div>
                </div>

                {/* Buttons */}
            </div>
        </div>
    )
}

/**
 * Export component
 * -----------------------------------------------------------------------------
 */
export default App
