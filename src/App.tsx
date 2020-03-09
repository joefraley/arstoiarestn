import React from "react"
import { Card } from "components"

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
                <div className="bg-warm-gray-lightest p-4">
                    <h2>
                        Welcome back,
                        <br />
                        Jennifer
                    </h2>
                </div>
                <div className="p-4">
                    <div className="row">
                        <div className="col my-sm">
                            <Card>
                                <span className="text-primary">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Cum, iure maiores?
                                    Molestiae libero reprehenderit, ipsam
                                    doloribus soluta labore molestias quisquam
                                    nisi veniam mollitia dolores quia eaque
                                    perspiciatis accusantium vitae sed.
                                </span>
                            </Card>
                        </div>
                        <div className="col">
                            <Card>
                                <span className="text-secondary">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Cum, iure maiores?
                                    Molestiae libero reprehenderit, ipsam
                                    doloribus soluta labore molestias quisquam
                                    nisi veniam mollitia dolores quia eaque
                                    perspiciatis accusantium vitae sed.
                                </span>
                            </Card>
                        </div>
                        <div className="col">
                            <Card>
                                <span className="text-link">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Cum, iure maiores?
                                    Molestiae libero reprehenderit, ipsam
                                    doloribus soluta labore molestias quisquam
                                    nisi veniam mollitia dolores quia eaque
                                    perspiciatis accusantium vitae sed.
                                </span>
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
