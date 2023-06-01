import React from "react";

const ProfileInfo = () => {
  return (
    <>
      <div className="mt-6 flex gap-12 md:mt-8 md:gap-14">
        <div className="flex flex-col items-center gap-1">
          <h4 className="text-base font-bold text-gray-900 dark:text-light md:text-lg">3</h4>
          <h4 className="text-center text-sm font-medium text-gray-700 dark:text-gray-300 md:text-base">
            Year of
            <br />
            Study
          </h4>
        </div>
        <div className="flex flex-col items-center gap-1">
          <h4 className="text-base font-bold text-gray-900 dark:text-light md:text-lg">+10</h4>
          <h4 className="text-center text-sm font-medium text-gray-700 dark:text-gray-300 md:text-base">
            Completed
            <br />
            Projects
          </h4>
        </div>
        <div className="flex flex-col items-center gap-1">
          <h4 className="text-base font-bold text-gray-900 dark:text-light md:text-lg">7</h4>
          <h4 className="text-center text-sm font-medium text-gray-700 dark:text-gray-300 md:text-base">
            Satisfied
            <br />
            Lecturer
          </h4>
        </div>
      </div>
    </>
  );
};

export default ProfileInfo;
