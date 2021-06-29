import React, {useState} from 'react'
import Axios from 'axios';
import S3FileUpload from 'react-s3';
require('dotenv').config();

export default function Upload() {
    
    const [image, setImage] = useState(null);
    const [name, setName] = useState("");
    // const [imgSrc, setImgSrc] = useState(null);

    const config = {
        bucketName: 'picture-lake-photo-upload',
        region: 'us-west-2',
        accessKeyId: process.env.REACT_APP_ACCESS_KEY_ID,
        secretAccessKey: process.env.REACT_APP_SECRET_ACCESS_KEY
    }

    const handleImageChange = (e) => {
        console.log(e.target.files[0]);
        setImage(e.target.files[0]);
    }
    
    const postImage = async (e) => {
        S3FileUpload.uploadFile(image, config)
            .then((data) => {
                console.log(data.location);
                // setImgSrc(data.location);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <div>
            <input type="file" id="file" accept="image/png, image/jpeg"  onChange={handleImageChange} required/>
            <input type="text" placeholder="File Name" onChange={(e) => setName(e.target.value)} required/>
            <input type="submit" onClick={postImage}/>
            {/* <img src={imgSrc ? imgSrc : null} alt="asdf" /> */}
        </div>
    )
}
