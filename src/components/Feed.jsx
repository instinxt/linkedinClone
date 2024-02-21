import React, { useEffect, useState } from 'react';
import './Feed.css';
import InputOption from './InputOption';
import CreateIcon from '@material-ui/icons/Create';
import ImageIcon from '@material-ui/icons/Image';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import Post from './Post';
import {
    db,
    collection,
    serverTimestamp,
    addDoc,
    orderBy,
    onSnapshot,
    query,
    getDocs,
} from './firebase';
import { useSelector } from 'react-redux';
import FlipMove from 'react-flip-move';
import { selectUser } from '../features/userSlice';

function Feed() {
    const user = useSelector(selectUser);

    const colRef = collection(db, 'posts');
    // form input
    const [input, setInput] = useState('');
    // posts array
    const [posts, setPosts] = useState([]);
    // the posts query
    const q = query(colRef, orderBy('timestamp', 'desc'));

    // get posts once on page reload
    useEffect(() => {
        onSnapshot(q, (snapshot) => {
            setPosts(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data(),
                }))
            );
        });
    }, []);


    const sendPost = (e) => {
        e.preventDefault();

        addDoc(colRef, {
            name: user.displayName,
            description: user.email,
            message: input,
            photoUrl: user.photoUrl || '',
            timestamp: serverTimestamp()
        });

        setInput('');
    };

    return (
        <div className='feed'>
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon />
                    <form>
                        <input
                            value={input}
                            onChange={e => setInput(e.target.value)}
                            type="text"
                        />
                        <button
                            onClick={sendPost}
                            type='submit'
                        >
                            Send
                        </button>
                    </form>
                </div>
                <div className="feed__inputOptions">
                    <InputOption Icon={ImageIcon} title='Media' color="#70B5F9" />
                    <InputOption Icon={BusinessCenterIcon} title='Job' color="#E7A33E" />
                    <InputOption Icon={MenuBookIcon} title='Write Article' color="#7FE15E" />
                </div>
            </div>

            {/* Posts  */}

            <FlipMove>
                {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
                    <Post
                        key={id}
                        name={name}
                        description={description}
                        message={message}
                        photoUrl={photoUrl}
                    />
                ))}
            </FlipMove>
        </div>
    )
}

export default Feed