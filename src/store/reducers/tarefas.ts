import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Tarefa from '../../models/Tarefa'

import * as enums from '../../utils/enums/Tarefa'

const tarefasSlice = createSlice({
  name: 'tarefas',
  initialState: [
    new Tarefa(
      1,
      'Estudar TS',
      enums.Prioridade.URGENTE,
      enums.Status.PENDENTE,
      'Começar por POO'
    ),
    new Tarefa(
      2,
      'Estudar ReactJS',
      enums.Prioridade.IMPORTANTE,
      enums.Status.CONCLUIDA,
      'Começar por useState'
    ),
    new Tarefa(
      3,
      'Estudar Redux',
      enums.Prioridade.URGENTE,
      enums.Status.CONCLUIDA,
      'Estudar sobre useSelector'
    )
  ],
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state = state.filter((tarefa) => tarefa.id !== action.payload)
    }
  }
})

export const { remover } = tarefasSlice.actions

export default tarefasSlice.reducer
