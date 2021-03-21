import React, { useCallback } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Counter from "../Components/Counter";
import { increase, decrease } from "../Modules/counter";
import { useSelector, useDispatch } from "react-redux";

const CounterContainer = () => {
  const number = useSelector((state) => state.counter.number);
  const dispatch = useDispatch();
  const increase = useCallback(() => dispatch(increase()), []);
  const decrease = useCallback(() => dispatch(decrease()), []);
  return (
    <Counter number={number} onIncrease={increase} onDecrease={decrease} />
  );
};

export default CounterContainer;
