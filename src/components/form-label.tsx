import React, { ReactNode } from "react"
import { css, SerializedStyles } from "@emotion/core"
// eslint-disable-next-line import/no-extraneous-dependencies
import tw from "twin.macro"

type FormLabelProps = {
  readonly children: ReactNode
  readonly css?: SerializedStyles
}

export const FormLabel: React.FC<FormLabelProps> = ({ children, ...props }) => {
  return (
    <span
      css={css`
        ${tw`block text-sm font-semibold text-gray-500`}
      `}
      {...props}
    >
      {children}
    </span>
  )
}
