export const trim = (text: string, max_len = 20) => (
    text.length > max_len ? (text.substring(0, max_len) + '...') : text
)