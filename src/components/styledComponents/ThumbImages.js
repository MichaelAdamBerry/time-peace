import styled from "@emotion/styled"

export const ThumbImages = styled.div`
display: flex;
justify-content: space-around;
grid-row: 2/3;
grid-column: 1/2;
margin: 0 3rem;

img {
  width: 60px;
  height: 60px;
  box-shadaow: 0px 0px 15px #2f2f2f99;
}

.right-arrow {
    tranform: translateY(20px);
    cursor: pointer;
    width: 20px;
    height: 20px;
}

.left-arrow {
  height: 20px;
  transform: rotate(180deg) translateY(-25px);
  cursor: pointer;

  img.arrow-btn {
    width: 20px;
    height: 20px; 
}

@media (max-width: 425px) {
  margin: 2rem 0;
}
`
