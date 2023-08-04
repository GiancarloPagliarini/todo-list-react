import { useDispatch, useSelector } from 'react-redux'
import FiltroCards from '../../components/FiltroCards'

import * as S from './styles'
import { RootReducer } from '../../store'
import { alteraTermo } from '../../store/reducers/filtro'

const BarraLateral = () => {
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  return (
    <S.Aside>
      <div>
        <S.Campo
          type="text"
          placeholder="buscar"
          value={termo}
          onChange={(e) => dispatch(alteraTermo(e.target.value))}
        />
      </div>
      <S.Filtros>
        <FiltroCards legenda="pendentes" contador={3} />
        <FiltroCards legenda="concluídas" contador={4} />
        <FiltroCards legenda="urgentes" contador={2} />
        <FiltroCards legenda="importantes" contador={2} />
        <FiltroCards legenda="normal" contador={3} />
        <FiltroCards ativo legenda="todas" contador={7} />
      </S.Filtros>
    </S.Aside>
  )
}

export default BarraLateral
