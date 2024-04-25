import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { logout, refreshAccessToken } from "../Store/AuthneticationSlice";

const NewsPage = () => {
  const dispatch = useDispatch();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const accessToken = useSelector(state => state.auth.accessToken);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "https://backend-practice.euriskomobility.me/posts?page=1&pageSize=10",
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        setError(null);
        setPosts(response.data.results); // Update posts state with fetched data
        console.log("Posts:", response.data.results); // Log the data to the console
      } catch (error) {
        if (error.response && error.response.status === 401) {
          // If token expired, attempt to refresh it
          dispatch(refreshAccessToken())
            .then(() => {
              // Retry fetching posts after successful token refresh
              fetchPosts();
            })
            .catch(() => {
              // Log out if token refresh fails
              dispatch(logout());
            });
        } else {
          setError("Failed to fetch posts. Please try again later.");
        }
      } finally {
        setLoading(false);
      }
    };

    if (accessToken) {
      fetchPosts();
    }
  }, [accessToken, dispatch]);

  return (
    <div className="container mx-auto px-4 py-8">
      {loading && <p className="text-gray-600">Loading...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}
      {posts.length > 0 ? (
        <ul>
          {posts.map(post => (
            <li key={post._id} className="mb-2">
                <img src={post.image_url} className="w-full h-full object-cover" alt={post.description} />

              <a href={post.link} className="text-blue-600 hover:underline">
                {post.title}

              </a>
            </li>
          ))}
        </ul>
      ) : (
        <p>No posts available.</p>
      )}
    </div>
  );
};

export default NewsPage;
