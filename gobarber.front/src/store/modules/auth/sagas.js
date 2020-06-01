import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '~/services/api';
import history from '~/services/history';

import { singInSuccess, singFailure } from './actions';

export function* singIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, 'sessions', {
      email,
      password,
    });

    const { token, user } = response.data;

    if (!user.provider) {
      toast.error('O Usuário não é prestador de serviços');
      return;
    }
    yield put(singInSuccess(token, user));

    history.push('/dashboard');
  } catch (error) {
    toast.error('Falha na autenticação do usuário');
    yield put(singFailure());
  }
}
export default all([takeLatest('@auth/SING_IN_REQUEST', singIn)]);
