import React from "react";
import "./css/flower2.css";

const Flower = () => {
    return(
        <div class="flower">
        <div class="f-wrapper">
            <div class="flower__line"></div>
            <div class="f">
                <div class="flower__leaf flower__leaf--1"></div>
                <div class="flower__leaf flower__leaf--2"></div>
                <div class="flower__leaf flower__leaf--3"></div>
                <div class="flower__leaf flower__leaf--4"></div>
                <div class="flower__leaf flower__leaf--5"></div>
                <div class="flower__leaf flower__leaf--6"></div>
                <div class="flower__leaf flower__leaf--7"></div>
                <div class="flower__leaf flower__leaf--8 flower__fall-down--yellow"></div>
            </div>
        </div>

        <div class="f-wrapper f-wrapper--2">
            <div class="flower__line"></div>
            <div class="f">
                <div class="flower__leaf flower__leaf--1"></div>
                <div class="flower__leaf flower__leaf--2"></div>
                <div class="flower__leaf flower__leaf--3"></div>
                <div class="flower__leaf flower__leaf--4"></div>
                <div class="flower__leaf flower__leaf--5"></div>
                <div class="flower__leaf flower__leaf--6"></div>
                <div class="flower__leaf flower__leaf--7"></div>
                <div class="flower__leaf flower__leaf--8 flower__fall-down--pink"></div>
            </div>
        </div>

        <div class="f-wrapper f-wrapper--3">
            <div class="flower__line"></div>
            <div class="f">
                <div class="flower__leaf flower__leaf--1"></div>
                <div class="flower__leaf flower__leaf--2"></div>
                <div class="flower__leaf flower__leaf--3"></div>
                <div class="flower__leaf flower__leaf--4"></div>
                <div class="flower__leaf flower__leaf--5"></div>
                <div class="flower__leaf flower__leaf--6"></div>
                <div class="flower__leaf flower__leaf--7"></div>
                <div class="flower__leaf flower__leaf--8 flower__fall-down--purple"></div>
            </div>
        </div>
        <div class="flower__glass"></div>
    </div>

    );
}


export default Flower;