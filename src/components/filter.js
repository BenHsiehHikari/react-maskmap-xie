import React, {} from "react";
import styled from '@emotion/styled';

const FilterFn = styled.div`
  margin-top: 20px;
  font-size: 0px;
  .distance, .time, .mask-total{
    width: calc(33.33% - 14px);
    border-radius: 36px;
    display: inline-block;
    overflow: hidden;
    background: #cccccc;
    border: 1px solid #cccccc;
    font-size: 14px;
    select{
      width: 100%;
      border: 0px;
      outline: none;
      text-align-last: center;
    }
  }
  .time{
    margin: 0 20px;
  }
`;

export default function filter({onDistanceValue, onTimeValue, onMaskValue}) {
  
  return (
      <FilterFn>
        <div className="distance">
          <select name="" id="" onChange={onDistanceValue} defaultValue="2000">
            <option value="2000">距離</option>
            <option value="2000">2公里內</option>
            <option value="800">800公尺內</option>
            <option value="400">400公尺內</option>
          </select>
        </div>
        <div className="time">
          <select name="" id="" onChange={onTimeValue} defaultValue="上午">
            <option value="上午">營業時間</option>
            <option value="上午">上午</option>
            <option value="下午">下午</option>
            <option value="晚上">晚上</option>
          </select>
        </div>
        <div className="mask-total">
          <select name="" id="" onChange={onMaskValue} defaultValue="10000">
            <option value="10000">需求口罩</option>
            <option value="2000">2000個以下</option>
            <option value="1000">1000個以下</option>
            <option value="500">500個以下</option>
          </select>
        </div>
      </FilterFn>
  );
}
