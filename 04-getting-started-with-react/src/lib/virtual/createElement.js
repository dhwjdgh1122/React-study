function createElement(type, props, ...children) {
  return {
    $$typeof: Symbol('virtual.element'),
    type,
    key: props?.key ?? null,
    props: { ...props, children: [...(props?.children ?? []), ...children] },
  };
}

export default createElement;