import React from "react"
import { WrapPageElementBrowserArgs } from "gatsby"

import Layout from "../components/layout"

// Wrap the page element. This is useful when you want to set wrapper components around pages that won't get unmounted
// For more information visit: https://www.gatsbyjs.org/docs/browser-apis/#wrapPageElement
export const wrapPageElement: React.FC<WrapPageElementBrowserArgs> = ({
  element,
  props,
}) => {
  return <Layout {...props}>{element}</Layout>
}
