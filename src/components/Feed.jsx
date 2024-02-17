import React, { useEffect, useState } from 'react';
import './Feed.css';
import InputOption from './InputOption';
import CreateIcon from '@mui/icons-material/Create';
import ImageIcon from '@mui/icons-material/Image';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter'; 
import NewspaperIcon from '@mui/icons-material/Newspaper';
import Post from './Post';


function Feed() {

    const [input, setInput] = useState('');
    const [posts, setPosts] = useState([]);

    // useEffect(() => {
    //     db.collection('posts')
    //         .orderBy('timestamp', 'desc')
    //         onSnapshot(snapshot => (
    //         setPosts(snapshot.docs.map(doc => (
    //             {
    //                 id: doc.id,
    //                 data: doc.data
    //             }
    //         )))
    //     ));
    // }, [])


    // const sendPost = (e) => {
    //     e.preventDefault();

    //     db.collection('posts').add({
    //         name: 'Test User',
    //         description: 'testuser@gmail.com',
    //         message: 'This is the message',
    //         photoUrl: '',
    //         timestamp: firebase.firestore.Fieldvalue.serverTimestamp()
    //     });

    //     setInput('');
    // };

    return (
        <div className='feed'>
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon />
                    <form>
                        <input
                            // value={value}
                            // onChange={e => setInput(e.target.value)}
                            type="text"
                        />
                        <button 
                            // onClick={sendPost} 
                            type='submit'
                        >
                                Send
                        </button>
                    </form>
                </div>
                <div className="feed__inputOptions">
                    <InputOption Icon={ImageIcon} title='Media' color="#70B5F9" />
                    <InputOption Icon={BusinessCenterIcon} title='Job' color="#E7A33E" />
                    <InputOption Icon={NewspaperIcon} title='Write Article' color="#7FE15E" />
                </div>
            </div>

            {/* Posts  */}
            {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
                <Post 
                    key={id}
                    name={name}
                    description={description}
                    message={message}
                    photoUrl={photoUrl}
                />
            ))}
            <Post 
                name='Test User'
                description='testuser@gmail.com'
                message='THis is a message'
            />
        </div>
    )
}

export default Feed