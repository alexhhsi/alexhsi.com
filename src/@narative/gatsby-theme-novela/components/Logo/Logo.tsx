import React from "react";
import styled from "@emotion/styled";

import mediaqueries from "@styles/media";

import { Icon } from "@types";

const Logo: Icon = ({ fill = "white" }) => {
  return (
    <LogoContainer>
      <svg
        height="80"
        viewBox="0 0 600 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="Logo__Desktop"
      >
        <g
          transform="translate(0.000000,400.000000) scale(0.100000,-0.100000)"
          fill={fill}
          stroke="none"
        >
          <path
            d="M641 3488 c-19 -51 -465 -1249 -492 -1320 l-28 -78 162 0 163 0 46
    143 45 142 254 3 254 2 48 -145 48 -145 160 0 c87 0 159 3 159 8 0 4 -118 323
    -262 710 l-263 702 -143 0 c-139 0 -143 -1 -151 -22z m319 -860 c0 -4 -76 -8
    -169 -8 l-169 0 79 238 c43 130 82 244 85 252 5 12 174 -456 174 -482z"
          />
          <path
            d="M1590 2800 l0 -710 465 0 465 0 0 115 0 115 -310 0 -310 0 0 595 0
    595 -155 0 -155 0 0 -710z"
          />
          <path
            d="M2670 2800 l0 -710 485 0 485 0 0 115 0 115 -330 0 -330 0 0 185 0
    185 280 0 280 0 0 120 0 120 -280 0 -280 0 0 170 0 170 325 0 325 0 0 120 0
    120 -480 0 -480 0 0 -710z"
          />
          <path
            d="M3700 3505 c0 -3 91 -160 202 -348 111 -188 201 -346 201 -352 0 -5
    -93 -166 -207 -357 -113 -191 -206 -350 -206 -353 0 -3 79 -4 176 -3 l177 3
    121 220 c67 121 126 228 132 238 9 16 31 -17 142 -220 l131 -238 175 -3 c97
    -1 176 1 176 4 0 4 -93 165 -207 358 -115 192 -207 352 -206 356 1 3 90 156
    199 340 108 184 199 341 201 348 4 9 -34 12 -169 12 l-174 0 -128 -235 c-70
    -129 -129 -235 -131 -235 -2 0 -60 106 -130 235 l-127 235 -174 0 c-96 0 -174
    -2 -174 -5z"
          />
          <path
            d="M3700 1754 c-155 -40 -277 -136 -320 -252 -18 -47 -21 -73 -18 -147
    3 -79 8 -98 38 -153 62 -117 179 -193 435 -282 150 -53 205 -81 238 -120 66
    -78 38 -188 -57 -231 -53 -24 -193 -26 -258 -4 -77 27 -138 109 -138 186 l0
    29 -155 0 c-176 0 -164 8 -145 -90 26 -135 111 -244 241 -309 117 -59 202 -74
    373 -68 143 5 199 17 286 62 52 27 130 105 158 160 25 46 27 60 27 165 0 106
    -2 119 -28 173 -61 123 -180 204 -422 287 -162 56 -214 82 -258 128 -36 38
    -46 96 -23 144 32 67 99 98 210 98 110 -1 176 -39 211 -122 8 -21 15 -47 15
    -58 0 -19 6 -20 151 -20 l152 0 -6 60 c-15 172 -157 320 -349 365 -81 19 -284
    19 -358 -1z"
          />
          <path
            d="M1960 1040 l0 -710 155 0 155 0 0 300 0 300 280 0 280 0 0 -300 0
    -300 150 0 150 0 0 710 0 710 -150 0 -150 0 0 -290 0 -290 -280 0 -280 0 0
    290 0 290 -155 0 -155 0 0 -710z"
          />
          <path d="M4620 1035 l0 -715 150 0 150 0 0 715 0 715 -150 0 -150 0 0 -715z" />
        </g>
      </svg>

      <svg
        height="60"
        viewBox="0 0 600 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="Logo__Mobile"
      >
        <g
          transform="translate(0.000000,400.000000) scale(0.100000,-0.100000)"
          fill={fill}
          stroke="none"
        >
          <path
            d="M641 3488 c-19 -51 -465 -1249 -492 -1320 l-28 -78 162 0 163 0 46
  143 45 142 254 3 254 2 48 -145 48 -145 160 0 c87 0 159 3 159 8 0 4 -118 323
  -262 710 l-263 702 -143 0 c-139 0 -143 -1 -151 -22z m319 -860 c0 -4 -76 -8
  -169 -8 l-169 0 79 238 c43 130 82 244 85 252 5 12 174 -456 174 -482z"
          />
          <path
            d="M1590 2800 l0 -710 465 0 465 0 0 115 0 115 -310 0 -310 0 0 595 0
  595 -155 0 -155 0 0 -710z"
          />
          <path
            d="M2670 2800 l0 -710 485 0 485 0 0 115 0 115 -330 0 -330 0 0 185 0
  185 280 0 280 0 0 120 0 120 -280 0 -280 0 0 170 0 170 325 0 325 0 0 120 0
  120 -480 0 -480 0 0 -710z"
          />
          <path
            d="M3700 3505 c0 -3 91 -160 202 -348 111 -188 201 -346 201 -352 0 -5
  -93 -166 -207 -357 -113 -191 -206 -350 -206 -353 0 -3 79 -4 176 -3 l177 3
  121 220 c67 121 126 228 132 238 9 16 31 -17 142 -220 l131 -238 175 -3 c97
  -1 176 1 176 4 0 4 -93 165 -207 358 -115 192 -207 352 -206 356 1 3 90 156
  199 340 108 184 199 341 201 348 4 9 -34 12 -169 12 l-174 0 -128 -235 c-70
  -129 -129 -235 -131 -235 -2 0 -60 106 -130 235 l-127 235 -174 0 c-96 0 -174
  -2 -174 -5z"
          />
          <path
            d="M3700 1754 c-155 -40 -277 -136 -320 -252 -18 -47 -21 -73 -18 -147
  3 -79 8 -98 38 -153 62 -117 179 -193 435 -282 150 -53 205 -81 238 -120 66
  -78 38 -188 -57 -231 -53 -24 -193 -26 -258 -4 -77 27 -138 109 -138 186 l0
  29 -155 0 c-176 0 -164 8 -145 -90 26 -135 111 -244 241 -309 117 -59 202 -74
  373 -68 143 5 199 17 286 62 52 27 130 105 158 160 25 46 27 60 27 165 0 106
  -2 119 -28 173 -61 123 -180 204 -422 287 -162 56 -214 82 -258 128 -36 38
  -46 96 -23 144 32 67 99 98 210 98 110 -1 176 -39 211 -122 8 -21 15 -47 15
  -58 0 -19 6 -20 151 -20 l152 0 -6 60 c-15 172 -157 320 -349 365 -81 19 -284
  19 -358 -1z"
          />
          <path
            d="M1960 1040 l0 -710 155 0 155 0 0 300 0 300 280 0 280 0 0 -300 0
  -300 150 0 150 0 0 710 0 710 -150 0 -150 0 0 -290 0 -290 -280 0 -280 0 0
  290 0 290 -155 0 -155 0 0 -710z"
          />
          <path d="M4620 1035 l0 -715 150 0 150 0 0 715 0 715 -150 0 -150 0 0 -715z" />
        </g>
      </svg>
    </LogoContainer>
  );
};

export default Logo;

const LogoContainer = styled.div`
  .Logo__Mobile {
    display: none;
  }
  ${mediaqueries.tablet`
    .Logo__Desktop {
      display: none;
    }

    .Logo__Mobile{
      display: block;
    }
  `}
`;
