import constants from 'src/constants'

function isEmail(email) {
    return email.match(constants.emailRegex)
}

export default isEmail
