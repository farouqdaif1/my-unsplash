interface Image {
    _id?: string;
    label: string;
    link: string;
    createdAt?: string;
    updatedAt?: string;    
}
type ImageState = {
    images: Image[];
}
