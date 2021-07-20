import React, {useState} from 'react'
import Axios from 'axios';
import S3FileUpload from 'react-s3';
import axios from 'axios';
require('dotenv').config();

export default function Upload(props) {
    
    const config = {
        bucketName: 'picture-lake-photo-upload',
        region: 'us-west-2',
        accessKeyId: process.env.REACT_APP_ACCESS_KEY_ID,
        secretAccessKey: process.env.REACT_APP_SECRET_ACCESS_KEY,
    }

    const [image, setImage] = useState(null);
    const [name, setName] = useState("");

    const {user} = props

    const apiUrl = process.env.REACT_APP_API_URL;

    const handleImageChange = (e) => {        
        setImage(e.target.files[0]);
    }
    
    //TODO: Create ability for duplicate filenames
    const postImage = async (e) => {
        const { location } = await S3FileUpload.uploadFile(image, config)
            .then((data) => data)
            .catch((err) => {
                return null;
            })

        if(location != null) {
            try {
                await axios
                    .post(apiUrl + 'images', {
                        url: location,
                        name: name,
                        username: user.username,
                    })
            } catch (err) {
                console.log(err);
            }
        }
    }

    return (
        <div>
            <input type="file" id="file" accept="image/png, image/jpeg"  onChange={handleImageChange} required/>
            <input type="text" placeholder="File Name" onChange={(e) => setName(e.target.value)} required/>
            <input type="submit" onClick={postImage}/>
        </div>
    )
}
