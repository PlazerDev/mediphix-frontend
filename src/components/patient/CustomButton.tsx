

interface Props {
    onClick: () => void;
    label: string;
}

export default function CustomButton({onClick, label}: Props) {
    return (
        <button onClick={onClick}>
            {label}
        </button>
    );
}

