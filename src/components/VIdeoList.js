import React from 'react';
import VideoItem from './VideoItem';
const VideoList=({videos,onVideoSelect})=>
{  const RenderedList=videos.map((videos)=>{
    return <VideoItem key={videos.id.videoId}video={videos} onVideoSelect={onVideoSelect}/>
})
    return <div className="ui relaxed divided list">{RenderedList}</div>
};
export default VideoList;