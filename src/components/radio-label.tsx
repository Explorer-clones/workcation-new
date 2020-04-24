import React, { ReactNode } from "react"
// eslint-disable-next-line import/no-extraneous-dependencies
import tw from "twin.macro"
import { css, SerializedStyles } from "@emotion/core"

type RadioLabelProps = {
  readonly children: ReactNode
  readonly css?: SerializedStyles
}

export const RadioLabel: React.FC<RadioLabelProps> = ({
  children,
  ...props
}) => {
  return (
    <span
      css={css`
        ${tw`ml-2 text-white`}
      `}
      {...props}
    >
      {children}
    </span>
  )
}
