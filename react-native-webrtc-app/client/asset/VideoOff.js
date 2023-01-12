import * as React from "react";
import Svg, { Defs, ClipPath, Path, G } from "react-native-svg";

function VideoOff(props) {
  return (
    <Svg viewBox="0 0 31 30" {...props}>
      <Defs>
        <ClipPath id="a">
          <Path d="M0 0H31V30H0z" />
        </ClipPath>
      </Defs>
      <G clipPath="url(#a)">
        <Path
          d="M21.5 16.9a1.05 1.05 0 00.5-.9V8a1.193 1.193 0 00-.5-.9.908.908 0 00-1 0L17 8.9A3.058 3.058 0 0014 6h-3.7l11 11c0-.1.1-.1.2-.1zm.2 3.4l-4.8-4.8L7.4 6 3.7 2.3a.967.967 0 00-1.4 0 .967.967 0 000 1.4L4.6 6A3.019 3.019 0 002 9v6a2.946 2.946 0 003 3h9a2.64 2.64 0 001.9-.7l4.4 4.4a.99.99 0 101.4-1.4z"
          transform="translate(-47 -52) translate(50 55)"
          fill={props.fill}
          data-name="Group 2115"
        />
      </G>
    </Svg>
  );
}

export default VideoOff;
