import * as React from "react";
import * as ReactDOM from "react-dom"

import SmokeText from "../../components/base/SmokeText";


describe('SmokeText Test: trying to find words', () => {

    let container;

    beforeEach(()=>{
        container = document.createElement("div");
    })
    afterEach(()=>{
        container.remove()
    })
    test('RegExp test', () => {

        ReactDOM.render(
            <SmokeText>Москва</SmokeText>,
            container
        );
        expect(/м.*о.*с.*к.*в.*а/i.test(container.outerHTML)).not.toBeTruthy()
    });

    test('ReverseWord regexp', () => {
        ReactDOM.render(
            <SmokeText>Москва</SmokeText>,
            container
        );
        expect(/а.*в.*к.*с.*о.*м/i.test(container.outerHTML)).not.toBeTruthy()
    });

});
