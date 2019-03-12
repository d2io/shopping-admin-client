/**
 * Author: DuongHan
 * Created: 3/12/19
 *
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the HomePage container!',
  },

  notFoundTitle: {
    id: `${scope}.notFoundTitle`,
    defaultMessage: 'Lỗi 404 !',
  },

  notFoundDesc: {
    id: `${scope}.notFoundDesc`,
    defaultMessage: 'Trang bạn yêu cầu không tìm thấy !',
  },
});
