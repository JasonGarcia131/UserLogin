import React, { useState } from "react";
import PostTextBox from "./PostTextBox";
import Post from "./Post";
import "../pages/profile.css"
import Paginate from "./Paginate";
import { handleInfiniteScroll } from "./handlePaginate";
import InfiniteScroll from 'react-infinite-scroll-component';
import { useEffect } from "react";
import { axiosPrivate } from "../api/axios";
import axios from "../api/axios";


function MainCard(props) {

    const [editMode, setEditMode] = useState(false);

    const { theme, user, paginatedPosts, setPost, post, handleSubmit, message, page, getPosts, setPaginatedPosts } = props;

    const { id, username, profilePicture } = user;

    const handleDelete = async (id, showDeleteButton) => {
        console.log("clicked delete on post", id)
        
        if (!id) return setEditMode(!editMode);

        try{
            const response = await axios.delete(`/posts/${id}`);
            console.log("post deleted", response.data)
            const filteredPost = paginatedPosts.filter(post=>post.id != response.data.id);
            console.log("filtered post", filteredPost)
            setPaginatedPosts(filteredPost);
        }catch(e){
            console.log("error", e)
        }
    }

    useEffect(() => {
        
    }, [theme, paginatedPosts]);

    //////////Need to find to hide delete button
    console.log("posts in main card", paginatedPosts)
    //commented to test infinte scroll feature.
    const mappedPost = paginatedPosts?.map((post, i) => {
        return (
            <div key={i} >
                <Post username={post.author.username} profilePicture={post.author.profilePicture} content={post.content} handleDelete={handleDelete} theme={post.theme} date={post.createdAt} />
                <div className="deleteButtonWrapper">
                    <div onClick={() => handleDelete(null, i)}>...</div>
                    <button onClick={() => handleDelete(post._id, null)} className={editMode ? "unhide" : "hide"}>Delete</button>
                    <p>{post.isPrivate ? "Private" : "Public"}</p>
                </div>
            </div>
        )
    })

    return (
        <section className="postWrapper">
            {theme === "light" ? <h2>Affirmations</h2> : <h2>Shadow Thoughts</h2>}
            {/* <div className={!editMode ? "hide" : "unhide"} onClick={()=>setEditMode(!editMode)}>Delete Entries</div> */}
            <PostTextBox theme={theme} id={id} setPost={setPost} post={post} handleSubmit={handleSubmit} />
            <p>{message.length > 0 ? message : ""}</p>
            <Paginate page={page} getPosts={getPosts} />
            {/* <InfiniteScroll
                // height={"100%"}
                dataLength={posts.length}
                next={()=>handleInfiniteScroll(getPosts, page)}
                // inverse={false} //
                hasMore={page.next}
                loader={<h4>Loading...</h4>}
                scrollableTarget="scrollableDiv"
                scrollThreshold={.99}
            >
                {posts.flat().map((post, index) => (
                    <div key={index}>
                        <Post username={post?.author?.username} profilePicture={post?.author?.profilePicture} content={post?.content} handleDelete={handleDelete} theme={post?.theme} date={post?.createdAt} />
                        <div className="deleteButtonWrapper">
                            <button onClick={() => handleDelete(index)} className={editMode ? "hide" : "unhide"}>Delete</button>
                            <p>{post.isPrivate ? "Private" : "Public"}</p>
                        </div>
                    </div>
                ))}
                  
            </InfiniteScroll> */}
            {mappedPost}
        </section>
    )
}

export default MainCard;