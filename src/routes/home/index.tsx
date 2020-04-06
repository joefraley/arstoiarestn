/**
 * Home
 * -----------------------------------------------------------------------------
 */
import React from "react"
import { useTranslation } from "react-i18next"
import { useQuery } from "@apollo/react-hooks"
import { Card } from "components"
import * as Queries from "./data"

/**
 * Component
 * -----------------------------------------------------------------------------
 */
const Home: React.FC = () => {
    const { t } = useTranslation()
    const { loading, error, data } = useQuery(Queries.EXCHANGE_RATES)

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error :(</p>

    return (
        <div>
            <div className="bg-white p-sm">
                <h2>{t("home.welcome", { name: "Homer" })}</h2>
            </div>
            <div className="p-sm">
                <div className="row">
                    <div className="col p-xxs">
                        <Card onPress={() => false}>
                            <div className="mt-xs text-center">
                                {JSON.stringify(data)}
                            </div>
                        </Card>
                    </div>
                    <div className="col p-xxs">
                        <Card onPress={() => false}>
                            <img
                                src="/img/quick_check_network.png"
                                alt="Care team"
                                width="100%"
                            />
                            <div className="mt-xs text-center">
                                {t("home.checkNetwork")}
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
                                {t("home.researchMedications")}
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
                                {t("home.addToCommunity")}
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
                                {t("home.askANurse")}
                            </div>
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
