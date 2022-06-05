import * as React from 'react';
import { tangleWholeWord } from '@/utils/tangle';

export default ({children, ...props}) => {
	if (typeof children === 'string') {
		return (
			<div
				{...props}
				dangerouslySetInnerHTML={{__html: tangleWholeWord(children)}}
			/>
		);
	}

	return (
		<div
			{...props}
		>{children}</div>
	);
};
