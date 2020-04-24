import React, { ReactNode } from "react"
import { css, SerializedStyles } from "@emotion/core"
// eslint-disable-next-line import/no-extraneous-dependencies
import tw from "twin.macro"

type LegendProps = {
  readonly children: ReactNode
  readonly css?: SerializedStyles
}

export const Legend: React.FC<LegendProps> = ({ children, ...props }) => {
  return (
    <legend
      css={css`
        ${tw`block text-sm font-semibold text-gray-500`}
      `}
      {...props}
    >
      {children}
    </legend>
  )
}
