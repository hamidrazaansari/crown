export default function getImageURL(url) {
    if (url.startsWith("http")) {
        return url;
    }
    return `http://43.204.97.70/server/uploads/${url}`;
}