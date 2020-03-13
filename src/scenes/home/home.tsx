/**
 * Home
 * -----------------------------------------------------------------------------
 */
import React from "react"
import { useTranslation } from "react-i18next"
import { Card } from "components"

/**
 * Component
 * -----------------------------------------------------------------------------
 */
const Home: React.FC = () => {
    /**
     * Hooks
     */
    const { t } = useTranslation()

    /**
     * Template
     */
    return (
        <div>
            <div className="bg-white p-sm">
                <h2>{t("home.welcome", { name: "Homer" })}</h2>
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
