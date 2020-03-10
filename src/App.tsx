import React from "react"
import { Button, Card } from "components"

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
                    <div className="p-sm">
                        <Button
                            icon="stethoscope"
                            name="primary-icon-button-test"
                            variant="primary"
                            size="large"
                            onPress={() => false}
                            className="mb-xs"
                        />
                        <Button
                            label="Primary"
                            name="primary-button-test"
                            variant="primary"
                            size="large"
                            onPress={() => false}
                            className="mb-xs"
                        />
                        <Button
                            icon="stethoscope"
                            name="primary-icon-button-test"
                            variant="primary"
                            onPress={() => false}
                            className="mb-xs"
                        />
                        <Button
                            label="Primary"
                            name="primary-button-test"
                            variant="primary"
                            onPress={() => false}
                            className="mb-xs"
                        />
                        <Button
                            icon="stethoscope"
                            name="primary-icon-button-test"
                            variant="primary"
                            size="small"
                            onPress={() => false}
                            className="mb-xs"
                        />
                        <Button
                            label="Primary"
                            name="primary-button-test"
                            variant="primary"
                            size="small"
                            onPress={() => false}
                            className="mb-xs"
                        />
                        <br />
                        <Button
                            icon="stethoscope"
                            name="primary-icon-button-test"
                            variant="secondary"
                            onPress={() => false}
                            className="mb-xs"
                        />
                        <Button
                            label="Secondary"
                            name="primary-secondary-test"
                            variant="secondary"
                            onPress={() => false}
                            className="mb-xs"
                        />
                        <br />
                        <Button
                            icon="stethoscope"
                            name="primary-icon-button-test"
                            variant="link"
                            onPress={() => false}
                            className="mb-xs"
                        />
                        <Button
                            label="Link"
                            name="primary-link-test"
                            variant="link"
                            onPress={() => false}
                            className="mb-xs"
                        />
                    </div>
                </div>
                <div className="p-4">
                    <div className="row">
                        <div className="col my-sm">
                            <Card onPress={() => false}>
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
