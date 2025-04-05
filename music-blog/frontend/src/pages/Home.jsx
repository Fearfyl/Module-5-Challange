import { useContext} from 'react';
import { PostContext} from '../context/PostContext';
import PostCard from '../components/PostCard';

const Home = () => {
    const { posts } = useContext( PostContext);

    return (
        <div>
            <h1> Music Blog</h1>
            <div className="post-list">
                {posts.length ? (
                    posts.map((p) => <PostCard key={p._id} post={p} />)
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </div>
    );
};

export default Home;