import { useDispatch, useSelector } from 'react-redux'
import FiltroCards from '../../components/FiltroCards'

import { RootReducer } from '../../store'
import { alteraTermo } from '../../store/reducers/filtro'

import * as S from './styles'
import * as enums from '../../utils/enums/Tarefa'
import { Campo } from '../../styles'

const BarraLateral = () => {
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  return (
    <S.Aside>
      <div>
        <Campo
          type="text"
          placeholder="buscar"
          value={termo}
          onChange={(e) => dispatch(alteraTermo(e.target.value))}
        />
      </div>
      <S.Filtros>
        <FiltroCards
          valor={enums.Status.PENDENTE}
          criterio="status"
          legenda="pendentes"
        />
        <FiltroCards
          valor={enums.Status.CONCLUIDA}
          criterio="status"
          legenda="concluídas"
        />
        <FiltroCards
          valor={enums.Prioridade.URGENTE}
          criterio="prioridade"
          legenda="urgentes"
        />
        <FiltroCards
          valor={enums.Prioridade.IMPORTANTE}
          criterio="prioridade"
          legenda="importantes"
        />
        <FiltroCards
          valor={enums.Prioridade.NORMAL}
          criterio="prioridade"
          legenda="normal"
        />
        <FiltroCards criterio="todas" legenda="todas" />
      </S.Filtros>
    </S.Aside>
  )
}

export default BarraLateral
