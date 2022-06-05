import * as React from 'react';

type ImageProps = {
	src?: string,
	className?: string,
	height?: string | number,
	width?: string | number,
}

// Задание: обновить компонент Image таким образом, чтобы он отрисовывал изображение 
// с помощью тега div (с class="..."), а не img;
// Решение: заменим на тег div с canvas внутри, в него через url передадим src изображения
export const Image: React.FunctionComponent<ImageProps> = ({src = '', className, ...props}: ImageProps) => {
	const imageURLStyle = React.useMemo(
        () => ({
            ['backgroundImage']: `url(${src})`
        }),
        [src]
    );
	const additionalStyles = React.useMemo(
		() => Object.keys(props).reduce((result: any, currentStyle) => (
			{
				...result,
				[currentStyle]: Number(props[currentStyle]) || props[currentStyle]
			}
		), {}),
		[src, props]
	);
	console.log(additionalStyles);

	return (
		<div className={className}>
			<canvas style={{...imageURLStyle, ...additionalStyles}}/>
		</div>
	);
};

export default Image;
