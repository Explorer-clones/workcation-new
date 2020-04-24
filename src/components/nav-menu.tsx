import React from "react"
// eslint-disable-next-line import/no-extraneous-dependencies
import tw from "twin.macro"
import { css, SerializedStyles } from "@emotion/core"
import { NavLink } from "./nav-link"

type NavMenuProps = {
  readonly css?: SerializedStyles
}

const NavMenu: React.FC<NavMenuProps> = props => {
  return (
    <div {...props}>
      <div
        css={css`
          ${tw`sm:flex`}
        `}
      >
        <div
          css={css`
            ${tw`flex flex-col pb-5 mt-3 sm:flex-row sm:mt-0 sm:py-0 sm:text-sm `}
          `}
        >
          <NavLink
            to="#"
            css={css`
              ${tw`flex items-center sm:px-3`}
            `}
          >
            List your property
          </NavLink>
          <NavLink
            to="#"
            css={css`
              ${tw`flex items-center sm:px-3`}
            `}
          >
            Trips
          </NavLink>
          <NavLink
            to="#"
            css={css`
              ${tw`flex items-center sm:px-3`}
            `}
          >
            Messages
          </NavLink>
        </div>
        <hr
          css={css`
            ${tw`m-0 -mx-4 bg-gray-800 sm:hidden`}
          `}
        />

        <div>
          <div
            css={css`
              ${tw`flex items-center mt-4 sm:mt-0 sm:ml-4`}
            `}
          >
            <img
              css={css`
                ${tw`block object-cover w-10 h-10 m-0 border-2 border-gray-600 border-solid rounded-full sm:w-8 sm:h-8`}
              `}
              src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80"
              alt="avatar"
            />
            <span
              css={css`
                ${tw`ml-4 font-medium text-white text-gray-200 sm:hidden`}
              `}
            >
              Isla Schoger
            </span>
          </div>
          <div
            css={css`
              ${tw`flex flex-col sm:hidden`}
            `}
          >
            <NavLink
              css={css`
                ${tw`py-2 mt-4 text-sm font-normal text-gray-400 hover:text-white`}
              `}
              to="#"
            >
              Account Settings
            </NavLink>
            <NavLink
              css={css`
                ${tw`py-2 text-sm font-normal text-gray-400 hover:text-white`}
              `}
              to="#"
            >
              Support
            </NavLink>
            <NavLink
              css={css`
                ${tw`py-2 text-sm font-normal text-gray-400 hover:text-white`}
              `}
              to="#"
            >
              Sign Out
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavMenu
