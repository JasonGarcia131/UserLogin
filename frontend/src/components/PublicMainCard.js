import React, { useState } from "react";
import PostTextBox from "./PostTextBox";
import Post from "./Post";
import "../pages/profile.css"
import { handleInfiniteScroll } from "./handlePaginate";
import InfiniteScroll from 'react-infinite-scroll-component';
import { useEffect } from "react";
import axios from "../api/axios";


function PublicMainCard(props) {


    const { theme, user, paginatedPosts, setPost, post, message, page, getPosts, setPaginatedPosts } = props;

    const { id } = user;


    //////////Need to find to hide delete button
    console.log("posts in main card", paginatedPosts)
    //commented to test infinte scroll feature.
    // const mappedPost = paginatedPosts?.map((post, i) => {
    //     return (
    //         <div key={i} >
    //             <Post username={post.author.username} profilePicture={post.author.profilePicture} content={post.content} handleDelete={handleDelete} theme={post.theme} date={post.createdAt} />
    //             <div className="deleteButtonWrapper">
    //                 <div onClick={() => handleDelete()}>...</div>
    //                 <button onClick={() => handleDelete(post._id)} className={editMode ? "unhide" : "hide"}>Delete</button>
    //                 <p>{post.isPrivate ? "Private" : "Public"}</p>
    //             </div>
    //         </div>
    //     )
    // })

    return (
        <section id="postWrapper" className={theme === "light" ? "postWrapperLight" : "postWrapperShadow"}>
            {theme === "light" ? <h2>Affirmations</h2> : <h2>Shadow Thoughts</h2>}
            {/* <Paginate page={page} getPosts={getPosts} /> */}
            <InfiniteScroll
                // height={"100%"}
                dataLength={paginatedPosts?.length}
                next={()=>handleInfiniteScroll(getPosts, page)}
                // inverse={false} //
                hasMore={page.next}
                loader={<h4>Loading...</h4>}
                scrollableTarget="scrollableDiv"
                scrollThreshold={.99}
            >
                {paginatedPosts.flat().map((post, index) => (
                    <div key={index}>
                        <Post username={user.username} profilePicture={user.profilePicture} content={post.content}theme={post.theme} date={post.createdAt} />
                    </div>
                ))}
                  
            </InfiniteScroll>
            {/* {mappedPost} */}
        </section>
    )
}

export default PublicMainCard;