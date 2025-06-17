import React, { use, useEffect, useState } from 'react'
import { AuthContext } from '../../provider/AuthProvider';
import axios from 'axios';


const CommentCard = ({blog}) => {
     const {user} = use(AuthContext);
  const [commentText, setCommentText] = useState('');
  const [comments, setComments] = useState([]);
//   const { id } = useParams();
const {_id} = blog

  const isBlogOwner = user && blog?.userEmail === user?.email;

  useEffect(() => {
    const fetchComments = async () => {
      const res = await axios.get(`http://localhost:3000/comments/${_id}`);
      setComments(res.data);
    };
    fetchComments();
  }, [_id]);

  const handleComment = async () => {
  if (!commentText.trim()) return;
  const newComment = {
    blogId: blog._id,
    name: user.displayName,
    photoURL: user.photoURL,
    text: commentText,
     userEmail:user.email
  };

  await axios.post('http://localhost:3000/comments', newComment);
  setCommentText('');
  

  const res = await axios.get(`http://localhost:3000/comments/${_id}`);
  setComments(res.data);
};


  return (
   <div className="bg-gray-50 border rounded-xl p-6 mt-10 max-w-3xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Comments</h2>
      {isBlogOwner? (
        <p className="text-red-600 text-center font-semibold mb-4">
          Blog creator can not comment on his own blog
        </p>
      ) : (
        <div className="flex gap-3 items-start mb-6">
          <img
            src={user?.photoURL}
            alt="User"
            className="w-10 h-10 rounded-full border-2"
          />
          <div className="flex-1">
            <textarea
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              placeholder="Write a comment..."
              className="w-full p-2 rounded border focus:outline-indigo-500"
              rows={3}
            />
            <button
              onClick={handleComment}
              className="mt-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded"
            >
              Comment
            </button>
          </div>
        </div>
      )}

      {comments.map((c, i) => (
        <div
          key={i}
          className="flex items-start gap-3 bg-white p-3 mb-3 rounded shadow-sm"
        >
          <img
            src={c.photoURL}
            alt="User"
            className="w-10 h-10 rounded-full border"
          />
          <div>
            <p className="font-semibold">{c.name}</p>
            <p className="text-gray-700">{c.text}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default CommentCard
