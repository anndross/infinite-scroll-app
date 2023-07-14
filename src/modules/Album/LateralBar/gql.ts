import { gql } from "@apollo/client";

export const GET_APODS = gql`
  query GetApods($startDate: String!, $endDate: String!){
      getApods(startDate: $startDate, endDate: $endDate){
        title
        date
        url
        explanation
      }
    }
`
export interface Apod {
  id: string
  copyright: string
  date: string
  explanation: string
  hdurl: string
  media_type: string
  service_version: string
  title: string
  url: string
}

export interface GET_APODS_RESPONSE {
  getApods: Apod[]
}


