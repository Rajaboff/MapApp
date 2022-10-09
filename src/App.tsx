import { FC, useEffect, useState } from "react";
import MapPanel from "views/map-panel/MapPanel";
import ApplicationPanel from "views/application-panel/ApplicationPanel";
import { Slider } from "antd";
import { useDispatch } from "react-redux";
import { fetchApllicationsAction } from "store/actions";
import { Loader } from "components/loader/Loader";

export const App: FC = () => {
  const [width, setWidth] = useState(500);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchApllicationsAction());
  }, []);

  return (
    <div className="flex justify-between w-full h-full p-5">
      <div className="h-full pr-3" style={{ width: `${width / 10}%` }}>
        <ApplicationPanel />
      </div>

      <div className="fixed top-2 left-1/2 opacity-0 -translate-x-1/2 h-0 w-[49%]">
        <Slider
          className="h-full"
          handleStyle={{
            cursor: "w-resize",
            width: "12px",
            height: "96vh",
            borderRadius: "0px",
          }}
          trackStyle={{ cursor: "w-resize" }}
          tooltip={{ open: false }}
          defaultValue={500}
          min={250}
          max={750}
          onChange={(w) => setWidth(w)}
        />
      </div>

      <div className="resizer w-2 bg-slate-100 h-full rounded-full"></div>

      <div className="h-full pl-4" style={{ width: `${100 - width / 10}%` }}>
        <MapPanel />
      </div>

      <Loader />
    </div>
  );
};
