import { css, SerializedStyles } from "@emotion/core"
// eslint-disable-next-line import/no-extraneous-dependencies
import tw from "twin.macro"

export const useBasicFormStyling = (): SerializedStyles => {
  return css`
    ${tw`px-3 py-2 text-base leading-normal bg-white border border-gray-300 rounded appearance-none focus:outline-none focus:shadow-outline`}
  `
}

export const usePlaceholderFormDefaults = (): SerializedStyles => {
  return css`
    &::placeholder {
      ${tw`text-base text-gray-500 opacity-100`}
    }
  `
}

export const useMsCheckMediaNotPrint = (): SerializedStyles => {
  return css`
    &::-ms-check {
      @media not print {
        color: transparent;
        background: inherit;
        border-color: inherit;
        border-radius: inherit;
      }
    }
  `
}
