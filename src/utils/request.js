import { ref } from 'vue'
import useLoading from './loading'

export default function useRequest(api, defaultValue = [], isLoading = true) {
  const { loading, setLoading } = useLoading(isLoading)
  const response = ref()

  api()
    .then(res => {
      response.value = res.data
    })
    .finally(() => {
      setLoading(false)
    })

  return { loading, response }
}
