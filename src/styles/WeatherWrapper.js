import styled from 'styled-components';

export const WeatherWrapper = styled.div`
  width: ${props => props.$width}%;
  display: flex;
  height: 160px;
  margin: 1%;
  color: white;
  background-color: ${props => props.$is_day ? "#BC991B" : "#114DA6"};
  border-radius: 7px;
  overflow: hidden;
  h2{
    position: relative;
  }
  & .sub{
    position: absolute;
    font-size: 11px;
    bottom: 3px;
    margin-left: 9px;
    white-space: nowrap;
  }
  & .data{
    width: 60%;
    & > *{
      height: 33.33%;
    }
  }
  & .map{
    width: 40%;
    height: 100%;
  }
  & .title, & .forecast{
    display: flex;
    align-items: center;
    padding: 4px;
    box-sizing: border-box;
  }
  & .title img{
    height: 100%;
    margin-right: 10px;
  }
  & .forecast{
    & > *{
      flex: 1 1 0px;
    }
    &:nth-child(2){
      background-color: ${props => props.$is_day ? "#796707" : "#073479"};
    }
  }
  & .subtitle{
    font-size: 15px;
    padding-left: 13px;
  }
  & .celsius{
    font-size: 26px;
  }
  & .condition{
    font-size: 11px;
    display: block;
    line-height: 1;
  }
  & .value{
    margin: 0;
    font-size: 11px;
    white-space: nowrap;
  }
  & .super{
    position: absolute;
    font-size: 11px;
  }
`