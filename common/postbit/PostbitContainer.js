import { connect } from 'react-redux';
import Postbits from './Postbits';

const mapStateToProps = state => ({

  postbits: state.postbits

});


export default connect(mapStateToProps)(Postbits);
