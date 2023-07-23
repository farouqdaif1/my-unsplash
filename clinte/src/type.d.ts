interface ImageData {
    id: number
    link: string
    label: string
}
type ImageState = ImageData[]
type ImageAction = {
    type: string
    payload: ImageData
}
type DispatchType = (args: ImageAction) => ImageAction