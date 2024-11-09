import React from "react";
import css from "./Virtual.module.css";
import Shade from "../../assets/Decoration/shade.png";
import ReactCompareImage from 'react-compare-image';
import Before from "../../assets/Virtual/CardBefore.png";
import After from '../../assets/Virtual/CardAfter.png';

const Virtual = () => {
    return (
        <div className={css.virtual}>
            <div className={css.left}>
                <span>Virtual Try-On</span>
                <span>Never Use the wrong product</span>
                <span>Try The Home Remedies First !</span>
                <img src={Shade} alt="" />
                <a href="https://ayuchatbot.streamlit.app/" target="_blank" rel="noopener noreferrer">
                    <button className={css.tryOnButton}>Try On Now</button>
                </a>
            </div>
            <div className={css.right}>
                <div className={css.wrapper}>
                    <ReactCompareImage leftImage={Before} rightImage={After} />
                </div>
            </div>
        </div>
    );
};

export default Virtual;
