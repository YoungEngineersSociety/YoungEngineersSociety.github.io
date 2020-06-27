export type Button = ButtonData | null;

type ButtonType = 'primary' | 'secondary' | 'tertiary';

interface ButtonData {
    text: string,
    type: ButtonType
}

export const EvolveButton = (text: string, type: ButtonType): Button => ({
    text,
    type
})