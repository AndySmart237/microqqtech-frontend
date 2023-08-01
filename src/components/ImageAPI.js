// MICROQQTECH

import { useEffect, useState } from 'react';
import { getImageByID, SERVER_URL } from '../UtilitairesEtAPI';



const ImageAPI = (props) => {
    const [image, setImage] = useState([]);

    useEffect(() => {
        getImageByID(props.id)
            .then(response => {
                var img = response.data;
                img = { ...img, ...img.meta };
                img.download_url = SERVER_URL + img.download_url;
                setImage(img);
            })
            .catch(error => {
                console.log(error);
            })
    });


    return (
        <img alt={image.title} src={image.download_url} {... props} />
    );
}

export default ImageAPI;