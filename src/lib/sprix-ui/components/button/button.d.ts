declare global {
	namespace Button {
		type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
		type Role = 'primary' | 'secondary' | 'tertiary' | 'danger' | 'success' | 'warning';
		type Variant = 'default' | 'flat' | 'quiet' | 'outline' | 'soft' | 'disabled';

		interface Props {
			id?: string;
			type?: Utils.ButtonAttrs['type'];
			size?: Size;
			role?: Role;
			variant?: Variant;
			disabled?: boolean;
			loading?: boolean;
			class?: string;
			name?: string;
			value?: string | number;
			ariaLabel?: string;
			ariaCurrent?: Utils.AriaCurrent;
			ariaControls?: string;
			ariaExpanded?: boolean;
			ariaHaspopup?: Utils.AriaHasPopup;
			children?: Utils.Snippet;
			leftSlot?: Utils.Snippet;
			rightSlot?: Utils.Snippet;
			onclick?: (event: Utils.MouseEvent<HTMLButtonElement>) => void;
			onfocus?: (event: Utils.FocusEvent<HTMLButtonElement>) => void;
			onblur?: (event: Utils.FocusEvent<HTMLButtonElement>) => void;
			onkeydown?: (event: Utils.KeyboardEvent<HTMLButtonElement>) => void;
		}

		type SizeClass = Record<Size, string>;
		type RoleClass = Record<Role, string>;
		type VariantClass = Record<Variant, string>;
	}
}

export {};
