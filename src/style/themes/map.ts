import { css } from "@emotion/react";

import { font } from "./font";
import { color } from "./color";

export const infoWindow = css`
  .hubInfoWindow {
    ${font.regular_12}
    display: flex;
    align-items: center;
    height: 28px;
    padding: 0 12px 0 32px;
    background-repeat: no-repeat;
    background-position: 4px center;
  }

  .gm-style-iw.gm-style-iw-c:has(.hubInfoWindow) {
    border: 1px solid ${color.gray_40};
    border-radius: 100px;
    padding: 0 !important;

    div {
      overflow: auto !important;
    }

    // InfoWindow x 버튼 css
    .gm-ui-hover-effect {
      display: none !important;
    }
  }

  // InfoWindow 꼬리표 css
  .gm-style-iw-t:has(.hubInfoWindow) {
    .gm-style-iw-tc {
      display: none !important;
    }
  }
`;

export type InfoWindow = typeof infoWindow;
