import React from "react"
import { SerializedStyles, css } from "@emotion/core"
// eslint-disable-next-line import/no-extraneous-dependencies
import tw from "twin.macro"
import { useTheme } from "emotion-theming"

import { RadioButton } from "./form-elements/radio-button"
import { ThemeProps } from "../../style-guidelines/types"

type CustomRadioButtonProps = {
  readonly name: string
  readonly id: string
  readonly css?: SerializedStyles
}

export const CustomRadioButton: React.FC<CustomRadioButtonProps> = props => {
  const theme = useTheme<ThemeProps>()
  return (
    <RadioButton
      {...props}
      css={css`
        ${tw`w-6 h-6 text-indigo-500 bg-gray-900 border-none focus:bg-gray-700`}
        &:focus {
          box-shadow: 0 0 0 3px ${`${theme.colors.gray["400"]}50`};
        }
      `}
    />
  )
}
