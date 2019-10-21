import styled from "@emotion/styled"

export const CartContainer = styled.div`
  h3 {
    font-size: 1.2rem;
  }

  h4 {
    font-size: 1rem;
  }

  h3,
  h4 {
    font-weight: 500;
  }

  p {
    font-weight: 1rem;
    margin-top: 3px;
    margin-bottom: 3px;
  }
  .close-btn {
    background: none;
    position: absolute;
    top: 70px;
    right: 5px;
    width: 30px;
    height: 30px;
    border: none;
    cursor: pointer;
  }

  button:focus {
    outline: none;
  }

  .buy-btn,
  .discount button {
    margin-top: 1rem;
  

    padding-top: 0;
    color: black;
    border-radius: 6px;
    border: none;
    
    text-align: center;
    background-color: var(--green);
    background-image: var(--green-gradient);
  }

  .buy-btn {
    font-size: 1.2rem
    height: 2rem;
    line-height: 2rem;
    width: 6rem;
    font-weight: 500;

  }

  .discount button {
    width: 2rem;
  }

  a {
    text-decoration: none;
    color: black;
  }

  .flex-between {
    display: flex;
    justify-content: space-between;
  }

  label {
    font-style: italic;
    font-size: 0.8rem;

    margin-right: 1.5rem;
  }

  input {
    font-size: 0.8rem;
    width: 5rem;
    line-height: 0.8rem;
    margin-right: 1.5rem;
  }

  .total {
    text-align: right;
  }

  .total,
  .buy-btn {
    margin-top: 2rem;
  }
`
