import { gql } from "@apollo/client";

export const GET_INFO = gql`
query getINFO($name: String!) {
  characters(page: 2, filter: { name: $name}) {
    info {
      count
    }
    results {
      name
    }
  }
  location(id: 1) {
    id
  }
  episodesByIds(ids: [1, 2]) {
    id
  }
}


`;