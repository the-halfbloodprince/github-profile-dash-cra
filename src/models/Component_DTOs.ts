export interface SubmitHandlers {
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    onKBDAction?: React.KeyboardEventHandler<HTMLInputElement>;
    onSubmit?: React.MouseEventHandler<HTMLButtonElement>
}