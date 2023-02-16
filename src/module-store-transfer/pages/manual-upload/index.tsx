import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { NotFound, DataLoading, Pagination } from '../../../components';
import { ReduxStateType } from '../../../redux/types';
import { useSearchParameters } from '../../../hooks';

const ManualUpload = () => {
  const dispatch = useDispatch();

  return <>Manual upload</>;
};

export default ManualUpload;
