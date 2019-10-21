import styled from "@emotion/styled"

export const HeroContainer = styled.div`
grid-row: 2/3;
grid-column: 2/8;
display: grid;
grid-template-columns: 1fr 1fr;
grid-template-rows: 80% 20%;
grid-column-gap: 5%;
border-bottom: solid #e8e8e8;

.image {
  grid-row: 1/2;
  grid-column: 1/2;
}

.image img {
  border: solid 2px #e8e8e8;
}

.thumbnails {
  grid-row: 2/3;
  grid-column: 1/2;
  background-color: black;
}

.content-area {
  grid-row: 1/3;
  grid-column: 2/3;
  background-color: black;
}

@media (max-width: 425px) {
  display: block;
  grid-column: 1/9;

  .image {
    border: none;
    margin 2rem 0;
  }
}
`
