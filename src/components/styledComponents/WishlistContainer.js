import styled from "@emotion/styled"
export const WishlistContainer = styled.div`
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
  .item-container {
    display: flex;
    min-height: 100px;
    margin-top: 2rem;
  }

  .product-thumb {
    width: 60px;
    height: 40px;
    position: relative;
    margin-right: 1rem;
  }

  .remove {
    margin-top: 1rem;
    height: 1rem;
    font-size: 0.8rem;
    padding-top: 0;
    color: red;
    border-radius: 6px;
    background-color: white;
    border: 1px solid red;
    line-height: 1rem;
    width: 4rem;
  }

  .buy-btn {
    margin-top: 1rem;
    height: 1.3rem;
    font-size: 0.8rem;
    padding-top: 0;
    color: white;
    border-radius: 6px;
    background-color: #7ee8fa;
    background-image: linear-gradient(315deg, #7ee8fa 0%, #80ff72 74%);

    border: none;
    line-height: 1.3rem;
    width: 4rem;
    text-align: center;
  }

  a {
    text-decoration: none;
    color: white;
  }

  .product-thumb img {
    position: absolute;
    top: 0px;
    width: 30px;
    right: 0px;
  }
  .total {
    margin-top: 2rem;
  }

  .discount button {
    background-color: green;
    color: white;
    border: none;
  }
`
