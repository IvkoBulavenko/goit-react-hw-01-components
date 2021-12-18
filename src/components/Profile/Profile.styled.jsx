import styled from '@emotion/styled';

export const ProfileCard = styled.div`
  align-items: center;
  width: 350px;
  margin: 0 auto 50px;
  background-color: #fff;
  border: 1px solid rgb(240, 120, 350);
  border-radius: 5px;
  );
`;

export const Description = styled.div`
  padding: 20px 20px 0;
  text-align: center;
`;

export const Avatar = styled.img`
  height: 150px;
  width: 150px;
  margin: 0 auto;
  border: 1px solid rgb(240, 120, 350);
  border-radius: 50%;
  background-color: rgb(0, 183, 255);
`;

export const Name = styled.p`
  font-weight: bold;
  font-size: 22px;
  line-height: 1.1;
  text-transform: uppercase;
  margin-bottom: 15px;
`;

export const Tag = styled.p`
  font-size: 20px;
  font-weight: 500;
  text-align: center;
  margin: 0 0 10px;
  color: rgb(105, 105, 105);
  line-height: 1.333;
`;

export const Location = styled.p`
  font-size: 20px;
  font-weight: 500;
  text-align: center;
  margin: 0 0 10px;
  color: rgb(105, 105, 105);
`;

export const Stats = styled.ul`
  display: flex;
  background-color: rgb(0, 183, 255);
  height: 100%;
  margin: 0;
  padding: 10px 0;
  justify-content: space-evenly;
  align-items: center;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 100%;
  padding: 15px 0;
`;

export const Label = styled.span`
  display: block;
  margin: 0 0 5px;
  color: rgb(240, 240, 240);
`;

export const Quantity = styled.span`
  font-family: Roboto;
  font-size: 30px;
  color: #fff;
`;

