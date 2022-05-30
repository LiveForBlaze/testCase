import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-apollo';
import renderComponent from '../utils/renderComponent';

import Header from './components/Header';
import List from './components/List';
import Comments from './components/Comments';
import About from './components/About';
import LatestLaunches from './components/LatestLaunches';

import { getPostsQuery } from './querries/getPosts';

function PostsShow({ postId }) {
  const { data, loading, error } = useQuery(getPostsQuery);
  const [post, setPost] = useState(null);
  const [trend, setTrend] = useState([]);
  
  useEffect(() => {
    if(data && !loading) {
      setPost(data.postsAll.filter((item) => item.id == postId)[0]);
      setTrend([data.postsAll[0], data.postsAll[1], data.postsAll[2]]);
    }
  },[data,loading]);

  if(loading) {
    return <div className="box">Loading...</div>
  }

  if(error) {
    return <div className="box">There is an error on the page: <br/> {error.message}</div>
  }

  const headerProps = {
    description: post?.description,
    tagline: post?.tagline,
    title: post?.title,
    image: post?.image,
    url: post?.url,
  }

  const aboutProps = {
    votesCount: post?.votesCount ?? 0, 
    commentsCount: post?.commentsCount ?? 0, 
    viewsCount: 1337,  // Mocked data
    dailyFeedPosition: post?.dailyFeedPosition ?? 0, 
    weeklyFeedPosition: post?.weeklyFeedPosition ?? 0,
  }

  return (
    <div className="box">
      <Header { ...headerProps } />
      <List user={post?.user} makers={post?.makers ?? []} commenters={post?.commenters ?? []} />
      <Comments comments={post?.comments ?? []} user={post?.user} />
      <About {...aboutProps} />
      <LatestLaunches trend={trend} />
    </div>
  );
}

renderComponent(PostsShow);
