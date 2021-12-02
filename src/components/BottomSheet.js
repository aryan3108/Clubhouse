import React from "react";
import { AiFillPropertySafety } from "react-icons/ai";
import SwipeableBottomSheet from "react-swipeable-bottom-sheet";
import style from "../style/bottomSheet.module.css";
import StartRoom from "./bottom-sheets/StartRoom";
import NewRoom from "./bottom-sheets/NewRoom";

export default function BottomSheet(props) {
  return (
    <SwipeableBottomSheet
      open={props.sheetVisible}
      onChange={() => {
        props.setSheetVisible(!props.sheetVisible);
        props.setItemsVisible(true);
      }}
      fullScreen={props.sheetTitle == "Room Detail" ? true : false}
    >
      <div
        className={style.BottomSheetContainer}
        style={{
          backgroundColor: props.sheetTitle == "profile" ? "transparent" : "",
        }}
      >
        {props.sheetTitle == "new room" ? (
          <NewRoom
            cardDetail={props.cardDetail}
            setSheetVisible={(item) => {
              props.setSheetVisible(item);
              props.setItemsVisible(item);
            }}
          />
        ) : (
          <StartRoom
            setSheetCreateRoom={props.setSheetCreateRoom}
            setSheetVisible={(item) => {
              props.setSheetVisible(item);
              props.setItemsVisible(item);
            }}
          />
        )}
      </div>
    </SwipeableBottomSheet>
  );
}
