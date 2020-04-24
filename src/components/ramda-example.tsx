import React, { ReactNode } from "react"
import { map } from "ramda"
import uuid from "uuid/v4"

type NumberListProps = {}

const NumberList: React.FC<NumberListProps> = () => {
  const arr = [1, 2, 3, 4, 5]

  const doubleLi = (element: number): ReactNode => (
    <li key={uuid()}>{element * 2}</li>
  )

  const returnList = map(doubleLi)

  return <ul> {returnList(arr)}</ul>
}

export default NumberList
