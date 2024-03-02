import React, { useState } from 'react';
import styles from '@/styles/TabsContainer.module.css';

const Tab = ({ id, isActive, onClick, label }) => (
  <div
    className={styles.tab + (isActive ? ' ' + styles.active : '')}
    onClick={() => onClick(id)}
  >
    {label}
  </div>
);

export default function TabsContainer({ components }) {
  const [activeTab, setActiveTab] = useState(components[0].id);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className={styles.tabsContainer}>
      <div className={styles.tabs}>
        {components.map((component) => (
          <Tab
            key={component.id}
            id={component.id}
            isActive={component.id === activeTab}
            onClick={handleTabClick}
            label={component.title}
          />
        ))}
      </div>
      <div className={styles.tabContent}>
        {components.find(component => component.id === activeTab).content}
      </div>
    </div>
  );
};
