import React from "react";
import Navbar from "../components/navbar/Navbar";
// Separate Dashboard Navbar

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <div className="font-sans bg-black flex flex-col min-h-screen pt-7 w-full">
        <Navbar />
        <div className="bg-blue-dark">
          <div className="container mx-auto px-4">
            <div className="flex items-center md:justify-between py-4">
              <div className="w-1/4 md:hidden">
                <svg
                  className="fill-current text-pribg-primary h-8 w-8"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M16.4 9H3.6c-.552 0-.6.447-.6 1 0 .553.048 1 .6 1h12.8c.552 0 .6-.447.6-1 0-.553-.048-1-.6-1zm0 4H3.6c-.552 0-.6.447-.6 1 0 .553.048 1 .6 1h12.8c.552 0 .6-.447.6-1 0-.553-.048-1-.6-1zM3.6 7h12.8c.552 0 .6-.447.6-1 0-.553-.048-1-.6-1H3.6c-.552 0-.6.447-.6 1 0 .553.048 1 .6 1z" />
                </svg>
              </div>
              <div className="w-1/4 md:w-auto md:flex text-right">
                <div className="hidden  md:flex md:items-center ml-2">
                  <div>
                    <svg
                      className="fill-current text-pribg-primary h-4 w-4 block opacity-50"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M4.516 7.548c.436-.446 1.043-.481 1.576 0L10 11.295l3.908-3.747c.533-.481 1.141-.446 1.574 0 .436.445.408 1.197 0 1.615-.406.418-4.695 4.502-4.695 4.502a1.095 1.095 0 0 1-1.576 0S4.924 9.581 4.516 9.163c-.409-.418-.436-1.17 0-1.615z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden bg-blue-dark md:block md:bg-primary md:border-b">
          <div className="container mx-auto px-4">
            <div className="md:flex">
              <div className="flex -mb-px mr-8">
                <a
                  href="#"
                  className="no-underline text-black font-bold md:text-blue-dark flex items-center py-4 border-b border-blue-dark"
                >
                  <svg
                    className="h-6 w-6 fill-current mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3.889 3h6.222a.9.9 0 0 1 .889.91v8.18a.9.9 0 0 1-.889.91H3.89A.9.9 0 0 1 3 12.09V3.91A.9.9 0 0 1 3.889 3zM3.889 15h6.222c.491 0 .889.384.889.857v4.286c0 .473-.398.857-.889.857H3.89C3.398 21 3 20.616 3 20.143v-4.286c0-.473.398-.857.889-.857zM13.889 11h6.222a.9.9 0 0 1 .889.91v8.18a.9.9 0 0 1-.889.91H13.89a.9.9 0 0 1-.889-.91v-8.18a.9.9 0 0 1 .889-.91zM13.889 3h6.222c.491 0 .889.384.889.857v4.286c0 .473-.398.857-.889.857H13.89C13.398 9 13 8.616 13 8.143V3.857c0-.473.398-.857.889-.857z"
                    />
                  </svg>{" "}
                  Dashboard
                </a>
              </div>
              <div className="flex -mb-px mr-8">
                <a
                  href="#"
                  className="no-underline text-black font-bold md:text-blue-dark flex items-center py-4 border-b border-blue-dark"
                >
                  Category
                </a>
              </div>
              <div className="flex -mb-px mr-8">
                <a
                  href="#"
                  className="no-underline text-black font-bold md:text-blue-dark flex items-center py-4 border-b border-blue-dark"
                >
                  Popular
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-grow container mx-auto sm:px-4 pt-6 pb-8">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full mb-6 lg:mb-0 lg:w-1/2 px-4 flex flex-col">
              <div className="flex-grow flex flex-col bg-primary border-t border-b sm:rounded sm:border shadow overflow-hidden">
                <div className="border-b">
                  <div className="flex justify between px-6 -mb-px">
                    <h3 className="text-blue-dark py-4 font-normal text-lg">
                      Favorite Recipe
                    </h3>
                  </div>
                </div>
                <div className=" justify-center flex gap-16 px-6 py-6 text-grey-darker items-center border-b -mx-4">
                  <div>Rendang Daging</div>
                  <div>Doni Prasetyo</div>
                  <div>24 March 2023</div>
                </div>
                <div className=" justify-center flex gap-16 px-6 py-6 text-grey-darker items-center border-b -mx-4">
                  <div>Rendang Daging</div>
                  <div>Doni Prasetyo</div>
                  <div>24 March 2023</div>
                </div>
                <div className=" justify-center flex gap-16 px-6 py-6 text-grey-darker items-center border-b -mx-4">
                  <div>Rendang Daging</div>
                  <div>Doni Prasetyo</div>
                  <div>24 March 2023</div>
                </div>
                <div className=" justify-center flex gap-16 px-6 py-6 text-grey-darker items-center border-b -mx-4">
                  <div>Rendang Daging</div>
                  <div>Doni Prasetyo</div>
                  <div>24 March 2023</div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 px-4">
              <div className="bg-primary border-t border-b sm:rounded sm:border shadow">
                <div className="border-b">
                  <div className="flex justify-between px-6 -mb-px">
                    <h3 className="text-blue-dark py-4 font-normal text-lg">
                      Recent Activity
                    </h3>
                  </div>
                </div>
                <div>
                  <div className="text-center px-6 py-4">
                    <div className="py-8">
                      <div className="mb-4">
                        <svg
                          className="inline-block fill-current text-grey h-16 w-16"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M11.933 13.069s7.059-5.094 6.276-10.924a.465.465 0 0 0-.112-.268.436.436 0 0 0-.263-.115C12.137.961 7.16 8.184 7.16 8.184c-4.318-.517-4.004.344-5.974 5.076-.377.902.234 1.213.904.959l2.148-.811 2.59 2.648-.793 2.199c-.248.686.055 1.311.938.926 4.624-2.016 5.466-1.694 4.960-6.112zm1.009-5.916a1.594 1.594 0 0 1 0-2.217 1.509 1.509 0 0 1 2.166 0 1.594 1.594 0 0 1 0 2.217 1.509 1.509 0 0 1-2.166 0z" />
                        </svg>
                      </div>
                      <p className="text-2xl text-grey-darker font-medium mb-4">
                        No new recipe yet 😥
                      </p>
                      <p className="text-grey max-w-xs mx-auto mb-6">
                        You haven't added any new recipe recently. Add now so
                        everyone can see what the cook is cooking!
                      </p>
                      <div>
                        <button
                          type="button"
                          className="bg-blue hover:bg-blue-dark text-pribg-primary border border-blue-dark rounded px-6 py-4"
                        >
                          Add Recipe
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
