type Mods = Record<string, unknown>;

export function classNames(cls: string): string;
export function classNames(
  cls: string,
  modsOrAdditional: Mods | (string | undefined)[],
): string;
export function classNames(
  cls: string,
  mods: Mods,
  additional: (string | undefined)[],
): string;

export function classNames(
  this: Record<string, string> | undefined,
  cls: string,
  modsOrAdditional: Mods | (string | undefined)[] = {},
  additionalOptional: (string | undefined)[] = [],
): string {
  const modsOrAdditionalIsAdditional = Array.isArray(modsOrAdditional);

  const mods: Mods = modsOrAdditionalIsAdditional ? {} : modsOrAdditional;

  const additional: (string | undefined)[] = modsOrAdditionalIsAdditional
    ? modsOrAdditional
    : additionalOptional;

  return [
    this?.[cls] ?? cls,
    ...Object.entries(mods)
      .filter(([, value]) => Boolean(value))
      .map(([key]) => this?.[key] ?? key),
    ...additional.filter(Boolean).map((key) => this?.[key as string] ?? key),
  ].join(" ");
}

export const classNamesBind = (styles: Record<string, string>) =>
  classNames.bind(styles);
