import React from "react"
import { css, SerializedStyles } from "@emotion/core"
import svgToMiniDataURI from "mini-svg-data-uri"
// eslint-disable-next-line import/no-extraneous-dependencies
import tw from "twin.macro"
import { useMsCheckMediaNotPrint } from "../../styles/use-form-styles"

type CheckboxProps = {
  readonly name: string
  readonly id: string
  readonly css?: SerializedStyles
}

type SvgToDataURI = (value: string) => string

const applyColorsToCheckSVGIcon = (
  color: string,
  convertToDataURI: SvgToDataURI
): string =>
  `"${convertToDataURI(
    `<svg viewBox='0 0 16 16' fill='${color}' xmlns='http://www.w3.org/2000/svg'><path d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/></svg>`
  )}"`

export const Checkbox: React.FC<CheckboxProps> = props => {
  return (
    <input
      type="checkbox"
      css={css`
        ${tw`inline-block text-blue-500 align-middle bg-white border border-gray-300 rounded appearance-none focus:outline-none focus:shadow-outline `}
        color-adjust: exact;
        background-origin: border-box;
        user-select: none;
        flex-shrink: 0;
        height: 1em;
        width: 1em;

        &:checked {
          border-color: transparent;
          background-color: currentColor;
          background-size: 100% 100%;
          background-position: center;
          background-repeat: no-repeat;
          background-image: ${`url(${applyColorsToCheckSVGIcon(
            "#FFF",
            svgToMiniDataURI
          )})`};
        }
        ${useMsCheckMediaNotPrint()}
      `}
      {...props}
    />
  )
}
