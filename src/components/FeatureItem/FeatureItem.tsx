import './FeatureItem.scss';

interface ItemProps {
	icon: string;
	alt: string;
	title: string;
	text: string;
}

const FeatureItem: React.FC<ItemProps> = ({ icon, alt, title, text }) => {
	return (
		<div className='feature-item'>
			<img src={icon} alt={alt} className='feature-icon' />
			<h3 className='feature-item-title'>{title}</h3>
			<p>{text}</p>
		</div>
	);
};
export default FeatureItem;
