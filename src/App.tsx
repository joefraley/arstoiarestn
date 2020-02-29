import React from "react"
import { Card } from "elements"

/**
 * Component
 * -----------------------------------------------------------------------------
 */
const App: React.FunctionComponent = () => {
    return (
        <div className="app">
            <div className="sidebar">
                <h5 className="text-white">Sidebar</h5>
            </div>
            <div className="main">
                <div className="bg-white p-4">
                    <h2>
                        Welcome back,
                        <br />
                        Jennifer
                    </h2>
                </div>
                <div className="p-4">
                    <div className="row">
                        <div className="col">
                            <Card>
                                <p className="mb-0">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Cum, iure maiores?
                                    Molestiae libero reprehenderit, ipsam
                                    doloribus soluta labore molestias quisquam
                                    nisi veniam mollitia dolores quia eaque
                                    perspiciatis accusantium vitae sed.
                                </p>
                            </Card>
                        </div>
                        <div className="col">
                            <Card>
                                <p className="mb-0">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Cum, iure maiores?
                                    Molestiae libero reprehenderit, ipsam
                                    doloribus soluta labore molestias quisquam
                                    nisi veniam mollitia dolores quia eaque
                                    perspiciatis accusantium vitae sed.
                                </p>
                            </Card>
                        </div>
                        <div className="col">
                            <Card>
                                <p className="mb-0">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Cum, iure maiores?
                                    Molestiae libero reprehenderit, ipsam
                                    doloribus soluta labore molestias quisquam
                                    nisi veniam mollitia dolores quia eaque
                                    perspiciatis accusantium vitae sed.
                                </p>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

/**
 * Export component
 * -----------------------------------------------------------------------------
 */
export default App
