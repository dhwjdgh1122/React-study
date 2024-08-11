function Headline() {
  const abbrs = {
    html: 'Hyper Text Markup Language',
    jsx: {
      abbr: 'JavaScript eXtension for ECMAScript',
      text: 'JSX',
    },
  };

  return (
    <h1>
      <abbr title={abbrs.html}>HTML</abbr> vs.{' '}
      <abbr title={abbrs.jsx.abbr}>{abbrs.jsx.text}</abbr> 마크업
    </h1>
  );
}

export default Headline;
