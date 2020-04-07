import { gql } from "apollo-boost"

export const EXCHANGE_RATES = gql`
    query {
        environmentConfig {
            janusEnvironmentName
            cognito {
                appClientId
                userPoolId
            }
            tealium {
                account
                profile
                environment
                endpoint
                ios
                android
            }
            pager {
                apiKeyAndroid
                apiKeyIos
            }
            buildSupport {
                minimumIosVersion
                minimumIosSemantic
                minimumAndroidVersion
                minimumAndroidSemantic
            }
            mpulse {
                accountId
            }
        }
    }
`
