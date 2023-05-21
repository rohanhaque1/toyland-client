import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ToyList from "./ToyList";

const ShopCategory = () => {
  const [toysData, setToysData] = useState([]);
  useEffect(() => {
    fetch("https://toyland-server-eight.vercel.app/toys")
      .then((res) => res.json())
      .then((data) => setToysData(data));
  }, []);
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
              <ToyList category="sports car" toys={toysData} />
            </TabPanel>
            <TabPanel>
              <ToyList category="bus" toys={toysData} />
            </TabPanel>
            <TabPanel>
              <ToyList category="police car" toys={toysData} />
            </TabPanel>
          </Tabs>
        </div>
      </section>
    </>
  );
};

export default ShopCategory;
