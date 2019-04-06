/**
 * Author: DuongHan
 * Created: 4/3/19
 *
 */

import { connect } from 'react-redux';
import { compose } from 'redux';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

import { requestPictureType } from './actions';
import PictureTypePage from './PictureTypePage';
import reducer from './reducer';
import saga from './saga';

const mapStateToProps = state => ({
  picTypeList: state.getIn(['pictureContainer', 'picTypeList']),
  errors: state.getIn(['pictureContainer', 'errors']),
});

const mapDispatchToProps = dispatch => ({
  onFetchAllType: () => dispatch(requestPictureType()),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'pictureContainer', reducer });
const withSaga = injectSaga({ key: 'pictureContainer', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(PictureTypePage);
