import { tangleSymbol } from "../../utils/tangle";
import * as React from "react";

// Идея: возьмём каждое слово, используем reverse, заменим по возможности символы (см. tangle.ts)
// и вставим с использованием направления справа налево
export default ({children, index, transform}) => {
    if (typeof children !== 'string')
        return children;
    return (
        // Поскольку tangleSymbol может поменять символы на любой другой (в теории), лучше 
        // использовать bdi и bdo
        <bdi dir='rtl' key={index}>
            <bdo dir='rtl' className={transform ? transform(`nobr`) : null}>
                <span 
                    style={{visibility: "hidden"}} 
                    className={transform ? transform(`invisible`) : null}>
                        .
                </span>
                {children ? children.split('').reverse().map((letter) => tangleSymbol(letter)) : null }
            </bdo>
        </bdi>
    );
};