import React from 'react'
import PetList from '../../components/PetList'
import { getPetData } from '../../services/petService'
import {petDataHandler} from '../../actions/petActions'
import { connect } from 'react-redux';

class PetContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            maleCat:[],
            femaleCat:[]

        }
    }

    componentDidMount() {
        const {petDataHandler} = this.props
        petDataHandler()
    }

    render() {
        console.log(this.props)
        const {petData} = this.props
        const{maleCat, femaleCat} = petData
        return (
            <div>
                <PetList gender="male" pets={maleCat} />
                <PetList gender="female" pets={femaleCat} />
            </div>
        );
    }

};

const mapStateToProps = (state) => {
    const {pet} = state
    const{petData} = pet
    return {
        petData
    }
}


export default connect(
    mapStateToProps,
    {
        petDataHandler
    }
)(PetContainer);

