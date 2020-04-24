import React, { ReactNode } from "react"
import { SerializedStyles, css } from "@emotion/core"
import svgToMiniDataURI from "mini-svg-data-uri"
import { useTheme } from "emotion-theming"
// eslint-disable-next-line import/no-extraneous-dependencies
import tw from "twin.macro"

import { useBasicFormStyling } from "../../styles/use-form-styles"
import { ThemeProps } from "../../../style-guidelines/types"

type SelectProps = {
  readonly css?: SerializedStyles
  readonly name: string
  readonly id: string
  readonly iconColor?: string
  readonly children: ReactNode
}

type SvgToDataURI = (value: string) => string

const applyColorsToCheveronSVGIcon = (
  color: string,
  convertToDataURI: SvgToDataURI
): string =>
  `"${convertToDataURI(
    `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='${color}'>
        <path
          className='heroicon-ui'
          d='M15.3 9.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z'
        />
      </svg>`
  )}"`

export const Select: React.FC<SelectProps> = ({
  id,
  name,
  children,
  iconColor,
  ...props
}) => {
  const theme = useTheme<ThemeProps>()

  return (
    <select
      name={name}
      id={id}
      {...props}
      css={css`
        ${useBasicFormStyling()}
        ${tw`pr-10`};
        background-position: ${`right ${theme.spacing[2]} center`};
        background-size: 1.5em 1.5em;
        background-repeat: no-repeat;
        background-image: ${iconColor
          ? `url(${applyColorsToCheveronSVGIcon(iconColor, svgToMiniDataURI)})`
          : `url(${applyColorsToCheveronSVGIcon(
              theme.colors.gray[500],
              svgToMiniDataURI
            )})`};
      `}
    >
      {children}
    </select>
  )
}

//  background-image: url(${applyColorsToCheveronSVGIcon(
//    theme.colors.gray[500],
//    svgToMiniDataURI
//  )});
