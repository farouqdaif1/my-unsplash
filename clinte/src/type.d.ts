interface Image{
    id: string;
    label: string;
    link: string; 
}
type ImageState= {
    images: Image[];
}

type ImagesAction = {
    type: string,
    payload: Image[],
}
