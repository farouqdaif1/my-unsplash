interface Image{
    _id: string;
    label: string;
    link: string; 
}
type ImageState= {
    images: Image[];
}

type ImagesAction = {
    type: string,
    payload: ImageState,
}
