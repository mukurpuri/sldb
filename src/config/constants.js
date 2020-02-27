export default {
    'appGradientTheme': getGradientTheme()
}

function getGradientTheme() {
    var gradClasses = ["amin","cosmic","instagram","dimigo","rainbowBlue","soundcloud","ver","booker"];
    return gradClasses[Math.floor(Math.random() * Math.floor(gradClasses.length))]
}