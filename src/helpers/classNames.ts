type Mods = Record<string, unknown>;

export function classNames(cls: string): string;
export function classNames(
  cls: string,
  modsOrAdditional: Mods | string[]
): string;
export function classNames(
  cls: string,
  mods: Mods,
  additional: string[]
): string;

export function classNames(
  cls: string,
  modsOrAdditional?: Mods | string[],
  additionalOptional?: string[]
): string {
  const modsOrAdditionalIsAdditional = Array.isArray(modsOrAdditional);

  const mods: Mods =
    modsOrAdditional === undefined || modsOrAdditionalIsAdditional
      ? {}
      : modsOrAdditional;

  const additional: string[] =
    additionalOptional === undefined && !modsOrAdditionalIsAdditional
      ? []
      : modsOrAdditionalIsAdditional
      ? modsOrAdditional
      : additionalOptional;

  return [
    cls,
    ...Object.entries(mods)
      .filter(([, value]) => Boolean(value))
      .map(([key]) => key),
    ...additional,
  ].join(" ");
}
