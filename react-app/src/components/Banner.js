import React, { useEffect, useRef } from 'react';
import data from '../data.json';
import heroBg from '../images/hero-bg.png';

const Banner = () => {
    const { title, subtitle, description, searchPlaceholder1, searchPlaceholder2, searchButtonText, sliderImages } = data.banner;
    const sliderRef = useRef(null);

    useEffect(() => {
        const slider = window.jQuery(sliderRef.current);
        slider.slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 0,
            speed: 5000,
            cssEase: 'linear',
            infinite: true,
            arrows: false,
            dots: false,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });

        return () => {
            slider.slick('unslick');
        };
    }, []);

    return (
        <section className="banner-wraaper" style={{ backgroundImage: `url(${heroBg})` }}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-sm-12 col-md-8 col-lg-8">
                        <div className="banner-heading text-center">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="22" viewBox="0 0 23 22"
                                    fill="none">
                                    <path
                                        d="M10.507 20.5H9.105C5.52 20.5 3.728 20.5 2.614 19.365C1.5 18.23 1.5 16.403 1.5 12.75C1.5 9.097 1.5 7.27 2.614 6.135C3.728 5 5.52 5 9.105 5H12.908C16.493 5 18.286 5 19.4 6.135C20.257 7.008 20.454 8.291 20.5 10.5V12"
                                        stroke="#002B6B" strokeWidth="1.5" strokeLinecap="round"
                                        strokeLinejoin="round" />
                                    <path
                                        d="M18.5 17.5H15.5M15.5 20.5C14.7044 20.5 13.9413 20.1839 13.3787 19.6213C12.8161 19.0587 12.5 18.2956 12.5 17.5C12.5 16.7044 12.8161 15.9413 13.3787 15.3787C13.9413 14.8161 14.7044 14.5 15.5 14.5M18.5 20.5C19.2956 20.5 20.0587 20.1839 20.6213 19.6213C21.1839 19.0587 21.5 18.2956 21.5 17.5C21.5 16.7044 21.1839 15.9413 20.6213 15.3787C20.0587 14.8161 19.2956 14.5 18.5 14.5M15.5 5L15.4 4.69C14.905 3.15 14.658 2.38 14.069 1.94C13.479 1.5 12.697 1.5 11.131 1.5H10.868C9.303 1.5 8.52 1.5 7.931 1.94C7.341 2.38 7.094 3.15 6.599 4.69L6.5 5"
                                        stroke="#002B6B" strokeWidth="1.5" strokeLinecap="round"
                                        strokeLinejoin="round" />
                                </svg>
                                {subtitle}
                            </span>
                            <h1 dangerouslySetInnerHTML={{ __html: title }}></h1>
                            <p dangerouslySetInnerHTML={{ __html: description }}></p>
                        </div>
                        <form action="" className="w-100">
                            <div className="banner-search-box">
                                <div className="search-list h-100">
                                    <ul className="list-unstyled d-flex align-items-center mb-0 h-100">
                                        <li>
                                            <div className="input-group">
                                                <span className="input-group-icon">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                        strokeWidth="1.5" stroke="currentColor" className="size-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round"
                                                            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                                    </svg>

                                                </span>
                                                <input type="text" className="form-control" placeholder={searchPlaceholder1} />
                                            </div>
                                        </li>
                                        <li>
                                            <div className="input-group">
                                                <span className="input-group-icon">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                        strokeWidth="1.5" stroke="currentColor" className="size-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round"
                                                            d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                                        <path strokeLinecap="round" strokeLinejoin="round"
                                                            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                                    </svg>

                                                </span>
                                                <input type="text" className="form-control" placeholder={searchPlaceholder2} />
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="search-btn-box h-100">
                                    <button type="button" className="search-btn">
                                        {searchButtonText}
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="banner-strip-cover">
                <ul className="list-unstyled mb-0" ref={sliderRef}>
                    {sliderImages.map((image, index) => (
                        <li key={index}>
                            <div className="strip-profile">
                                <img src={image} alt="images" className="img-fluid" />
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Banner;