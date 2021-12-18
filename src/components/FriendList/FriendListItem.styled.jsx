import styled from '@emotion/styled';

export const Item = styled.li`
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: flex-start;
  background-color: #fff;
  border: 1px solid rgb(240, 120, 350);
  border-radius: 5px;
  padding: 8px;

  &:not(:last-child) {
    margin-bottom: 5px;
  }
`;

export const Online = styled.span`
  margin-right: 8px;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: green;
`;

export const Offline = styled.span`
  margin-right: 8px;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: red;
`;

export const Avatar = styled.img`
  width: 50px;
  height: 50px;
  margin: 0 30px 0 0;
  border-radius: 50%;
  background-color: rgb(75, 204, 255);
`;

export const Name = styled.p`
  font-size: 25px;
  line-height: 1;
  color: blu;
  margin: 0;
`;