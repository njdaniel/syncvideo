/**
 * Created by nicholas on 4/17/17.
 */
import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
  const videoItems = props.videos.map((video) => {
    return (
        <VideoListItem
        onVideoClick={props.onVideoSelect}
        key={video.etag}
        video={video} />
    );
  });

  return (
    <div className="list-group">
        <ul className="col-md-4 list-group">
            {videoItems}
        </ul>
    </div>
  );
};

export default VideoList;