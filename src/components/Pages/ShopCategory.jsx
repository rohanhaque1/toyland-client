import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const ShopCategory = () => {
    return (
      <>
        <section className="px-20 py-10 ">
          <h2 className="text-center text-4xl text-orange-800 font-bold my-5">
            Toy Cars
          </h2>
          <div className="text-center">
            <Tabs>
              <TabList>
                <Tab>Sports Car</Tab>
                <Tab>Bus</Tab>
                <Tab>Police Car</Tab>
              </TabList>

              <TabPanel>
                <div className="w-8/12 mx-auto">
                  <div className="card w-96 bg-base-100 shadow-xl">
                    <figure>
                      <img
                        src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                        alt="Shoes"
                      />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title">
                        Shoes!
                        <div className="badge badge-secondary">NEW</div>
                      </h2>
                      <p>If a dog chews shoes whose shoes does he choose?</p>
                      <div className="card-actions justify-end">
                        <div className="badge badge-outline">Fashion</div>
                        <div className="badge badge-outline">Products</div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabPanel>

              <TabPanel>
                <h2>Any content 2</h2>
              </TabPanel>
              <TabPanel>
                <h2>Any content 2</h2>
              </TabPanel>
            </Tabs>
          </div>
        </section>
      </>
    );
};

export default ShopCategory;