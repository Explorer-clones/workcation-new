import React from "react"
import { css, SerializedStyles } from "@emotion/core"
import {
  usePlaceholderFormDefaults,
  useBasicFormStyling,
} from "../../styles/use-form-styles"

type InputProps = {
  readonly css?: SerializedStyles
  readonly placeholder?: string
}

export const Input: React.FC<InputProps> = ({
  placeholder = "Your name",
  ...props
}) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      css={css`
        ${useBasicFormStyling()}
        ${usePlaceholderFormDefaults()}
      `}
      {...props}
    />
  )
}
