declare global {
	namespace Utils {
		type Snippet<Args extends unknown[] = []> = import('svelte').Snippet<Args>;
		type AnchorAttrs = import('svelte/elements').HTMLAnchorAttributes;
		type AnchorTarget = import('svelte/elements').HTMLAttributeAnchorTarget;
		type AriaCurrent = import('svelte/elements').AriaAttributes['aria-current'];
		type AriaHasPopup = import('svelte/elements').AriaAttributes['aria-haspopup'];
		type ButtonAttrs = import('svelte/elements').HTMLButtonAttributes;
		type MouseEvent<T extends EventTarget = HTMLElement> = globalThis.MouseEvent & {
			currentTarget: EventTarget & T;
		};
		type FocusEvent<T extends EventTarget = HTMLElement> = globalThis.FocusEvent & {
			currentTarget: EventTarget & T;
		};
		type KeyboardEvent<T extends EventTarget = HTMLElement> = globalThis.KeyboardEvent & {
			currentTarget: EventTarget & T;
		};
		type DOMEvent<T extends EventTarget = EventTarget, E extends Event = Event> = E & {
			currentTarget: EventTarget & T;
		};
	}

	namespace Icon {
		type Name = string;
	}
}

export {};
