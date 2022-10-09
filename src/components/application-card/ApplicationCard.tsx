import { IApplication, ICoordinate } from "interfaces/application.interface";
import React, { FC, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  changeFromCoordinateAction,
  changeToCoordinateAction,
  selectApplicationAction,
} from "store/actions";

const ApplicationCard: FC<{item: IApplication, active: boolean}> = ({ item, active }) => {
  const dispatch = useDispatch();

  const [fromPos, setFromPos] = useState<ICoordinate | null>(null);
  const [toPos, setToPos] = useState<ICoordinate | null>(null);

  const selectApplication = (): void => {
    dispatch(selectApplicationAction(item));
  };

  useEffect(() => {
    setFromPos(item.from);
    setToPos(item.to);
  }, [item.from, item.to]);

  useEffect(() => {
    dispatch(changeFromCoordinateAction(fromPos));
  }, [fromPos]);

  useEffect(() => {
    dispatch(changeToCoordinateAction(toPos));
  }, [toPos]);

  const fromInputHanlder = (value: string, coordinate: string): void => {
    const fromData: ICoordinate | null = fromPos;
    if (fromData !== null) {
      coordinate === "coordinateX"
        ? (fromData.coordinateX = value)
        : (fromData.coordinateY = value);
      setFromPos({
        ...fromData,
      });
    }
  };

  const toInputHanlder = (value: string, coordinate: string): void => {
    const toData: ICoordinate | null = toPos;
    if (toData !== null) {
      coordinate === "coordinateX"
        ? (toData.coordinateX = value)
        : (toData.coordinateY = value);
      setToPos({
        ...toData,
      });
    }
  };

  return (
    <div
      onClick={() => !active && selectApplication()}
      className={
        (active ? "bg-gradient-to-r from-[#47C54B] to-[#80DA48]" : "bg-white") +
        " w-full cursor-pointer gap-4 rounded-2xl h-[60px] min-w-[850px] group p-5 hover:bg-[#f5f6f7] active:bg-[#f1f3f6] flex items-center justify-between"
      }
    >
      <div
        className={
          (active
            ? "bg-white border-2 border-white scale-110"
            : " bg-none border-2") +
          " selector min-w-[10px] min-h-[10px] rounded-full"
        }
      ></div>

      <h1
        className={
          (active ? "text-white font-bold" : "text-black font-medium") +
          " w-full text-lg"
        }
      >
        {item.title}
      </h1>

      <div className="flex gap-8">
        <div className="input-block flex items-center gap-3">
          <h1
            className={
              (active ? "text-white" : "text-gray-300") +
              " font-regular text-base"
            }
          >
            Откуда:
          </h1>
          <div className="flex items-center gap-3">
            <input
              onChange={(ev) =>
                fromInputHanlder(ev.target.value, "coordinateX")
              }
              value={fromPos !== null ? fromPos?.coordinateX : ""}
              className={
                (active
                  ? "text-white border-white"
                  : "text-gray-300 border-gray-300") +
                " border-b w-[100px] bg-transparent text-lg font-medium"
              }
              type="number"
            />
            <input
              onChange={(ev) =>
                fromInputHanlder(ev.target.value, "coordinateY")
              }
              value={fromPos !== null ? fromPos?.coordinateY : ""}
              className={
                (active
                  ? "text-white border-white"
                  : "text-gray-300 border-gray-300") +
                " border-b w-[100px] bg-transparent text-lg font-medium"
              }
              type="number"
            />
          </div>
        </div>

        <div className="input-block flex items-center gap-3">
          <h1
            className={
              (active ? "text-white" : "text-gray-300") +
              " font-regular text-base"
            }
          >
            Куда:
          </h1>
          <div className="flex items-center gap-3">
            <input
              onChange={(ev) => toInputHanlder(ev.target.value, "coordinateX")}
              value={toPos !== null ? toPos?.coordinateX : ""}
              className={
                (active
                  ? "text-white border-white"
                  : "text-gray-300 border-gray-300") +
                " border-b w-[100px] bg-transparent text-lg font-medium"
              }
              type="number"
            />
            <input
              onChange={(ev) => toInputHanlder(ev.target.value, "coordinateY")}
              value={toPos !== null ? toPos?.coordinateY : ""}
              className={
                (active
                  ? "text-white border-white"
                  : "text-gray-300 border-gray-300") +
                " border-b w-[100px] bg-transparent text-lg font-medium"
              }
              type="number"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(ApplicationCard);
