import React from "react"
import { WrapPageElementBrowserArgs } from "gatsby"
import { ThemeProvider } from "emotion-theming"
import theme from "../../style-guidelines/tailwind-design"

// This is useful to set up any Provider components that will wrap your application.
// For setting persistent UI elements around pages use wrapPageElement.

// TODO: Redux and mdx setup

export const wrapRootElement: React.FC<WrapPageElementBrowserArgs> = ({
  element,
}) => (
  <>
    <ThemeProvider theme={theme}>{element}</ThemeProvider>
  </>
)
