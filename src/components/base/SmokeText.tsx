import * as React from "react";
import Mask from "./Mask";

// Задание: Обновить компонент SmokeText таким образом, чтобы он динамически маскировал 
// выдаваемую строку (обезопасить от возможности найти блок с помощью XPath или регулярного 
// выражения при следующей перерисовки);
// Решение: при использовании SmokeText в teaser/index.tsx следует использовать transform - 
// он передаётся в teaser, но изначально там не используется. Добавим его в SmokeText, после чего
// будем маскировать строку при помощи нового компонента Mask (см. Mast.tsx)
export default ({children, transform = null}) => {
	if (typeof children !== 'string')
		return children;
	return (
		<>
			{
				children.split(' ').map((word, index) => (
					<Mask
						transform={transform}
						index={index}
						key={index}>
							{word}
					</Mask>
				))
			}
		</>
	);
};
