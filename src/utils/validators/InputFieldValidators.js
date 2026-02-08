export function validateEmail(value) {
    let result = {
        valid: false,
        errorMessage: '',
    };
    if (String(value).length == 0) {
        result.valid = false;
        result.errorMessage = 'Email is required';
    }
    else if (String(value)
        .toLowerCase()
        .match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
        result.valid = true;
        result.errorMessage = '';
    }
    else {
        result.valid = false;
        result.errorMessage = 'Invalid Email';
    }
    return result;
}
export function validateNonEmptyFields(params) {
    let result = {
        valid: false,
        errorMessage: '',
    }, minLengthVar = params.minLength || 1;
    if (params.value.length == 0) {
        result.valid = false;
        result.errorMessage = params?.errorMessage ? params?.errorMessage : `This Field Cannot Be Empty`;
    }
    else if (params.value.length >= minLengthVar) {
        result.valid = true;
        result.errorMessage = '';
    }
    else {
        result.valid = false;
        result.errorMessage = `This Field must Contain more than ${params.minLength} characters`;
    }
    return result;
}
