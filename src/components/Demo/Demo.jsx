import './Demo.css';

export function Demo({ content }) {
  return <div className="Demo">Demo {content}</div>;
}

Demo.defaultProps = {
  content: '😃',
};
