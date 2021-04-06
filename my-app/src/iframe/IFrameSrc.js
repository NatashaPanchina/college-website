import React from "react";

export default function IFrameSrc(props) {
    return (
        <div>
            <iframe width="850" height="480" 
            src={props.linkToVideo} title="YouTube video player" frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen></iframe>
        </div>
    )
}


