/**
 * Home
 * -----------------------------------------------------------------------------
 */
import React from "react"
import { Card } from "components"

/**
 * Component
 * -----------------------------------------------------------------------------
 */
const Home: React.FC = () => {
    return (
        <div>
            <div className="bg-white p-sm">
                <h2>
                    Welcome back,
                    <br />
                    Homer
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
                            <div className="mt-xs text-center">Ask a nurse</div>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}

/**
 * Export
 * -----------------------------------------------------------------------------
 */
export default Home
