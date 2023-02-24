
import { StarWarsPeopleList } from './StarWarsPeopleList';
import { useStarWarsPeople } from '../hooks/useStarWarsPeople';

export const StarWarsPeople = () => {

    const { people } = useStarWarsPeople();

    return (
        <div className="container">
            <h1 className="my-4">Star Wars People</h1>
            <StarWarsPeopleList people={people} />
        </div>
    )
}
