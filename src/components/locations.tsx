import React, { ReactNode } from "react"
import { css } from "@emotion/core"
// eslint-disable-next-line import/no-extraneous-dependencies
import tw from "twin.macro"
import uuid from "uuid/v4"
import { repeat } from "ramda"

import { ReactComponent as IconStar } from "../images/icon-star.svg"

type LocationsProps = {}

type Property = {
  readonly imageUrl: string
  readonly beds: number
  readonly baths: number
  readonly title: string
  readonly price: number
  readonly reviewCount: number
  readonly rating: number
}

type Location = {
  readonly title: string
  readonly description: string
  readonly properties: readonly Property[]
}

const locations: readonly Location[] = [
  {
    title: "Los Angeles",
    description:
      "Live like the stars in these luxurious Southern California estates.",
    properties: [
      {
        imageUrl:
          "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        beds: 3,
        baths: 2,
        title: "Modern home in city center",
        price: 190000,
        reviewCount: 34,
        rating: 4,
      },
      {
        imageUrl:
          "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        beds: 4,
        baths: 1,
        title: "Quiet living outside the city",
        price: 175000,
        reviewCount: 12,
        rating: 3,
      },
      {
        imageUrl:
          "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80",
        beds: 5,
        baths: 4,
        title: "Renovated apartment uptown",
        price: 200000,
        reviewCount: 54,
        rating: 5,
      },
      {
        imageUrl:
          "https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        beds: 3,
        baths: 2,
        title: "Family home in the suburbs",
        price: 115000,
        reviewCount: 34,
        rating: 4,
      },
    ],
  },
  {
    title: "Phoenix",
    description:
      "Escape the cold and enjoy great weather without breaking the bank.",
    properties: [
      {
        imageUrl:
          "https://images.unsplash.com/photo-1447958272669-9c562446304f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80",
        beds: 3,
        baths: 2,
        title: "Modern home in city center",
        price: 190000,
        reviewCount: 34,
        rating: 4,
      },
      {
        imageUrl:
          "https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80",
        beds: 4,
        baths: 1,
        title: "Quiet living outside the city",
        price: 175000,
        reviewCount: 12,
        rating: 3,
      },
      {
        imageUrl:
          "https://images.unsplash.com/photo-1472224371017-08207f84aaae?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        beds: 5,
        baths: 4,
        title: "Renovated apartment uptown",
        price: 200000,
        reviewCount: 54,
        rating: 5,
      },
      {
        imageUrl:
          "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        beds: 3,
        baths: 2,
        title: "Family home in the suburbs",
        price: 115000,
        reviewCount: 34,
        rating: 4,
      },
    ],
  },
  {
    title: "Dallas",
    description: "Experience Texas living in these awesome ranch-style homes.",
    properties: [
      {
        imageUrl:
          "https://images.unsplash.com/photo-1471231681582-352356ab45a0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80",
        beds: 3,
        baths: 2,
        title: "Modern home in city center",
        price: 190000,
        reviewCount: 34,
        rating: 4,
      },
      {
        imageUrl:
          "https://images.unsplash.com/photo-1533779283484-8ad4940aa3a8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80",
        beds: 4,
        baths: 1,
        title: "Quiet living outside the city",
        price: 175000,
        reviewCount: 12,
        rating: 3,
      },
      {
        imageUrl:
          "https://images.unsplash.com/photo-1432303492674-642e9d0944b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        beds: 5,
        baths: 4,
        title: "Renovated apartment uptown",
        price: 200000,
        reviewCount: 54,
        rating: 5,
      },
      {
        imageUrl:
          "https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        beds: 3,
        baths: 2,
        title: "Family home in the suburbs",
        price: 115000,
        reviewCount: 34,
        rating: 4,
      },
    ],
  },
]

const formatPrice = (price: number): string => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  })

  return formatter.format(price / 100)
}

const repeatStarIcon = repeat<ReactNode>(
  <IconStar
    css={css`
      ${tw`w-4 h-4 text-teal-500 fill-current`}
    `}
  />
)

const renderProperties = (properties: readonly Property[]): ReactNode =>
  properties.map(
    ({ imageUrl, beds, baths, title, price, reviewCount, rating }) => (
      <div
        key={uuid()}
        css={css`
          ${tw`mb-10 sm:max-w-xs sm:w-full sm:flex-shrink-0`}
        `}
      >
        <div
          css={css`
            ${tw`relative`}
            padding-bottom: 83.33333333%;
          `}
        >
          <img
            css={css`
              ${tw`absolute inset-0 object-cover w-full h-full rounded-lg shadow-md`}
            `}
            src={imageUrl}
            alt=""
          />
        </div>
        <div>
          <div
            css={css`
              ${tw`relative px-4 py-4 mx-4 -mt-16 bg-white rounded-lg shadow-lg`}
            `}
          >
            <div
              css={css`
                ${tw`flex items-baseline`}
              `}
            >
              <span
                css={css`
                  ${tw`px-2 py-1 mr-2 text-sm font-medium leading-none text-teal-800 uppercase bg-teal-200 rounded-full`}
                `}
              >
                Plus
              </span>
              <span
                css={css`
                  ${tw`text-sm font-medium leading-none tracking-tight text-gray-600 uppercase`}
                `}
              >
                {beds} {beds === 1 ? "bed" : "beds"} &bull; {baths}{" "}
                {baths === 1 ? "bath" : "baths"}
              </span>
            </div>

            <h4
              css={css`
                ${tw`pt-4 mb-0 text-xl`}
              `}
            >
              {title}
            </h4>
            <div
              css={css`
                ${tw`mt-2`}
              `}
            >
              {formatPrice(price)}
              <span
                css={css`
                  ${tw`text-gray-500 `}
                `}
              >
                /wk
              </span>
            </div>
            <div
              css={css`
                ${tw`flex items-center`}
              `}
            >
              {repeatStarIcon(rating)}
              <span
                css={css`
                  ${tw`block text-sm text-gray-500`}
                `}
              >
                {reviewCount} reviews
              </span>
            </div>
          </div>
        </div>
      </div>
    )
  )

const renderLocations = (allLocations: readonly Location[]): ReactNode =>
  allLocations.map(location => (
    <div key={uuid()}>
      <h3
        css={css`
          ${tw`mt-6 mb-0 font-normal`}
        `}
      >
        {location.title}
      </h3>

      <p
        css={css`
          ${tw`mt-2 text-gray-700`}
        `}
      >
        {location.description}
      </p>
      <div
        css={css`
          ${tw`sm:flex`}
        `}
      >
        {renderProperties(location.properties)}
      </div>
    </div>
  ))

const Locations: React.FC<LocationsProps> = () => {
  return <>{renderLocations(locations)}</>
}

export default Locations
