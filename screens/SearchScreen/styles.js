import React from "react";
import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #ffffff;
`;

export const Scroller = styled.ScrollView`
    flex:1
    padding: 20px`;

export const HeaderArea = styled.View`
  flex-direction: row;
  align-items: center;
  fontsize: 30px;
  font-weight: bold;
  color: #000000;
`;

export const HeaderTitle = styled.Text`
  width: 250px;
  font-size: 30px;
  font-weight: bold;
  color: #000000;
`;

export const SearchArea = styled.View`
  background-color: #ffffff;
  height: 60px;
  border-radius: 30px;
  flex-direction: row;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
  margin-top: 50px;
  border: 0.5px;
  border-color: red;
`;

export const SearchInput = styled.TextInput`
  flex: 1;
  font-size: 20px;
  color: #000000;
`;
