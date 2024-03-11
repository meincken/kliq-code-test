import styles from './Button.module.css'

export const Button = ({ title }: {title: string}) => {
  return (
    <button className="rounded-lg">
      {title}
    </button>
  )
}