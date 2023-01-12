import * as React from 'react';
import Svg, {Defs, ClipPath, Path, G} from 'react-native-svg';

function MicOn(props) {
  return (
    <Svg fill="#FFF" viewBox="0 0 15.238 16" {...props}>
      <Defs>
        <ClipPath id="a">
          <Path
            className="a"
            transform="translate(.235 .255)"
            d="M0 0H15.238V16H0z"
          />
        </ClipPath>
      </Defs>
      <G clipPath="url(#a)">
        <Path
          className="a"
          d="M6.765 8.909a2.225 2.225 0 002.229-2.224l.007-4.45a2.236 2.236 0 00-4.472 0v4.448a2.232 2.232 0 002.236 2.226zm3.95-2.224a3.856 3.856 0 01-3.95 3.781 3.856 3.856 0 01-3.95-3.781H1.548a5.182 5.182 0 004.472 4.982v2.431h1.491v-2.431a5.182 5.182 0 004.472-4.982z"
          transform="translate(-.235 -.255) translate(1.174 .899)"
        />
        <Path
          d="M0 .567h13.531v13.531H0z"
          transform="translate(-.235 -.255) translate(1.174 .899)"
          fill="none"
        />
      </G>
    </Svg>
  );
}

export default MicOn;
