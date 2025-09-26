import React from 'react';

const TabContent = ({ content }) => {
    return (
        <div className="discover-tab-content">
            <div className="row">
                {content.map((profile, index) => (
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={index}>
                        <div className="discover-content-box">
                            <div className={`discover-content-profile ${profile.online ? 'online' : ''}`}>
                                <img src={profile.image} alt="images" className="img-fluid" />
                            </div>
                            <div className="discover-content-rating">
                                <div className="star-box">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14"
                                        height="13" viewBox="0 0 14 13" fill="none">
                                        <path
                                            d="M4.86687 4.14746L6.49062 0.877464C6.53789 0.782829 6.61058 0.703233 6.70055 0.647601C6.79052 0.591968 6.89421 0.5625 7 0.5625C7.10578 0.5625 7.20947 0.591968 7.29944 0.647601C7.38941 0.703233 7.46211 0.782829 7.50937 0.877464L9.13312 4.14746L12.7631 4.67496C12.8678 4.68948 12.9663 4.73315 13.0474 4.80097C13.1285 4.86879 13.1889 4.95805 13.2216 5.05854C13.2544 5.15904 13.2583 5.26672 13.2328 5.36931C13.2073 5.4719 13.1535 5.56525 13.0775 5.63871L10.4512 8.18246L11.0712 11.7762C11.1506 12.2375 10.6631 12.5887 10.2462 12.3712L7 10.6737L3.75312 12.3712C3.33687 12.5893 2.84937 12.2375 2.92875 11.7756L3.54875 8.18184L0.922496 5.63809C0.846863 5.56457 0.79337 5.47131 0.768099 5.36891C0.742827 5.26651 0.746791 5.15907 0.779539 5.0588C0.812288 4.95854 0.872507 4.86948 0.953352 4.80173C1.0342 4.73399 1.13242 4.69029 1.23687 4.67559L4.86687 4.14746Z"
                                            fill="#FFC805" />
                                    </svg>
                                </div>
                                <span className="rating-count">
                                    {profile.rating}
                                </span>
                            </div>
                            <div className="discover-profile-content">
                                <h3>
                                    {profile.name}
                                </h3>
                                <p>
                                    {profile.role}
                                </p>
                                <ul className="list-unstyled">
                                    {profile.skills.map((skill, index) => (
                                        <li key={index}>
                                            <p>
                                                {skill}
                                            </p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
                <div className="col-12">
                    <div className="view-all-btn-box">
                        <a href="#" className="custum-btn customBtn">
                            View All
                            <span className="icon"><svg xmlns="http://www.w3.org/2000/svg"
                                fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                    d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                            </svg>
                            </span>
                        </a>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default TabContent;