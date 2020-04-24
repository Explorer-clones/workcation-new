import React from "react"
import { Global, css } from "@emotion/core"
// eslint-disable-next-line import/no-extraneous-dependencies
import tw from "twin.macro"
import tailwindReset from "../styles/tailwind-reset"

type GlobalStylesProps = {}

const GlobalStyles: React.FC<GlobalStylesProps> = () => (
  <Global
    styles={css`
      ${tailwindReset()}

      html {
        box-sizing: border-box;
        scroll-behavior: smooth;
      }

      body {
        ${tw`font-sans leading-normal`}
      }
    `}
  />
)

export default GlobalStyles
