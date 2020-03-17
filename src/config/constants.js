export default {
    'appGradientTheme': getGradientTheme(),
    'gradClasses':gradClasses() 
}
function gradClasses() {
    const classes = ["amin","cosmic","stripe","instagram","dimigo","rainbowBlue","soundcloud","ver","booker", "ocean"];
    return classes;
}
function getGradientTheme() {
    const d = gradClasses()[Math.floor(Math.random() * Math.floor(gradClasses().length))]
    return d;
}
