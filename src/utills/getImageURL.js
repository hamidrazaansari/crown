export default function getImageURL(url) {
    if (url?.startsWith("http")) {        
        return url;
    }
    return `https://crownlam.com/server/uploads/${url}`;
}