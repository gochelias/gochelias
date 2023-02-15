import { Dispatch, SetStateAction } from 'react';

export type DialogType = 'Success' | 'Error' | 'InternalError';

export interface DialogData {
	type: DialogType;
	title?: string;
	description?: string;
}

export interface DialogProps extends DialogData {
	isOpen: boolean;
	setIsOpen: Dispatch<SetStateAction<boolean>>;
}
