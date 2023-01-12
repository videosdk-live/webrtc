import * as React from "react";
import Svg, { Path } from "react-native-svg";

function VideoOn(props) {
  return (
    <Svg viewBox="0 0 16 9.6" {...props}>
      <Path
        d="M15.6.88a.727.727 0 00-.8 0L12 2.32A2.446 2.446 0 009.6 0H2.4A2.357 2.357 0 000 2.4v4.8a2.357 2.357 0 002.4 2.4h7.2A2.446 2.446 0 0012 7.28l2.88 1.44a.843.843 0 001.04-.32A.721.721 0 0016 8V1.6a.955.955 0 00-.4-.72z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default VideoOn;
