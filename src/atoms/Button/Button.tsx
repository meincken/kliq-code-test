import { tv, type VariantProps } from 'tailwind-variants';

export const button = tv({
  base: 'flex items-center rounded-lg py-2 px-4 text-white text-sm mr-5',
  variants: {
    color: {
      primary: 'bg-[#1C3838] text-white',
      secondary: 'bg-transparent text-black border-black border-2'
    }
  }
});

type ButtonVariants = VariantProps<typeof button>;

interface ButtonProps extends ButtonVariants {
  children: React.ReactNode;
}

export const Button = (props: ButtonProps) => {
  return <button className={button(props)}>{props.children}</button>;
};
