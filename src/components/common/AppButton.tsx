import "./AppButton.css";
interface Props {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  text: string;
  className: string;
  id?: string;
  disabled?: boolean;
}

const AppButton: React.FC<Props> = (props: Props) => {
  const tmpId = props.id ? props.id : "AppButton";
  const isDisabled = props.disabled ? props.disabled : false;
  return (
    <button id={tmpId} onClick={props.onClick} className={`${props.className}`} disabled={isDisabled}>
      {props.text}
    </button>
  );
};
export default AppButton;
