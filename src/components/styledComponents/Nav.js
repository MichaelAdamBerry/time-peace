import styled from "@emotion/styled"

export const Nav = styled.div`
  height: 38px;
  background-color: #2b2b2b;
  display: flex;
  justify-content: space-around;

  .nav-toggler {
    height: 100%;
    color: #cccccc;
    text-transform: uppercase;
    cursor: pointer;
  }

  button {
    background: none;
    border: none;

    :focus {
      outline: none;
    }
  }

  .nav-toggler p {
    font-size: 17px;
    margin-top: 0;
    margin-bottom: 0;
    padding-right: 20px;
    padding-left: 20px;
    padding-top: 10px;
    padding-bottom: 10px;
  }

  .selected {
    background-color: #e8e8e8;
    color: #2f2f2f;
  }

  @media (max-width: 425px) {
    margin-top: 1.5rem;
    height: 25px;
    .nav-toggler p {
      font-size: 12px;
      padding: 0;
    }
  }
`
