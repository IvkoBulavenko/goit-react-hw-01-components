import styled from '@emotion/styled';

export const StatBox = styled.section`
  margin: 0 auto 20px;
  text-align: center;
  width: 350px;
  background-color: #fff;
  border: 1px solid rgb(240, 120, 350);
  border-radius: 5px;
  `;

export const Title = styled.h2`
  font-weight: bold;
  font-size: 22px;
  line-height: 1.1;
  text-transform: uppercase;
  padding: 10px 0;
`;

export const List = styled.ul`
  display: flex;
  justify-content: space-around;
  padding: 0;
  `;

export const Item = styled.li`
display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  text-shadow: 0 0 12px rgb(49, 49, 49);
  `;

export const Label = styled.span`
  display: block;
  margin: 0 0 5px;
  color: rgb(0, 183, 255);
`;

export const Percentage = styled.span`
  font-family: Roboto;
  font-size: 30px;
  color: rgb(0, 183, 255);
`;