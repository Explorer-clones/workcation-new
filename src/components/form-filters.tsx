import React from "react"
// eslint-disable-next-line import/no-extraneous-dependencies
import tw from "twin.macro"
import { css } from "@emotion/core"
import { FormLabel } from "./form-label"
import { Select } from "./form-elements/select"
import { Legend } from "./legend"
import { CustomRadioButton } from "./custom-radio-button"
import { RadioLabel } from "./radio-label"
import { CustomCheckbox } from "./custom-checkbox"

type FormFiltersProps = {}

export const FormFilters: React.FC<FormFiltersProps> = () => {
  return (
    <form
      css={css`
        ${tw`block`}
      `}
    >
      <fieldset
        css={css`
          ${tw`border-none`}
        `}
      >
        <div
          css={css`
            ${tw`sm:flex`}
          `}
        >
          <div
            css={css`
              ${tw`sm:w-1/2`}
            `}
          >
            <label
              css={css`
                ${tw`inline-block w-1/2 pr-2`}
              `}
            >
              <FormLabel>Bedrooms</FormLabel>
              <Select
                name="bedrooms"
                id="bedrooms"
                iconColor="#FFFFFF"
                css={css`
                  ${tw`w-full mt-2 text-white bg-gray-700 border-none rounded-lg shadow`}
                `}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </Select>
            </label>
            <label
              css={css`
                ${tw`inline-block w-1/2 pl-2`}
              `}
            >
              <FormLabel>Bathrooms</FormLabel>
              <Select
                name="bathrooms"
                id="bathrooms"
                iconColor="#FFFFFF"
                css={css`
                  ${tw`w-full mt-2 text-white bg-gray-700 border-none rounded-lg shadow`}
                `}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </Select>
            </label>
          </div>
          <label
            css={css`
              ${tw`sm:w-1/2 sm:pl-4`}
            `}
          >
            <FormLabel
              css={css`
                ${tw`mt-4 sm:mt-0`}
              `}
            >
              Price Range
            </FormLabel>
            <Select
              name="price-range"
              id="price-range"
              iconColor="#FFFFFF"
              css={css`
                ${tw`w-full mt-2 text-white bg-gray-700 border-none rounded-lg shadow`}
              `}
            >
              <option value="$0-1000/wk">0-$1000/wk</option>
              <option value="$1000-2000/wk">$1000-2000/wk</option>
              <option value="$2000-3000/wk">$2000-3000/wk</option>
              <option value="$3000-4000/wk">$3000-4000/wk</option>
            </Select>
          </label>
        </div>
      </fieldset>

      <hr
        css={css`
          ${tw`m-0 mb-4 -mx-4 bg-gray-900`}
        `}
      />

      <fieldset
        css={css`
          ${tw`border-none`}
        `}
      >
        <Legend>Property Type</Legend>
        <div
          css={css`
            ${tw`sm:flex`}
          `}
        >
          <label
            css={css`
              ${tw`block pr-2 mt-2 sm:w-1/4`}
            `}
          >
            <CustomRadioButton name="property-type" id="house" />
            <RadioLabel>House</RadioLabel>
          </label>
          <label
            css={css`
              ${tw`block pr-2 mt-2 sm:w-1/4`}
            `}
          >
            <CustomRadioButton name="property-type" id="apartment" />
            <RadioLabel>Apartment</RadioLabel>
          </label>
          <label
            css={css`
              ${tw`block mt-2 sm:pl-4 sm:w-1/4`}
            `}
          >
            <CustomRadioButton name="property-type" id="loft" />
            <RadioLabel>Loft</RadioLabel>
          </label>
          <label
            css={css`
              ${tw`block mt-2 sm:w-1/4`}
            `}
          >
            <CustomRadioButton name="property-type" id="townhouse" />
            <RadioLabel>Townhouse</RadioLabel>
          </label>
        </div>
      </fieldset>

      <hr
        css={css`
          ${tw`m-0 mb-4 -mx-4 bg-gray-900`}
        `}
      />

      <fieldset
        css={css`
          ${tw`border-none`}
        `}
      >
        <Legend>Amenities</Legend>

        <div
          css={css`
            ${tw`sm:flex sm:flex-wrap`}
          `}
        >
          <label
            css={css`
              ${tw`block mt-2 sm:w-1/4 sm:pr-2`}
            `}
          >
            <CustomCheckbox name="amenities" id="balcony" />
            <RadioLabel>Balcony</RadioLabel>
          </label>
          <label
            css={css`
              ${tw`block mt-2 sm:w-1/4 sm:pr-2`}
            `}
          >
            <CustomCheckbox name="amenities" id="pool" />
            <RadioLabel>Pool</RadioLabel>
          </label>
          <label
            css={css`
              ${tw`block mt-2 sm:w-1/4 sm:pl-4`}
            `}
          >
            <CustomCheckbox name="amenities" id="beach" />
            <RadioLabel>Beach</RadioLabel>
          </label>
          <label
            css={css`
              ${tw`block mt-2 sm:w-1/4 sm:pr-2`}
            `}
          >
            <CustomCheckbox name="amenities" id="pet-friendly" />
            <RadioLabel>Pet friendly</RadioLabel>
          </label>
          <label
            css={css`
              ${tw`block mt-2 sm:w-1/4 sm:pr-2`}
            `}
          >
            <CustomCheckbox name="amenities" id="kid-friendly" />
            <RadioLabel>Kid friendly</RadioLabel>
          </label>
          <label
            css={css`
              ${tw`block mt-2 sm:w-1/4 sm:pr-2`}
            `}
          >
            <CustomCheckbox name="amenities" id="parking" />
            <RadioLabel>Parking</RadioLabel>
          </label>
          <label
            css={css`
              ${tw`block mt-2 sm:w-1/2 sm:pl-4`}
            `}
          >
            <CustomCheckbox name="amenities" id="air-conditioning" />
            <RadioLabel>Air Conditioning</RadioLabel>
          </label>
        </div>
      </fieldset>

      <div
        css={css`
          ${tw`flex items-center justify-center py-4 -mx-4 bg-gray-900 sm:justify-end`}
        `}
      >
        <button
          type="submit"
          css={css`
            ${tw`w-full py-2 mx-4 font-medium text-center text-white bg-indigo-500 rounded-lg sm:w-auto sm:inline-block sm:px-3`}
          `}
        >
          Update results
        </button>
      </div>
    </form>
  )
}
