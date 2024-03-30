import React, { useState } from "react";
import "./style/style.css";
import FeatureEventsData from "../../tabs/FeatureEventsData";

const FeatureEvents = () => {
  const [activeTab, setActiveTab] = useState(0); // State to track the active tab

  // Function to handle tab change
  const handleTabChange = (index) => {
    setActiveTab(index);
  };

  return (
    <section className="feature-events-wrapper">
      <div className="feature-events-wrapper-inner">
        <h2>Featured Events On Sale Today</h2>
        
        <div className="custom-tabs">
          <div className="tab-list">
            {/* Map through tab items */}
            {tabs.map((tab, index) => (
              <div
                key={index}
                className={`tab ${activeTab === index ? "active" : ""}`}
                onClick={() => handleTabChange(index)}
              >
                {tab.title}
              </div>
            ))}
          </div>
          {/* Display content based on active tab */}
          <div className="tab-content">{tabs[activeTab].content}</div>
        </div>
      </div>
    </section>
  );
};

const tabs = [
  {
    title: "All",
    content: <FeatureEventsData />,
  },
  {
    title: "Sports",
    content: <FeatureEventsData />,
  },
  {
    title: "Concerts",
    content: <FeatureEventsData />,
  },
  {
    title: "Festivals",
    content: <FeatureEventsData />,
  },
  {
    title: "Theaters",
    content: <FeatureEventsData />,
  },
];

export default FeatureEvents;
