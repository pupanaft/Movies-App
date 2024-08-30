import { Input } from 'antd'

export default function HeaderSearch({ serchMovie, setSerchMovie }) {
  return <Input value={serchMovie} onChange={(e) => setSerchMovie(e.target.value)} placeholder="Type to search..." />
}
