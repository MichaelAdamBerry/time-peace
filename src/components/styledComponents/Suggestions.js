import styled from "@emotion/styled"

export const Suggestions = styled.div`
grid-row: 3/4;
grid-column: 2/8;

.images {
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  justify-content: center;
  grid-column-gap: 5%;
  text-align: center;
}

.img-container {
  max-width: 208px;
  max-height: 220px;
  box-shadow: 0px 0px 20px #2f2f2f35;
}

h3 {
  text-transform: uppercase;
  text-align: center;
  line-height: 4rem;
}
}

h3,
h4 {
  font-weight: 500;
  font-size: 1rem;
  
`
