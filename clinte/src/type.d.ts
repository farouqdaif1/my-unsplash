interface ImageData {
    id: number
    link: string
    label: string
}
type ImageState = {
    images: ImageData[]
}
type ImageAction = {
    type: string
    image: ImageData
}
type DispatchType = (args: ImageAction) => ImageAction