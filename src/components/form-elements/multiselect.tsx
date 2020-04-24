import React, { ReactNode } from "react"
import { SerializedStyles, css } from "@emotion/core"
import { useBasicFormStyling } from "../../styles/use-form-styles"

type MultiselectProps = {
  readonly css?: SerializedStyles
  readonly name: string
  readonly id: string
  readonly children: ReactNode
}

export const Multiselect: React.FC<MultiselectProps> = ({
  id,
  name,
  children,
  ...props
}) => {
  return (
    <select
      name={name}
      id={id}
      css={css`
        ${useBasicFormStyling()}
      `}
      multiple
      {...props}
    >
      {children}
    </select>
  )
}
