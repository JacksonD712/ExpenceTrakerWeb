import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { logout, setRefreshToken } from "../Store/authSlice";

const NewsPage = () => {
  const dispatch = useDispatch();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);  
  const [hasNextPage, setHasNextPage] = useState(false);
  const accessToken = useSelector((state) => state.auth.accessToken);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://backend-practice.euriskomobility.me/posts?page=${currentPage}&pageSize=9`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        setError(null);
        setPosts(response.data.results);
        setTotalPages(response.data.pagination.totalPages);
        setHasNextPage(response.data.pagination.hasNextPage);
      } catch (error) {
        if (error.response && error.response.status === 401) {
          dispatch(setRefreshToken())
            .then(() => {
              fetchPosts();
            })
            .catch(() => {
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
  }, [accessToken, currentPage, dispatch]);

  const handleNextPage = () => {
    if (hasNextPage) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {loading && <p className="text-gray-600">Loading...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}
      {posts.length > 0 ? (
        <>
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {posts.map((post) => (
              <li
                key={post._id}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <img
                  src={post.image_url}
                  className="w-full h-40 sm:h-48 object-cover object-center"
                  alt={post.description}
                />
                <div className="p-4">
                  <a
                    href={post.link}
                    className="block text-lg font-semibold text-gray-800 hover:text-indigo-600"
                  >
                    {post.title}
                  </a>
                </div>
              </li>
            ))}
          </ul>

          <div className="flex justify-between mt-4">
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className="text-blue-600 hover:underline"
            >
              Previous
            </button>
            <p className="text-gray-600">
              Page {currentPage} of {totalPages}
            </p>
            <button
              onClick={handleNextPage}
              disabled={!hasNextPage}
              className={`text-blue-600 hover:underline ${
                !hasNextPage ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              Next
            </button>
          </div>
        </>
      ) : (
        <p className="text-gray-600">No posts available.</p>
      )}
    </div>
  );
};

export default NewsPage;
