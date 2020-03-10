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
                <div className="py-sm px-md">
                    <Button
                        name="brand-home-button"
                        variant="content"
                        onPress={() => false}
                    >
                        <img
                            src="/img/brand_wordmark_inverted.png"
                            alt="Journi"
                            width="100%"
                        />
                    </Button>
                </div>
            </div>
            <div className="main">
                <div className="bg-white pt-lg p-sm">
                    <h2>
                        Welcome back,
                        <br />
                        Jennifer
                    </h2>
                </div>
                <div className="p-sm">
                    <div className="row">
                        <div className="col p-xxs">
                            <Card onPress={() => false}>
                                <img
                                    src="/img/quick_check_network.png"
                                    alt="Care team"
                                    width="100%"
                                />
                                <div className="mt-xs text-center">
                                    Check network
                                </div>
                            </Card>
                        </div>
                        <div className="col p-xxs">
                            <Card onPress={() => false}>
                                <img
                                    src="/img/quick_medications.png"
                                    alt="Care team"
                                    width="100%"
                                />
                                <div className="mt-xs text-center">
                                    Research medications
                                </div>
                            </Card>
                        </div>
                        <div className="col p-xxs">
                            <Card onPress={() => false}>
                                <img
                                    src="/img/quick_care_team.png"
                                    alt="Care team"
                                    width="100%"
                                />
                                <div className="mt-xs text-center">
                                    Add to community
                                </div>
                            </Card>
                        </div>
                        <div className="col p-xxs">
                            <Card onPress={() => false}>
                                <img
                                    src="/img/quick_nurse.png"
                                    alt="Care team"
                                    width="100%"
                                />
                                <div className="mt-xs text-center">
                                    Ask a nurse
                                </div>
                            </Card>
                        </div>
                    </div>
                    <h2>Heading H2</h2>
                    <h3>Heading H3</h3>
                    <h4>Heading H4</h4>
                    <h5>Heading H5</h5>
                    <h6>Heading H6</h6>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Fugiat quae beatae dolor, magnam mollitia tempora
                        perferendis eaque hic rerum labore eius quidem eum,
                        excepturi incidunt error ea natus dolorem? Fugit.
                    </p>
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
