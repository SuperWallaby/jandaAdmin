import React from 'react';
import { JDtypho, JDatomClasses, JDalign, IJDalignProp } from '@janda-com/front';
import { JDatomExtentionSet, TElements } from '@janda-com/front/build/types/interface';
import classNames from 'classnames';

export interface ILabelValueProp extends JDatomExtentionSet {
	label?: string;
	value?: TElements;
	align?: IJDalignProp;
}

export const LabelValue: React.FC<ILabelValueProp> = ({ label, value, align, ...props }) => {
	
	const classes = classNames('LabelValue', align?.className, {
		...JDatomClasses(props)
	});

	return (
	<JDalign {...align} className={classes}>
		<JDtypho weight={600} color="grey5" mr="small">
			{label}
		</JDtypho>
		{typeof value === "string" ? <JDtypho weight={300} color="grey4">
			{value}
		</JDtypho> : value}
		
	</JDalign>
	);
}