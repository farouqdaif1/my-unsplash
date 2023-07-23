interface Image {
    id: number
    imageLink: string
    title: string
}
type ImageState = {
    articles: Image[]
}
type ImageAction = {
    type: string
    article: Image
}
type DispatchType = (args: ImageAction) => ImageAction