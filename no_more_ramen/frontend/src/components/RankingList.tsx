import React from 'react';
import styled from 'styled-components';
import RankingItem from './RankingItem';

const RankingList = () => {
  return (
    <ListContainer>
        <RankingItem score={20000} iconNo={"0"} username={"takt"} rank={1} />
        <RankingItem score={19000} iconNo={"0"} username={"takt"} rank={2} />
        <RankingItem score={19000} iconNo={"0"} username={"takt"} rank={3} />
        <RankingItem score={18000} iconNo={"1"} username={"takt"} rank={4} />
        <RankingItem score={18000} iconNo={"1"} username={"takt"} rank={5} />
        <RankingItem score={17000} iconNo={"2"} username={"takt"} rank={6} />
        <RankingItem score={10000} iconNo={"1"} username={"takt"} rank={7} />
        <RankingItem score={10000} iconNo={"1"} username={"takt"} rank={8} />
        <RankingItem score={10000} iconNo={"1"} username={"takt"} rank={9} />
        <RankingItem score={10000} iconNo={"0"} username={"takt"} rank={11} />
        <RankingItem score={10000} iconNo={"1"} username={"takt"} rank={12} />
        <RankingItem score={10000} iconNo={"1"} username={"takt"} rank={13} />
        <RankingItem score={10000} iconNo={"1"} username={"takt"} rank={14} />
        <RankingItem score={10000} iconNo={"1"} username={"takt"} rank={15} />
        <RankingItem score={9000} iconNo={"2"} username={"takt"} rank={16} />
        <RankingItem score={9000} iconNo={"1"} username={"takt"} rank={17} />
        <RankingItem score={6000} iconNo={"1"} username={"takt"} rank={18} />
        <RankingItem score={5000} iconNo={"1"} username={"takt"} rank={19} />
        <RankingItem score={4000} iconNo={"1"} username={"takt"} rank={20} />
    </ListContainer>
  )
}

const ListContainer = styled.div`
  margin: 32px auto;
  padding-bottom: 180px;
`;

export default RankingList