import styled from "styled-components";

export default function Card() {
  return (
    <CardWrapper>
      <CardTitle> Homer Simpson</CardTitle>
      <CardDescription>
        Homer Jay Simpson is a fictional character and the main protagonist of
        the American animated sitcom The Simpsons. He is voiced by Dan
        Castellaneta and first appeared, along with the rest of his family, in
        The Tracey Ullman Show short Good Night on April 19, 1987.
      </CardDescription>
    </CardWrapper>
  );
}

const CardWrapper = styled.div`
  background-color: crimson;
`;

const CardTitle = styled.h3`
  color: green;
`;

const CardDescription = styled.p`
  color: blue;
`;
