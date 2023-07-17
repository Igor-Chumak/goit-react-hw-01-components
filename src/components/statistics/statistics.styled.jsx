import styled from 'styled-components';
import getRandomHexColor from '../../utils';

export const SectionStat = styled.section`
  max-width: 345px;
  margin: 0 auto;
  background: #fff;
  margin-bottom: 10px;
`;

export const TitleStat = styled.h2`
  display: block;
  width: 100%;
  min-height: 70px;
  margin: 0;
  padding-top: 23px;
  padding-bottom: 23px;
  text-align: center;
  font-weight: 500;
  font-size: 20px;
  line-height: calc(24 / 22);
  text-transform: uppercase;
  text-shadow: none;
  color: colorCardProfile;
`;

export const ListStat = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

export const ItemStat = styled.li`
  flex-basis: calc((100% - 3 * 0px) / 4);
  padding-top: 17px;
  padding-bottom: 17px;
  /* background-color: ${getRandomHexColor()}; */
`;

export const LabelStat = styled.span`
  display: block;
  width: 100%;
  text-align: center;
  color: #fff;
  font-weight: 400;
  font-size: 14px;
  line-height: calc(16 / 14);
  text-transform: lowercase;
  margin-bottom: 10px;
`;

export const PercentageStat = styled.span`
  display: block;
  width: 100%;
  text-align: center;
  color: #fff;
  font-weight: 400;
  font-size: 22px;
  line-height: calc(26 / 22);
`;
