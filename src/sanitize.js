import DOMPurify from 'dompurify';

export const sanitize = (input) => {
    const sanitizedInput = DOMPurify.sanitize(input)

    return sanitizedInput
}