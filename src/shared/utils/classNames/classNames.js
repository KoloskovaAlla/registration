export const classNames = (
  mainClassName,
  mods = {},
  otherClassNames = []
) => {
  return [
    mainClassName,
    ...Object.entries(mods)
      .filter((mod) => Boolean(mod[1]))
      .map((mod) => mod[0]),
    ...otherClassNames.filter(Boolean),
  ].join(' ');
};
