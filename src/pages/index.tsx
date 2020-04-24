import React from "react"
import { Link } from "gatsby"
import { useTheme } from "emotion-theming"
import { css } from "@emotion/core"
// eslint-disable-next-line import/no-extraneous-dependencies
import tw from "twin.macro"
import Image from "../components/image"
import SEO from "../components/seo"
import HelloWorld from "../components/hello-world"
import NumberList from "../components/ramda-example"
import { ThemeProps } from "../../style-guidelines/types"
import { ReactComponent as LeftArrow } from "../images/icon-arrow-left.svg"

type IndexPageProps = {}

const IndexPage: React.FC<IndexPageProps> = () => {
  const theme = useTheme<ThemeProps>()

  return (
    <>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <HelloWorld />
      <NumberList />
      <p
        css={css`
          color: ${theme.colors.indigo[700]};
        `}
      >
        Hello world from theme
      </p>
      <LeftArrow
        css={css`
          ${tw`w-6 h-6`}
        `}
      />
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </>
  )
}

export default IndexPage
