import React from "react"
// eslint-disable-next-line import/no-extraneous-dependencies
import tw from "twin.macro"
import { css } from "@emotion/core"

type HelloWorld = {}

const HelloWorld: React.FC<HelloWorld> = () => {
  return (
    <div
      css={css`
        ${tw`text-red-500 bg-red-200 elevation-13`}
      `}
    >
      Hello world
    </div>
  )
}

export default HelloWorld
