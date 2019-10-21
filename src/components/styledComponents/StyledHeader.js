import styled from "styled-components"

export const StyledHeader = styled.header`
  display: grid;
  max-height: 115px;
  grid-template-columns: 60% 25% 15%;
  grid-template-rows: 33px 38px 33px;
  h1 {
    grid-row: 2/3;
    grid-column: 1/2;
    color: black;
    margin-top: 0;
    margin-bottom: 0;
    font-size: 38px;
    text-transform: uppercase;
  }

  a.site-title {
    font-family: "Permanent Marker", cursive;
    color: var(--green);
    text-decoration: none;
  }

  .search {
    grid-row: 2/3;
    grid-column: 2/3;
  }

  .icons {
    grid-row: 2/3;
    grid-column: 3/4;
    display: flex;
    justify-content: space-around;
  }

  .dropdown {
    width: 342px;
    float: right;
  }

  img {
    margin: 0;
  }

  .search {
    border: solid 1px;
  }

  .shopping-bag {
    display: flex;
    background: none;
    border: none;

    :focus {
      outline: none;
    }
  }

  .indicator {
    transform: translate(0px, -5px);
    width: 20px;
    font-size: 15px;
    line-height: 22px;
    max-height: 20px;
    min-height: 20px;
    border-radius: 50%;
    background: var(--green-gradient);
    color: black;
    text-align: center;
  }

  @media (max-width: 425px) {
    grid-template-rows: 10px auto 10px;

    a.site-title {
      text-decoration: none;
      font-family: "Permanent Marker", cursive;
      font-size: 20px;
      margin-left: 1rem;
    }

    .icons {
      grid-column: 2/4;
    }
  }
`
