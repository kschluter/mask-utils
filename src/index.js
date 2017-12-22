// function to mask digits into US phone number format
export function maskUSPhone(phone) {
  // regex to check if value contains digits only
  const digitsOnly = /^\d+$/;
  // returning null when getting null, undefined, or an object that is no string as a parameter
  if (!phone || typeof phone !== 'string') {
    return null;
  }
  // returning the untouched value when it contains non-digit chars or when it has a length != 10
  if (digitsOnly.test(phone) === false || phone.length !== 10) {
    return phone;
  }
  // returning the masked value
  const areaCode = phone.substring(0, 3);
  const prefix = phone.substring(3, 6);
  const suffix = phone.substring(6, 10);
  return `(${areaCode}) ${prefix}-${suffix}`;
}

// function to mask digits into US Zip Code format
export function maskUSZipCode(zipcode) {
  if (!zipcode || typeof zipcode !== 'string') {
    return null;
  }
  if (zipcode.length <= 5) {
    return zipcode;
  }
  const zipCodePrefix = zipcode.substring(0, 5);
  const zipCodeSuffix = zipcode.substring(5);
  return `${zipCodePrefix}-${zipCodeSuffix}`;
}
