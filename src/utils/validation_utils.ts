export interface PasswordValidator {
    readonly hasEightChar: boolean
    readonly hasSymbol: boolean
    readonly hasUppercase: boolean
    readonly hasNumber: boolean
}

export const validatePassword = (password: string): PasswordValidator => {
    return {
        hasUppercase: /[A-Z]/.test(password) && /[a-z]/.test(password),
        hasSymbol: /^[A-Za-z0-9!#$%&*]*[!|#|$|%|&|*][A-Za-z0-9!#$%&*]*$/.test(
            password,
        ),
        hasEightChar: password.length >= 8,
        hasNumber: /\d/.test(password),
    }
}

export const isPasswordValid = (password: string): boolean => {
    const validator: PasswordValidator = validatePassword(password)
    return (
        validator.hasUppercase &&
        validator.hasSymbol &&
        validator.hasEightChar &&
        validator.hasNumber
    )
}
