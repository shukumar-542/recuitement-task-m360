import { FaStar } from 'react-icons/fa';

interface RatingProps {
    num: number;
}

const Rating = ({num}  : RatingProps) => {
    const rating = [];
    for (let i = 0; i < num; i++) {

        rating.push(<FaStar fill="#FFBF00" size={15} />)
    }
    return (
        rating
    )
};

export default Rating;