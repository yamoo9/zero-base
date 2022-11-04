export const PrettyPrintCode = ({
  code,
}: {
  code: unknown;
}): JSX.Element | null => {
  return code ? <pre>{JSON.stringify(code, null, 2)}</pre> : null;
};
