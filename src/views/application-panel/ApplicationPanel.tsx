import React, { FC, Fragment } from "react";
import { useSelector } from "react-redux";
import {
  IApplication,
  IApplicationState,
} from "interfaces/application.interface";
import ApplicationCard from "components/application-card/ApplicationCard";

const ApplicationList: FC<{
  applications: IApplication[];
  selectedApplication: IApplication | null;
}> = ({ applications = [], selectedApplication }) => {
  return (
    <>
      {applications.map((application: IApplication) => (
        <Fragment key={application.id}>
          <ApplicationCard
            item={application}
            active={selectedApplication !== null && selectedApplication.id === application.id}
          />
          <div className="line w-[96%] mx-auto h-[1px] bg-[#eef0f4]"></div>
        </Fragment>
      ))}
    </>
  );
};

const ApplicationPanel: FC = () => {
  const { applications, application } = useSelector(
    (state: { application: IApplicationState }) => state.application
  );

  return (
    <div className="py-2 px-1 w-full h-full flex flex-col justify-between">
      <h1 className="font-extrabold text-5xl mb-2">Все заявки</h1>
      <p className="font-medium text-lg text-gray-400 ">
        Таблица всех заявок пользователей
      </p>

      <div className="application-list h-full flex flex-col mt-8 overflow-auto hide-scrollbar">
        <div className="line w-[96%] mx-auto h-[1px] bg-[#eef0f4]"></div>
        {applications !== null && (
          <ApplicationList
            applications={applications}
            selectedApplication={application}
          />
        )}
      </div>
    </div>
  );
};

export default React.memo(ApplicationPanel);
