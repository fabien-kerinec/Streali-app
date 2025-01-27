import { SingleValue } from 'react-select';
import { Select } from '~/components/forms/select/select';
import { GoogleFontsFamily, useGoogleFont } from '~/hooks/fonts/use-google-font';
import { convertFontWeight } from '~/utils/fonts/convert-weight';

export interface FontVariants {
  label: string;
  value: string;
}

export interface FontSelectProps {
  className?: string;
  onChange?: (font: string, variants: { label: string; value: string }[]) => void;
  value: string;
  disabled?: boolean;
  label?: string;
}

export const FontSelect = (props: FontSelectProps) => {
  const { className, onChange, value, disabled, label } = props;
  const { data: fonts } = useGoogleFont();

  function handleFontChange(value: SingleValue<{ value: string; label: string }>) {
    const font = fonts?.find((f: GoogleFontsFamily) => f.family === value?.value);
    const variants = font?.variants.filter((v: string) => !v.includes('italic'));

    if (font) {
      onChange &&
        onChange(
          font.family,
          variants
            ? variants?.map((v: string) => ({
                label: convertFontWeight(v),
                value: v === 'regular' ? '400' : v,
              }))
            : []
        );
    }
  }

  return (
    <Select
      label={label}
      className={className}
      onChange={handleFontChange}
      disabled={disabled}
      defaultValue={{ label: value, value: value }}
      placeholder="Select font"
      options={
        fonts && fonts.length > 0
          ? fonts.map((font: GoogleFontsFamily) => {
              return {
                label: font.family,
                value: font.family,
              };
            })
          : []
      }
    />
  );
};
