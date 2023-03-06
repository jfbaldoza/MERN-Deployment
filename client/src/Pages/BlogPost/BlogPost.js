import Navbar from '../../Components/Navbar/Navbar'
import styles from '../BlogPost/BlogPost.module.css'
import { useParams} from 'react-router-dom'
import axios from 'axios';
import React, {useState, useEffect} from 'react'

const BlogPost = () => {

    const { id } = useParams();
    const [details, setDetails] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:8005/api/blog/${id}`)
            .then((res) => {
                console.log(res.data);
                setDetails(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [id]);

    return (
        <div className={styles.app_blogpost}>
            <Navbar/>
            <div className={styles.app_blogpost_container}>
                <img src={details.photo} alt="Blog" />
                <h1>{details.title}</h1>
                <div className={styles.app_blogpost_details}>
                    <p>{new Date(details.createdAt).toDateString()}</p>
                </div>
                <p>{details.desc}</p>
            </div>

        </div>
    )
}

export default BlogPost