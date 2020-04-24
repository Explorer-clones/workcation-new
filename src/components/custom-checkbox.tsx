import React from "react"
import { SerializedStyles, css } from "@emotion/core"
// eslint-disable-next-line import/no-extraneous-dependencies
import tw from "twin.macro"
import { useTheme } from "emotion-theming"
import { Checkbox } from "./form-elements/checkbox"
import { ThemeProps } from "../../style-guidelines/types"

type CustomCheckboxProps = {
  readonly name: string
  readonly id: string
  readonly css?: SerializedStyles
}

export const CustomCheckbox: React.FC<CustomCheckboxProps> = props => {
  const theme = useTheme<ThemeProps>()
  return (
    <Checkbox
      {...props}
      css={css`
        ${tw`w-6 h-6 text-indigo-500 bg-gray-900 border-none rounded-lg focus:bg-gray-700`}
        &:focus {
          box-shadow: 0 0 0 3px ${`${theme.colors.gray["400"]}50`};
        }
      `}
    />
  )
}
