import React, { ReactNode, useState } from "react"
import { css } from "@emotion/core"
// eslint-disable-next-line import/no-extraneous-dependencies
import tw from "twin.macro"

import { ReactComponent as Logo } from "../images/logo.svg"
import { ReactComponent as HamburgerIcon } from "../images/icon-menu.svg"
import { ReactComponent as SearchIcon } from "../images/icon-search.svg"
import { ReactComponent as FilterIcon } from "../images/filter-icon.svg"

import { ReactComponent as CloseIcon } from "../images/close-icon.svg"

import { FormFilters } from "../components/form-filters"
import NavMenu from "../components/nav-menu"
import Locations from "../components/locations"

type WorkcationProps = {
  readonly children: ReactNode
}

const Workcation: React.FC<WorkcationProps> = () => {
  const [isFormOpen, useIsFormOpen] = useState<boolean>(false)
  const [isNavOpen, useIsNavOpen] = useState<boolean>(false)

  return (
    <div
      css={css`
        ${tw`min-h-screen bg-gray-200`}
      `}
    >
      <header
        css={css`
          ${tw`px-4 py-2 bg-gray-900 sm:flex sm:items-center sm:justify-between`}
        `}
      >
        <div
          css={css`
            ${tw`flex items-center justify-between sm:block`}
          `}
        >
          <Logo />

          <button
            css={css`
              ${tw`inline-flex items-center justify-center w-10 h-10 text-gray-500 focus:outline-none hover:text-white focus:text-white sm:hidden`}
            `}
            type="button"
            onClick={(): void => useIsNavOpen(!isNavOpen)}
          >
            {isNavOpen ? (
              <CloseIcon
                css={css`
                  ${tw`w-6 h-6 fill-current`}
                `}
              />
            ) : (
              <HamburgerIcon
                css={css`
                  ${tw`w-6 h-6 fill-current`}
                `}
              />
            )}
          </button>
        </div>

        <NavMenu
          css={css`
            ${isNavOpen ? tw`block` : tw`hidden`}
            ${tw`sm:block`}
          `}
        />
      </header>
      <section
        css={css`
          ${tw`px-4 pt-2 bg-gray-800`}
        `}
      >
        <div
          css={css`
            ${tw`flex items-center justify-between mb-2`}
          `}
        >
          <div
            css={css`
              ${tw`relative flex items-center w-full max-w-xs`}
            `}
          >
            <SearchIcon
              css={css`
                ${tw`absolute w-6 h-6 ml-2 text-gray-600 fill-current`}
              `}
            />
            <input
              type="text"
              placeholder="Search by keywords"
              css={css`
                ${tw`block w-full py-2 pl-10 pr-4 mr-4 text-sm text-white bg-gray-900 rounded-lg focus:outline-none focus:bg-gray-100 focus:text-gray-900`}
                &:focus {
                  &::placeholder {
                    ${tw`text-gray-800`}
                  }
                }
                &::placeholder {
                  ${tw`text-gray-400`}
                }
              `}
            />
          </div>
          <button
            css={css`
              ${tw`inline-flex items-center px-3 py-2 text-sm leading-normal bg-gray-700 rounded-lg focus:outline-none focus:shadow-outline focus:bg-gray-600 `}
            `}
            type="button"
            onClick={(): void => useIsFormOpen(!isFormOpen)}
          >
            <FilterIcon
              css={css`
                ${tw`w-5 h-5 mr-2 text-gray-500 fill-current`}
              `}
            />
            <span
              css={css`
                ${tw`text-white`}
              `}
            >
              Filters
            </span>
          </button>
        </div>

        <hr
          css={css`
            ${tw`m-0 mb-4 -mx-4 bg-gray-900`}
          `}
        />

        {isFormOpen ? <FormFilters /> : null}
      </section>
      <main
        css={css`
          ${tw`px-4 pb-4`}
        `}
      >
        <Locations />
      </main>
    </div>
  )
}

export default Workcation
