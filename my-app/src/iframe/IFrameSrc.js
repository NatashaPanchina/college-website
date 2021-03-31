import React from "react";

export default function IFrameSrc(props) {
    return (
        <div>
            <iframe src={props.linkToVideo}
            width="850" height="480" allowFullScreen></iframe>
        </div>
    )
}


