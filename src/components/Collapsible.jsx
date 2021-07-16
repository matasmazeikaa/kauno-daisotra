import React from 'react';
import cx from 'classnames';
import Collapse from '@kunukn/react-collapse';
import './Collapsable.scss';
import ChevronDown from '../../static/img/chevron-down.svg';

const Collapsable = ({ items }) => {
	const [collapsibles, setCollapsible] = React.useState({
		isOpen1: false,
	});

	const toggleCollapsible = (collapsibleNumber) => {
		const collapsibleState = `isOpen${collapsibleNumber}`;
		setCollapsible((prevState) => ({
			[collapsibleState]: !prevState[collapsibleState],
		}));
	};

	return items.map((item, index) => (
		<div
			data-sal={index === 0 ? 'slide-right' : 'slide-left'}
			data-sal-delay={((index + 1) * 100) + 200}
			data-sal-duration="1000"
			key={item.title}
		>
			<button
				onClick={() => toggleCollapsible(item.title)}
				className={cx({
					collapsible__button: true,
					'collapsible__button--active': collapsibles[`isOpen${item.title}`],
				})}
				type="button"
			>
				<img className="mr-24" src={item.image.image.publicURL} alt={item.image.alt} />
				<h3 className="collapsible__title">{item.title}</h3>
				<img
					src={ChevronDown}
					alt="chevron-down"
					className={cx({
						collapsible__chevron: true,
						'collapsible__chevron--active': collapsibles[`isOpen${item.title}`],
					})}
				/>
			</button>
			<Collapse
				isOpen={collapsibles[`isOpen${item.title}`]}
				className={`collapsible__collapse collapsible__collapse--gradient ${
					collapsibles[`isOpen${item.title}`]
						? 'collapsible__collapse--active'
						: ''
				}`}
			>
				<p className="collapsible__body body-small">{item.description}</p>
			</Collapse>
		</div>
	));
};

export default Collapsable;
