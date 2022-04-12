import React from 'react';

interface C8IconProps {
	from: string;
	to: string;
}

const C8Icon: React.FC<C8IconProps> = ({ from, to }) => {
	const iconStyles: React.CSSProperties = {
		borderRadius: '50%',
		border: '2px solid black',
		padding: '20px',
		width: '70px',
		height: '70px',
		margin: '0'
	}

	return (
		<div className='c8-icon' style={iconStyles}>
			<span style={iconSpanStyles}>{from}</span>
			<div className='divider' />
			<span style={iconSpanStyles} className='c8-right'>{to}</span>
		</div>
	);
}

const iconSpanStyles = {
	display: 'inline-block',
	marginRight: '40px',
	marginTop: '10px'
}

export default C8Icon
