const validate= ( value, rules ) => {
	let isValid = true;

	if ( ! rules ) {
		return true;
	}

	if ( rules.required ) {
		isValid = value.trim() !== '' && isValid;
	}

	if ( rules.isNumber ) {
		const pattern = /^[0-9]+$/;
		isValid = pattern.test( value ) && isValid;
	}

	return isValid;
};


export default validate;
