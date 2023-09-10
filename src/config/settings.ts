const settings = {
    dev : {
        webClientId: '117276204222-oalhdd91730mvun65h5v36adh458ejj2.apps.googleusercontent.com'
    },
    prod : {
        webClientId: '117276204222-oalhdd91730mvun65h5v36adh458ejj2.apps.googleusercontent.com'
    }
}

const getCurrentSettings = () => {
    if(__DEV__) return settings.dev
    return settings.prod
}

export default getCurrentSettings();