import React, { ReactNode } from "react"
import { Link } from "gatsby"
// eslint-disable-next-line import/no-extraneous-dependencies
import tw from "twin.macro"
import { css, SerializedStyles } from "@emotion/core"

type NavLink = {
  readonly children: ReactNode
  readonly to: string
  readonly css?: SerializedStyles
}

export const NavLink: React.FC<NavLink> = ({ children, ...props }) => {
  return (
    <Link
      css={css`
        ${tw`py-1 font-medium text-white`}
      `}
      {...props}
    >
      {children}
    </Link>
  )
}
