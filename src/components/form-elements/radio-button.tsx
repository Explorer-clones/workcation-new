import React from "react"
import { css, SerializedStyles } from "@emotion/core"
// eslint-disable-next-line import/no-extraneous-dependencies
import tw from "twin.macro"
import svgToMiniDataURI from "mini-svg-data-uri"
import { useTheme } from "emotion-theming"
import { ThemeProps } from "../../../style-guidelines/types"

type RadioButtonProps = {
  readonly name: string
  readonly id: string
  readonly css?: SerializedStyles
}

type SvgToDataURI = (value: string) => string

const applyColorsToRadioSVGIcon = (
  color: string,
  convertToDataURI: SvgToDataURI
): string =>
  `"${convertToDataURI(
    `<svg viewBox='0 0 16 16' fill='${color}' xmlns='http://www.w3.org/2000/svg'><circle cx='8' cy='8' r='3'/></svg>`
  )}"`

export const RadioButton: React.FC<RadioButtonProps> = props => {
  const theme = useTheme<ThemeProps>()

  return (
    <input
      type="radio"
      css={css`
        ${tw`inline-block text-blue-500 align-middle bg-white border border-gray-300 rounded-full appearance-none focus:outline-none focus:shadow-outline `}
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
          background-image: ${`url(${applyColorsToRadioSVGIcon(
            theme.colors.white,
            svgToMiniDataURI
          )})`};
        }
      `}
      {...props}
    />
  )
}
