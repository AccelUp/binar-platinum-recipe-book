import React from "react";
import { TbCloudDownload } from "react-icons/tb";
import { HiUserGroup } from "react-icons/hi";
import { GiBookmark } from "react-icons/gi";
import { MdPlace } from "react-icons/md";
const stat_card = () => {
  return (
    <div>
      <section className="text-blackk font-Poppins body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-bold cursor-pointer text-primary ease-in-out duration-300 title-font mb-4  uppercase">
              CREATIVE KITCHEN
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              "Creating delicious recipes in the kitchen, where fresh
              ingredients meet culinary expertise, to satisfy your taste buds
              and bring joy to your dining experience."
            </p>
          </div>
          <div className="flex flex-wrap justify-center -m-4 text-center">
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                <TbCloudDownload
                  size={50}
                  className="p-1 text-primary mx-auto mb-4"
                />
                <h2 className="title-font font-medium text-3xl text-blackk">
                  1k+
                </h2>
                <p className="leading-relaxed">Downloads</p>
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                <HiUserGroup
                  size={50}
                  className="p-1 text-primary mx-auto mb-4"
                />
                <h2 className="title-font font-medium text-3xl text-blackk">
                  100+
                </h2>
                <p className="leading-relaxed">Users</p>
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                <GiBookmark
                  size={50}
                  className="p-1 text-primary mx-auto mb-4"
                />
                <h2 className="title-font font-medium text-3xl text-blackk">
                  99+
                </h2>
                <p className="leading-relaxed">Recipe</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default stat_card;
