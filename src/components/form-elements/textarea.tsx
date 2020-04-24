import React from "react"
import { SerializedStyles, css } from "@emotion/core"
// eslint-disable-next-line import/no-extraneous-dependencies
import tw from "twin.macro"

import {
  usePlaceholderFormDefaults,
  useBasicFormStyling,
} from "../../styles/use-form-styles"

type TextareaProps = {
  readonly css?: SerializedStyles
  readonly placeholder?: string
}

export const Textarea: React.FC<TextareaProps> = ({
  placeholder = "Enter some long form content.",
  ...props
}) => {
  return (
    <textarea
      css={css`
        ${useBasicFormStyling()}
        ${usePlaceholderFormDefaults()}
        &::placeholder {
          ${tw`text-sm`}
        }
      `}
      placeholder={placeholder}
      {...props}
    />
  )
}
