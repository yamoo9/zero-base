import './DataFetchDemo.css';
import { withFetch } from 'hoc/withFetch';

export const DataFetchDemo = withFetch(function DataFetchDemo({
  loading,
  error,
  data,
}) {
  if (loading) {
    return <div role="alert">로딩 중...</div>;
  }

  if (error) {
    return <div role="alert">{error.message}</div>;
  }

  return <div className="DataFetchDemo">DataFetchDemo</div>;
});
