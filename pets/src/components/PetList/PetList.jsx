const PetList = (props) => {
    return (
        <div>
            <h1>{props.gender}</h1>
            {props.pets.length === 0 ?
                <p>No {props.gender} cats recorded</p> :
                <ul>
                    {props.pets.sort().map((item, i) =>
                        <li key={`${props.gender}_cat_key_${i}`}>{item}</li>
                    )}
                </ul>}
        </div>
    );
};

export default PetList;