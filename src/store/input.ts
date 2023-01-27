const NAME_REGEX: RegExp = /[A-Za-z]{4}/;
const EMAIL_REGEX: RegExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{3,5}$/;
const PWD_REGEX: RegExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,15}$/;

export { PWD_REGEX, NAME_REGEX, EMAIL_REGEX };
