import { renderHook, act, waitFor } from '@testing-library/react'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import useFetch from './useFetch'

// Crea una instancia del adaptador de axios mock para simular las solicitudes
const mock = new MockAdapter(axios)

// Mock de respuesta exitosa
mock.onGet('https://example.com/api/data').reply(200, { data: 'mocked data' })

// Mock de respuesta de error
mock.onGet('https://example.com/api/error').networkError()

describe('useFetch', () => {
  it('debería realizar una solicitud exitosa', async () => {
    const { result } = renderHook(() => useFetch('https://example.com/api/data'))

    expect(mock.history.get.length).toBe(0)
    expect(result.current.loading).toBe(false)

    await act(async () => {
      result.current.doFetch()
      await waitFor(() => {
        result.current.loading === false
      })
    })

    expect(mock.history.get.length).toBe(1)
    expect(result.current.loading).toBe(false)
    expect(result.current.error).toBe(null)
    expect(result.current.response).toMatchObject({ data: 'mocked data' })
  })
})
