import React from "react";
import { PostType } from "../../../../types";
import Post from "../../Common/Post/Post";
import { FreeBoardLayout } from "./FreeBoard.styles";

interface FreeBoardProps {
  posts: PostType[];
}

const FreeBoard = ({ posts }: FreeBoardProps) => {
  return (
    <FreeBoardLayout>
      {posts.map(post => (
        <Post
          key={post.id}
          id={post.id}
          kind={post.kind}
          title={post.title}
          content={post.content}
          viewCnt={post.viewCnt}
          replyCnt={post.replyCnt}
          recommendCnt={post.recommendCnt}
          createdAt={post.createdAt}
          hashtags={post.hashtags}
        />
      ))}
    </FreeBoardLayout>
  );
};

export default FreeBoard;
