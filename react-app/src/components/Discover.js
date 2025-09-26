import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import TabContent from './TabContent';
import data from '../data.json';

const Discover = () => {
    const { title, description, tabs } = data.discover;

    return (
        <section className="discover-wrapper pBlock-90">
            <div className="container">
                <div className="row ">
                    <div className="col-12">
                        <div className="section-heading text-center">
                            <h2 dangerouslySetInnerHTML={{ __html: title }}></h2>
                            <p dangerouslySetInnerHTML={{ __html: description }}></p>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="discover-cover">
                            <div className="discover-tab">
                                <Tabs defaultActiveKey={tabs[0].title.toLowerCase().replace(' ', '')} id="discover-tab" className="mb-3">
                                    {tabs.map((tab, index) => (
                                        <Tab 
                                            eventKey={tab.title.toLowerCase().replace(' ', '')} 
                                            title={
                                                <>
                                                    <span className="nav-tab-link-icon" dangerouslySetInnerHTML={{ __html: tab.icon }}></span>
                                                    {tab.title}
                                                </>
                                            } 
                                            key={index}
                                        >
                                            <TabContent content={tab.content} />
                                        </Tab>
                                    ))}
                                </Tabs>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Discover;