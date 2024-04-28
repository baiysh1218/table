export type StateType = {
  id: number;
  image: string;
  description: string;
  date: string;
  numbers: number[];
};

export type ModalComponentProp = {
  open: boolean;
  handleCloseModal: () => void;
  modalImage: string;
  selectedRow: StateType | null;
};
